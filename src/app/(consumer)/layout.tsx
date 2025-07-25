import {ReactNode, Suspense} from "react";
import Link from "next/link";
import {SignedIn} from "@clerk/nextjs";

export default function ConsumerLayout({children}): Readonly<{ children: ReactNode }> {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

function Navbar() {
    return (
        <header className="flex h-12 shadow bg-background z-10">
            <nav className='flex gap-4 container'>
                <Link className='mr-auto text-lg hover:underline flex items-center' href='/'>
                    OH Studio
                </Link>
                <Suspense>
                    <SignedIn>
                        <Link className='hover:bg-accent/10 flex items-center px-2' href='/courses'>
                            My Courses
                        </Link>
                        <Link className='hover:bg-accent/10 flex items-center px-2' href='/purchases'>
                            Purchase History
                        </Link>
                        <div className="size-8 self-center"></div>
                    </SignedIn>
                </Suspense>
            </nav>
        </header>
    )
}