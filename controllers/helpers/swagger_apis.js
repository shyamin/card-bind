/**
 * @swagger
 * definitions:
 *  CommonError:
 *      type: object
 *      properties:
 *          success:
 *              type: number
 *          error:
 *              type: string
 *              default: ""
 *          code:
 *              type: number
 *              default: 500
 *  CommonSuccess:
 *      type: object
 *      properties:
 *          success:
 *              type: number
 *          message:
 *              type: string
 * */

/**
 * @swagger
 * /cat/bind:
 *   get:
 *     tags:
 *       - Card
 *     description: bind two random inamges
 *     operationId: bindImage
 *     parameters:
 *       - name: greeting
 *         description: greeting
 *         in: query
 *         required: false
 *         type: string
 *         example: Hi
 *       - name: who
 *         description: who
 *         in: query
 *         required: false
 *         type: string
 *         example: Kitty
 *       - name: width
 *         description: image width
 *         in: query
 *         required: false
 *         type: number
 *         example: 400
 *       - name: height
 *         description: image height
 *         in: query
 *         required: false
 *         type: number
 *         example: 500
 *       - name: color
 *         description: image text color
 *         in: query
 *         required: false
 *         type: string
 *         example: red
 *       - name: format
 *         description: return image format
 *         in: query
 *         required: false
 *         type: string
 *         example: jpeg
 *       - name: size
 *         description: image size
 *         in: query
 *         required: false
 *         type: number
 *         example: 100
 *     responses:
 *       200:
 *         description: success result
 *         schema:
 *           $ref: '#/definitions/CommonSuccess'
 *       420:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/CommonError'
 */