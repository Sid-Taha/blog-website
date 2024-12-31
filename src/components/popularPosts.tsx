import { Button } from "@/components/ui/button"
import MyCards from "./myCards"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { ICard } from "./hero"

export default async function PopularPosts() {
  
    const res: ICard[] = await client.fetch(`*[_type == 'cards'][0].cards[]{
    'cardImg': cardImg.asset->url,
    'description': description,
    'category': category,
    'date': date,
    'heading': heading,
    'id': id
  }`)
  
  return (
    <div className="bg-[#2e0249]">
         <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold tracking-tight text-[#2e0249]">Popular Post</h2>
        <Link href={'/blog'}>
          <Button variant="default" className="bg-[#a91079] text-white hover:bg-[#6B3ED3]">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {res.slice(0,6).map((post, index: number) => (
          <MyCards key={index} post={post}/>
        ))}
      </div>
    </section>
    </div>
 
  )
}
