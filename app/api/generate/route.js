import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json();
    console.log(body)


    const client = await clientPromise;
    const db = client.db("ShortifyLinks");
    const collection = db.collection("URL");

    //check if URL exist in the database
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {

        return Response.json({ success: false, error: true, message: 'URL already Exist' })
    }
    const result = collection.insertOne(
        {
            url: body.url,
            shorturl: body.shorturl
        }
    )


    return Response.json({ success: true, error: false, message: 'Generated URL Successfully' })
}