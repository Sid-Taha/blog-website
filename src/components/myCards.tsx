import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { BlogPost } from "./blogListing"

function MyCards({post}: {post: BlogPost}) {
  return (
    <>
      <Card key={post.id} className="flex flex-col bg-[#eeeeee]">
        <CardHeader className="p-0">
          <div className="relative aspect-[400/360] w-full overflow-hidden rounded-t-lg">
            <Image
              src={post.cardImg}
              alt="card image"
              fill
              className="object-cover"
              priority={parseInt(post.id) <= 3}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs font-bold text-[#2e0249]">{post.category}</span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-cardHeading line-clamp-2">{post.heading}</h3>
          <p className="text-[#6B3ED3] line-clamp-3">
            <PortableText value={post.description}/>
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`/blog/${post.id}`}>
            <Button variant="link" className="text-readMoreTextColor hover:text-readMoreHoverTextColor px-0">
              Read More...
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}

export default MyCards