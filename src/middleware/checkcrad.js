export const check=(req, res, next)=>{
    try {
        let data = req.body;
        if (!data) {
            return  res.status(405).json({message:"please provide details"});
        }
        next();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}