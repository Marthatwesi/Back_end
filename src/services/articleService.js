import Article from "../model/article";

export class ArticleServices {
  static async createArticle(data) {
    const exists = Article.findOne({title:data.title})
    if (exists){
      return "exists"
    }
    return await data.save();
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