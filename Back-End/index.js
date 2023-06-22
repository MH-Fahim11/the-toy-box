const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Key}@cluster0.mllrmzg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db("toysDB");
    const toyCollection = database.collection("toys");
    // get all toys and some toys by email
    app.get("/toys", async (req, res) => {
      let query = {};
      console.log(query)
      console.log(req.query?.email)
      console.log(req.query?.key)
      if (req.query?.email) {
        query = { sellerEmail: req.query.email };
        if (req.query?.key) {
          if(parseInt (req.query.key)===1 || parseInt (req.query.key)===-1){
            const cursor = toyCollection.find(query).sort({ "price": parseInt(req.query.key) });
            const result = await cursor.toArray();
            res.send(result); 
          }else{
            const cursor = toyCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
          }
           
        }
      } else {
        const cursor = toyCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
      }
    });

    // get a toy by id
    app.get("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const toy = await toyCollection.findOne(query);
      res.send(toy);
    });

    // post a toy
    app.post("/toys", async (req, res) => {
      const toy = req.body;
      let intPrice = parseInt(toy.price)
      
      const updatedToy = {
          sellerName: toy.sellerName,
          sellerEmail:toy.sellerEmail,
          photo: toy.photo,
          toyName: toy.toyName,
          price: intPrice ,
          rating: toy.rating,
          quantity: toy.quantity,
          description: toy.description,
          selectedCategory: toy.selectedCategory,
      };
      const result = await toyCollection.insertOne(updatedToy);
      res.send(result);
    });
    // update an Item
    app.put("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const toy = req.body;
      let intPrice = parseInt(toy.price)
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedToy = {
        $set: {
          price: intPrice ,
          quantity: toy.quantity,
          description: toy.description,

        },
      };
      const result = await toyCollection.updateOne(filter, updatedToy, options);
      res.send(result);
    });
    // delete a item
    app.delete("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toyCollection.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`server api running on port:${port}`);
});
