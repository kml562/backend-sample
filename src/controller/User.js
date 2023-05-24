import userModel from "../model/userScema.js";

export const createUser = async (req, res) => {
  try {
    let data = req.body;
    let user = await userModel.create(data);
    if (!user) {
      return res.status(409).json({ message: "user is alredy exits" });
    }
    res.status(201).json({ message: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//log in user

export const login = (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: "somthing wrong" })
  }
}

// get all users also using pagination using limit and skip that's part of aggregation
export const getUser = async (req, res) => {
  try {
    let data = await userModel.find().skip((page - 1) * 2).limit(2);
    res.status(200).json({message: data})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

