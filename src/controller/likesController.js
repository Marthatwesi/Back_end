import { likesServices } from "../services/likesServices";


export class likesController {
    static async hearts(req, res) {
      try {
        const response = await likesServices.hearts(req.params.id, res.locals.email);
          res.status(200).json({ liked: response.data });
        
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
      }
    }
}