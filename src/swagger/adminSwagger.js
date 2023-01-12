/**
 * @swagger
 * /user/admin:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Getting all admins
 *     description: Getting all admins
 *     operationId: getAdmins
 *     responses:
 *       "200":
 *         description: Success
 *       '401':
 *         description: Unauthorized
 *       "500":
 *         description: Internal server error
 *     security:
 *       - {}
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /user/admin:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Signing up an administrator
 *     description: Signing up an administrator
 *     operationId: adminSignup
 *     requestBody:
 *         description: Body to signup an admin (need name,email,password)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Martha Twesigye
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: marthacj@gmail.com
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: 123456
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *     responses:
 *       "200":
 *           description: Success
 *       '401':
 *         description: Unauthorized
 *       '400':
 *         description: Bad Request
 *       "409":
 *           description: Conflict
 *       '500':
 *         description: Internal server error
 *     security:
 *       - {}
 *       - bearerAuth: []
 */


