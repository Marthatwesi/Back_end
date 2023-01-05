import { ArticleController } from "../controller/articleController";
import Article from "../model/article";

export class ArticleServices {
  static async createArticle(data) {
    const {
      title, content, image
    } = data
    const exists = await  Article.findOne({title:title})
    if (exists){
      return "exists"
    }
    const dataArticle = new Article (data)
    await dataArticle.save();
    return dataArticle;
  }
  static async getAllArticles() {
    const articles = await Article.find();
    return articles;
  }
  static async deleteArticle(id) {
    const article = await Article.deleteOne({_id:id});
    return true;
  }
  static async getOneArticle(id){
    const article = await Article.findOne({_id:id})
    return article;
  }
  
}