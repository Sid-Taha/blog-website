import { Button } from "@/components/ui/button"
import Image from "next/image"
import MyCards from "./myCards"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { PortableText, PortableTextBlock } from "@portabletext/react"

interface IBlogPost {
  cardImg: string;
  description: PortableTextBlock[];
  category: string;
  date: string;
  heading: string;
  id: string;
}


export default async function BlogPost() {
  
    const res: IBlogPost[] = await client.fetch(`*[_type == 'cards'][0].cards[]{
    'cardImg': cardImg.asset->url,
    'description': description,
    'category': category,
    'date': date,
    'heading': heading,
    'id': id,
  }`)
  
    const cardQuantity = res.length
    const cardRandomNumber = Math.floor(Math.random() * cardQuantity)
    const { cardImg, description, category, date, heading, id } = res[cardRandomNumber];
  
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold font-raleway text-[#333333] tracking-tight">Our Recent Post</h2>
        <Link href="/blog">
          <Button variant="secondary" className="bg-buttonColor hover:bg-buttonColor text-buttonTextColor hover:text-buttonTextColor">
            View All
          </Button>
        </Link>
      </div>

      {/* Featured Post */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={cardImg}
            alt="Blog Post Image"
            width={712}
            height={456}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-lg font-bold text-[#333333]">{category}</span>
            <span className="text-xs text-[#999999]">{date}</span>
          </div>
          <h3 className="text-4xl font-bold font-raleway text-[#333333] mb-6 leading-tight">{heading}</h3>
          <div className='w-full h-[200px] overflow-hidden text-[#666666] text-lg max-w-xl mb-8'>
             <PortableText value={description}/>
          </div>
          <Link href={`/blog/${id}`}>
            <Button variant="outline" className="w-fit border-buttonColor text-buttonColor hover:bg-buttonColor hover:text-white">
              Read More
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {res.reverse().slice(0, 3).map((post: IBlogPost, index: number) => (
          <MyCards key={index} post={post}/>
        ))}
      </div>
    </section>
  )
}

