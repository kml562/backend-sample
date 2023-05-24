import postModel from "../model/postScema.js";

export const createPost = async (req, res) => {
  try {
    let data = req.body;
    if (!data) {
      res.status(400).json({ message: "info is missing" });
    }
    let createdata = await postModel.create(data);
    if (!createdata) {
      res.status(404).json({ message: "user already exists" });
    }
    res.status(201).json({ message: createdata });
  } catch (e) {
    res.send(501).json({ error: e.message });
  }
};


//using populate------------
export const getposts = async(req, res) => {
  try {
    let data = await postModel.find().populate("AuthorID")
    res.status(200).json({ message: data});
  } catch (error) {
    res.send(501).json({ error: error.message });
  }
}

//puting or updating data

export const putdata = async (req, res) => {
  try {

    let updateval = await postModel.updateMany(
      {publisher: {$in:["6450ee3da78462b15437fb83","6450f956c544383bbc01e475"]}},
      {isHardCover:true},
         {new:true});
         
         let updatePrices = await postModel.find()
        .populate("AuthorID", "rating") // Populate author document and include only rating field
        .where("AuthorID.rating") // Filter books where author's rating is greater than 3.5
        .updateMany(
          { rating: { $gt: 3.5 } },
          { $inc: { price: 10 } },
          {new:true}); // Increment price by 10 for all matching books
      
    
    res.status(200).json({ data: updateval,price:updatePrices });
  } catch (err) {
console.log(err);
    res.status(500).json({ error: err.message });
  }
};

