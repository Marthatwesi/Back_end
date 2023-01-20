import Article from "../model/article";
import { updateArticle } from "../middlewares/validationForms/articleValidation";

const editArticle = async (req, res) => {
    try {
        const {error} = updateArticle(req.body)
        if(error){
           res.status(400).json({error:error.details[0].message})
        }else{
            if(req.body.title){
                await Article.findOneAndUpdate({_id: req.params.id},{
                  title:req.body.title,
                   date:new Date()
        
                })
                }
                if(req.body.content){
                    await Article.findOneAndUpdate({_id: req.params.id},{
                        content:req.body.content , 
                        date:new Date() 
                      })
                }
                if(req.file){
                    await Article.findOneAndUpdate({_id: req.params.id},{
                        image:req.file.path,
                        date:new Date()
                      })
                }
                console.log(req.body)
                res.status(200).json({
                    message:"Article updated"
                })
        }
        
    } catch {
        res.status(404)
        res.send({
            error: "Article doesn't exist!"
        })
    }
}
export default editArticle;