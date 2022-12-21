import { validateLikes } from "../middlewares/validationForms/articleValidation";
import Article from "../model/article";


export class likesServices {
    static async hearts(id, clientEmail) {
          const article = await Article.findOne({ _id: id });
    
          if (article.likes.clients.includes(clientEmail) == true) {
            let x = article.likes.numberLikes - 1;
            let y = article.likes.clients.filter((p) => p !== clientEmail);
            await Article.findOneAndUpdate(
              { _id: id },
              { likes: { numberLikes: x, clients: y } }
            );
          } else {
            let z = article.likes.numberLikes + 1;
            let w = article.likes.clients;
            w.push(clientEmail);
            await Article.findOneAndUpdate(
              { _id: id },
              { likes: { numberLikes: z, clients: w } }
            );
          }
          const liked = await Article.findOne({ _id: id });
          return { state: "successful", data: liked };
        }
      }



