// for articles

/**
 * @swagger
 * components:
 *   schemas:
 *     Articles:
 *      type: object
 *      properties:
 *       _id:
 *         type: string
 *         format: objectId
 *         example: 63a567bc2a672df0a5192bb8
 *       title:
 *         type: string
 *         # format: int64
 *         example: Articles post 1
 *       content:
 *         type: string
 *         # format: int32
 *         example: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis diam ornare, pulvinar justo eu.
 *       image:
 *        type: object
 *        properties:
 *          public_id:
 *            type: string
 *            example: my_brand_andela/gaueqstlrpbhqju3aakl
 *          url:
 *            type: string
 *            example: https://res.cloudinary.com/dx7sba7u0/image/upload/v1672673554/my_brand…
 *       comments:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            _id:
 *              type: string
 *              format: objectId
 *              example: 63a567bc2a672df0a5192bb8
 *            name:
 *              type: string
 *              example: Martha Twesigye
 *            email:
 *              type: string
 *              format: email
 *              example: marthacj@gmail.com
 *            message:
 *              type: string
 *              example: first swagger comment
 *       likes:
 *        type: object
 *        properties:
 *          Count:
 *            type: integer
 *            example: 1
 *          People:
 *            type: array
 *            items:
 *              type: string
 *              format: email
 *              example: marthacj@gmail.com
 *       __v:
 *        type: integer
 *        example: 1
 */

// 


/**
 * @swagger
 * /api/articles:
 *   get:
 *     tags:
 *       - articles
 *     summary: Getting a list of all articles
 *     description: Getting all articles
 *     operationId: viewarticles
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 */

// 

/**
 * @swagger
 * /api/articles/{articleId}:
 *   get:
 *     tags:
 *       - articles
 *     summary: Find article by ID
 *     description: Returns a single article
 *     operationId: getarticleById
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: ID of article to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/article'
 *       '500':
 *         description: Internal server error
 */


// 
/**
 * @swagger
 * /api/articles/{articleId}/comments:
 *  get:
 *     tags:
 *       - articles
 *     summary: Get all comments on an article
 *     description: Get all comments on an article
 *     operationId: getComments
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: ID of article to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 */

// 
/**
 * @swagger
 * /api/articles/{articleId}/likes:
 *  get:
 *     tags:
 *       - articles
 *     summary: Get all likes on an article
 *     description: Get all likes on an article
 *     operationId: getLikes
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: ID of article to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 */

// post article 

/**
 * @swagger
 * /api/articles:
 *   post:
 *     tags:
 *       - articles
 *     summary: Add a new article
 *     description: Add a new article
 *     operationId: addarticle
 *     requestBody:
 *       description: Create a new article
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: article title 1
 *                content:
 *                  type: string
 *                  example: article content should be string of any size
 *                image:
 *                  type: string
 *                  format: dataurl
 *                  example: data:img:png...
 *       required: true
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '409':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: []    
 */

//  update article 

/**
 * @swagger
 * /api/articles/{articleId}:
 *   put:
 *     tags:
 *       - articles
 *     summary: Update article
 *     description: Update article
 *     operationId: Updatearticle
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: article Id to update the article
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     requestBody:
 *       description: Update article
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: article title 1
 *                content:
 *                  type: string
 *                  example: article content should be string of any size
 *                image:
 *                  type: string
 *                  format: dataurl
 *                  example: data:img:png...
 *
 *       required: true
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '409':
 *         description: Invalid input
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */

//  delete article 

/**
 * @swagger
 * /api/articles/{articleId}:
 *  delete:
 *     tags:
 *       - articles
 *     summary: Deletes an article by ID
 *     description: delete an article
 *     operationId: deletearticle
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: article Id to delete
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     responses:
 *       '200':
 *         description: Successfull operation
 *       '404':
 *         description: article with that Id not found
 *       '401':
 *         description: Not Authorized
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */

// post comment 

/**
 * @swagger
 * /api/articles/{articleId}/comments:
 *   post:
 *     tags:
 *       - articles
 *     summary: Comment on an article
 *     description: Commenting on an article
 *     operationId: postComment
 *     requestBody:
 *       description: Post a comment on an article
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: first swagger comment
 *       required: true
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: ID of article to return
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */

// post Likes

/**
 * @swagger
 * /api/articles/{articleId}/like:
 *   post:
 *     tags:
 *       - articles
 *     summary: Adding or removing a like on an article
 *     description: Adding or removing a like on an article
 *     operationId: postLike
 *     parameters:
 *       - name: articleId
 *         in: path
 *         description: ID of article to like
 *         required: true
 *         schema:
 *           type: string
 *           format: objectId
 *           example: 63a567bc2a672df0a5192bb8
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *       '500':
 *         description: Internal server error
 *     security: 
 *       - {}
 *       - bearerAuth: [] 
 */