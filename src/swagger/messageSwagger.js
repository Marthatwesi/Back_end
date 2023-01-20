/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: objectId
 *         name:
 *           type: string
 *           # format: int64
 *         email:
 *           type: string
 *         message:
 *           type: string
 *
 *
 * @swagger
 * /messages:
 *   post:
 *     tags:
 *       -  Messages
 *     summary: posting messages from contact page
 *     description: posting messages from contact page
 *     requestBody:
 *       description: Post a message to connect from contact page
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Martha Twesigye
 *               email:
 *                 type: string
 *                 format: email
 *                 example: marthacj@gmail.com
 *               message:
 *                 type: string
 *                 example: i am a project manager at andela
 *             required:
 *               - name
 *               - email
 *               - message
 *       required: true
 *     responses:
 *       '200':
 *         description: successful operation
 *       '500':
 *         description: Internal server error
 */

//  get all message

/**
 * @swagger
 * /messages:
 *    get:
 *       tags:
 *         -  Messages
 *       summary: Get all messages sent from contact page
 *       description: Get all messages sent from contact page
 *       operationId: getMessages
 *       responses:
 *         '200':
 *           description: successful operation
 *         '404':
 *           description: No messages found
 *         '500':
 *           description: Internal server error
 *       security: 
 *       - {}
 *       - bearerAuth: [] 
 */


// get single message

/**
 * @swagger
 * /messages/{messageId}:
 *    get:
 *       tags:
 *         -  Messages
 *       summary: Get single  message sent from contact page
 *       description: Get single message sent from contact page
 *       operationId: Get single Message
 *       parameters:
 *         - name: messageId
 *           in: path
 *           description: ID of the message
 *           required: true
 *           schema:
 *             type: string
 *             format: objectId
 *             example: 63a567bc2a672df0a5192bb8
 *       responses:
 *         '200':
 *           description: successful operation
 *         '500':
 *           description: Internal server error
 *       security: 
 *       - {}
 *       - bearerAuth: [] 
 */
