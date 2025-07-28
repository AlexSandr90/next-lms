import {db} from "@/drizzle/db";
import {cacheTag} from "next/dist/server/use-cache/cache-tag";

export default async function HomePage() {

  return (
    <div className="container my-6">
      <div className='grid grid-cols-[repeat(auto-fill, minmax(300px, 1fr))] gap-4'>
        <h1>HI</h1>
      </div>
    </div>
  )
}


async function getPublicProducts() {
  // 'use cache'
  // cacheTag(getProductGlobalTag())
}