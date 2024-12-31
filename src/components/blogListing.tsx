import { PortableTextBlock } from "@portabletext/types";
import MyCards from "./myCards"
import { client } from "@/sanity/lib/client"

export interface BlogPost {
  cardImg: string;
  description: PortableTextBlock[];
  category: string;
  date: string;
  heading: string;
  id: string;
}
async function BlogListing() {
  

    const res: BlogPost[] = await client.fetch(`*[_type == 'cards'][0].cards[]{
    'cardImg': cardImg.asset->url,
    'description': description,
    'category': category,
    'date': date,
    'heading': heading,
    'id': id
  }`)
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <span className="text-sm font-bold tracking-wider text-gray-600 uppercase font-raleway">
          OUR BLOGS
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800 font-raleway">
          Find our all blogs from here
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          our blogs are written from very research research and well known writers writers so that we can provide you the best blogs and articles articles for you to read them all along
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {res.map((post: BlogPost, index:number) => (
          <MyCards key={index} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default BlogListing