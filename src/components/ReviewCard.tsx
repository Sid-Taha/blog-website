//src\components\ReviewCard.tsx

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import { Edit2, Trash2 } from "lucide-react"


interface Data {
  _id: string;
  name: string;
  email: string;
  message: string;
  paramsId: number;
}

export default function ReviewCard({ data, setUpdateInputFields, deleteFunction }: { data: Data, setUpdateInputFields: (data: Data) => void, deleteFunction: (id: string) => void }) {
  
  const {_id, name, message} = data

  const isLong = message.length > 30

  const handleUpdate = () => {
    setUpdateInputFields(data)
  }

  const handleDelete = () => {
    deleteFunction(_id)
  }
  
  return (
    <Card className="w-full mt-10 bg-[#f3f4f6]">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/user.png"
                alt="User avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#323232]"><b>{name}</b></span>
              <span className="w-1 h-1 bg-[#323232] rounded-full" />
              <Badge variant="secondary" className="bg-blue-500 hover:bg-blue-500 text-white font-normal">
                Verified
              </Badge>
            </div>
          </div>
            <div className="flex gap-2">
            <Button variant="ghost" size="icon" 
              onClick={handleUpdate} // <-- Hook up update
            >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon"
            onClick={handleDelete} // <-- Hook up delete 
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        </div>
        
        <div className="space-y-4 ml-10">
          <p className="text-sm text-[#323232] leading-relaxed">
            {message}
          </p>
          {isLong && (
            <button className="text-sm font-medium text-[#72479C] text-right w-full">
              Read More
            </button>)}
        </div>
      </CardContent>
    </Card>
  )
}