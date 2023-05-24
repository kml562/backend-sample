import studetModel from "../model/studentScema.js"


export const createStudent = async(req, res) => {
    try {
        let data = req.body;
        let newstudent = await studetModel.create(data);
        if (!newstudent) {
            return res.status(404).json({message:"user already exists"})
        }
        res.status(201).json({message:newstudent})  //201 code for creating new student in database;
    } catch (error) {
        res.status(501).json({message:error.message});
    }
}


export const updateStudent = async (req, res) => {
    try {
        let data = req.body;
        let rollnumber = req.params;
        const { mobile} = data;
        let user = await studetModel.findOne({ mobile: mobile });
        if (user) {
            return res.status(404).json({ message: "mobile in use" });
        }
        let updatestudent = await studetModel.findOneAndUpdate({ rollnumber:rollnumber },
            { data })
        res.status(201).json({ message: updatestudent})
    } catch (error) {
        res.status(501).json({message:error.message});
    }
}
