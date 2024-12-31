import { client } from "@/sanity/lib/client"
import Image from "next/image"
import {PortableText} from '@portabletext/react'
import PostCreator from "@/components/comments"

async function DynamicPage({params}: {params: Promise<{blog_id: number}>}) {
  
  const {blog_id} = await params

  interface Card {
    cardImg: string;
    description: string;
    category: string;
    date: string;
    heading: string;
    id: number;
  }

  const res = await client.fetch(`*[_type == 'cards'][0].cards[]{
  'cardImg': cardImg.asset->url,
  'description': description,
  'category': category,
  'date': date,
  'heading': heading,
  'id': id
}`)

  const card_result = res.find((item: Card)=> (item.id == blog_id))

  return (
    <div className='mt-16'>
       <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      < header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
          {card_result?.heading}
        </h1>
        <time className="text-gray-600 text-lg">{card_result?.date}</time>
      </header>

      <div className="mb-8 md:mb-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={card_result?.cardImg || "/placeholder.svg?height=576&width=608"}
            alt="Interior of modern cafe with wooden furniture, industrial lighting, and a distinctive staircase"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText value={card_result.description}/>,
      </div>
      <hr />
      <h2 className="text-2xl font-bold mt-12 mb-4">Comments</h2>
      <PostCreator blog_id={blog_id}/>
    </article>
    </div>
  )
}

export default DynamicPage

