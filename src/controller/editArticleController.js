import Article from "../model/article";
import cloudinary from "../cloudinary";
import { validateArticle } from "../middlewares/validationForms/articleValidation";
const editArticle = async (req, res) => {
    try {
        const {
            title,
            content,
            image
        } = req.body;
        let d = {
            title,content,image
        }
        const {error} = validateArticle(d)
        if(error){
            res.status(400).json({error:error.details[0].message})
        }else{
            const imgResult = await cloudinary.uploader.upload(image, {
                folder: "my_brand_cloudinary"
            })
            const data = {
                title,content,image:{
                    public_id: imgResult.public_id,url: imgResult.secure_url
                }
            }
            await Article.findOneAndUpdate({_id: req.params.id})

            res.status(200).json({data})

        }
    } catch {
        res.status(404)
        res.send({
            error: "Article doesn't exist!"
        })
    }
}
export default editArticle;