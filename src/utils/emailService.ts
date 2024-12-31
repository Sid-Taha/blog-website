import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams: Record<string, string>)=>{
  try{
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const responce = await emailjs.send(serviceID, templateID, templateParams, publicKey);

    return responce;
  }
  catch (error){
    console.error('Failed to send email',error);
    throw error;
  }
}
