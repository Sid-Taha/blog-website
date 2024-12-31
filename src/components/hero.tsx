import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

export interface ICard {
  cardImg: string;
  description: PortableTextBlock[];
  category: string;
  date: string;
  heading: string;
  id: string;
}

export default async function Hero() {

  const res: ICard[] = await client.fetch(`*[_type == 'cards'][0].cards[]{
  'cardImg': cardImg.asset->url,
  'description': description,
  'category': category,
  'date': date,
  'heading': heading,
  'id': id
}`)

  const cardQuantity = res.length
  const cardRandomNumber = Math.floor(Math.random() * cardQuantity)
  const { cardImg, description, heading, id } = res[cardRandomNumber];
  
  return (
    <div className="relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute left-0 top-0 w-[685px] h-[378px] opacity-30">
        <svg viewBox="0 0 685 378" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0H685V378H0V0Z" fill="#2e0249" fillOpacity="0.27"/>
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-[777px] h-[378px] opacity-30">
        <svg viewBox="0 0 777 378" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0H777V378H0V0Z" fill="#2e0249" fillOpacity="0.27"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative min-h-[796px] bg-[#2e0249] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <span className="inline-block text-[#eeeeee] font-bold text-base tracking-wider uppercase">
                Featured Post
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {heading}
              </h1>
              <div className='w-full h-[200px] overflow-hidden text-[#eeeeee] text-lg max-w-xl'>
                  <PortableText value={description} />
              </div>
              <Link 
                href={`/blog/${id}`}
                className="inline-block px-12 py-4 bg-buttonColor text-buttonTextColor font-bold rounded-lg hover:bg-HoverButtonColor hover:text-buttonHoverTextColor transition-colors duration-300"
              >
                Read more
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-square max-w-[608px] mx-auto lg:ml-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#eeeeee] bg-opacity-10 p-4">
                <Image
                  src={cardImg}
                  alt="AI Future Illustration"
                  width={608}
                  height={576}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
