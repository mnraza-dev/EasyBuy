export const getAllProducts = async (req, res) => {
    try {
        res.status(200).json({
            message: "All Data of products fetched"
        })
    } catch (error) {
        console.log(`failed to get the all products`, error);
    }
}

export const getSingleProduct = async (req, res) => {
    try {
        res.status(200).json({
            message: "Fetched Single Product"
        })
    } catch (error) {
        console.log(`failed to get the single product`, error);
    }
}