import {insertUser} from "@/features/users/db/users";
import {syncClerkUserMetadata} from "@/services/clerk";
import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

export async function GET(requset: Request) {
  const user = await currentUser();

  if (user == null) return new Response('User not found', {status: 404});
  if (user.fullName == null) {
    return new Response('User name missing', {status: 404});
  }
  if (user.primaryEmailAddress?.emailAddress == null) {
    return new Response('User email missing', {status: 404});
  }

  const dbUser = await insertUser({
    clerkUserId: user.id,
    name: user.fullName,
    email: user.primaryEmailAddress.emailAddress,
    imageUrl: user.imageUrl,
    role: user.publicMetadata?.role ?? 'user'
  });

  await syncClerkUserMetadata(dbUser);
  await new Promise(resolve => setTimeout(resolve, 100));

  return NextResponse.redirect(
    new URL(requset.headers.get('referer') ?? '/', requset.url)
  );
}
