
exports.getProducts = (req, res, next) =>{
    res.status(200).json(
        {
            success: true,
            message: "the route will show all product from database"
        }
    )
} 