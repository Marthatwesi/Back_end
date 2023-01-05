import { validateArticle } from "../middlewares/validationForms/articleValidation";
import Article from "../model/article";
import { ArticleServices } from "../services/articleService";
import cloudinary from "../cloudinary";


export class ArticleController {
  static async createArticle(req, res) {
    try {
      const {error} = validateArticle(req.body)
      if (error){
        return res.status(400).send(error.details.map((e) => {
          return e.message.replace(/[^a-zA-Z0-9 ]/g, "")


      }))}else{
        
          const { title, content, image } = req.body;
          const imageUpload = await cloudinary.uploader.upload(image, {
            folder: "My_Cloudinary_Folder",
          })
          const data = {
            title,
            content,
            image:  {public_id: imageUpload.public_id, url:imageUpload.secure_url},
            created_on: new Date(),
          };
          const article = await ArticleServices.createArticle(data);
          if(article == "exists"){
            res.status(409).json({Error:"Article already exists"})
          }
          res.status(200).json({ message: "Article created successfully", data: article });
        }
    } 
    catch (error) {
            console.log(error);
            return res.status(500).json({ error: "The internal Server is facing some errors" });
          }
    }
    
  

  static async viewArticle(req, res) {
    try {
      const articles = await ArticleServices.getAllArticles()
      res.status(200).send(articles);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "The internal Server is facing some errors" });
    }

  }
static async viewOneArticle(req,res){
  try {
    const article = await ArticleServices.getOneArticle(req.params.id)
    console.log(article)
    res.status(200).send(article)
  } catch (error) {
    console.log(error)
    res.status(200).json({error: error})
  }
}
  static async deleteArticle(req, res) {
    try {
      const article = await ArticleServices.deleteArticle(req.params.id)
      res.status(200).json({message:"article deleted successfully"});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "The internal Server is facing some errors" });
    }

  }
  
}