import { SpheronClient, ProtocolEnum } from "@spheron/storage";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req:Request,res:Response){
 try{
    const bucketName = 'fileupload'
    const protocol = ProtocolEnum.IPFS;
    if(!process.env.SPHERON_TOKEN){
        console.log('no token set')
        throw new Error('no token')
    }
    const client = new SpheronClient({
        token:process.env.SPHERON_TOKEN
    })
    const { uploadToken } = await client.createSingleUploadToken({
        name: bucketName,
        protocol,
      });
      return Response.json({
        uploadToken
      },{status:200})

 }catch(error){
    console.log(error)
 }
}