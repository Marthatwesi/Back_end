import Article from "../model/article";

const getAllComments= async (req, res) => {
    try {
        const article = await Article.findOne({ _id: req.params.id });
        res.send(article.comments);
    } catch {
        res.status(404)
        res.send({ error: "These comments doesn't exist!" })
    }
}
export default getAllComments;