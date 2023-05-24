
export const checkCrad = (req, res, next) => { 
    try {
        const { name, mobile,  address } = req.body;
        if (!name && !mobile && !address) {
            return res.status(401).json({message:"fill all the info is required"});
        }
        next();
        
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};
