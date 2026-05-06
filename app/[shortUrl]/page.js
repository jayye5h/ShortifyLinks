import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const shortUrl = (await params).shortUrl
    const client = await clientPromise;
    const db = client.db("ShortifyLinks");
    const collection = db.collection("URL");

    //check if URL exist in the database
    const doc = await collection.findOne({ shorturl: shortUrl })
    if (doc) {
        redirect(doc.url)

    }
    else {
        redirect(process.env.NEXT_PUBLIC_HOST_URL)
    }
    return <div>My Post: {shortUrl}</div>
}