"use server"
// src\services\create.ts
import { client } from "@/sanity/lib/client";


// --------------------------------------------------------------fetch
export const myFetch = async (blog_id: number) => {
  const comments = await client.fetch(
    `*[_type == "comment" && paramsId == ${blog_id}]`
  );
  return comments;
};



// --------------------------------------------------------------create
interface Comment {
  name: string;
  email: string;
  message: string;
  paramsId: number;
}

export const createComment = async (newComment: Comment) =>{
    await client.create({  
      _type: 'comment',
      ...newComment,
    });
    
    return await myFetch(newComment.paramsId);
}



// --------------------------------------------------------------Update
export const updateComment = async (_id: string, UpdatedComment: Comment) =>{
    await client.patch(_id)
    .set({
      name: UpdatedComment.name,
      email: UpdatedComment.email,
      message: UpdatedComment.message
    })
    .commit();
    
    return await myFetch(UpdatedComment.paramsId);
}


// --------------------------------------------------------------Delete
export const deleteComment = async (_id: string, paramsId: number) =>{
    await client.delete(_id)

    return await myFetch(paramsId);
}






