import express, { Request, Response, Router } from "express";
import { encode, decode } from './tokenService';

const challegeRouter = Router();
challegeRouter.use(express.urlencoded({ extended: false }));


/**
 * @api {post} /challenge/encode POST /encode
 * @apiGroup Challenge
 * @apiDescription Encodes user and data into a HackWebToken.
 *
 * @apiBody {String} User User identifier.
 * @apiBody {Object} Data User data to be encoded.
 *
 * @apiSuccess (200: Success) {String} Token Encoded token.
 * @apiSuccess (200: Success) {Object} Context Additional context information.
 * @apiSuccess (200: Success) {String} Context.Additional_info Additional information about the encoding.
 *
 * @apiSuccessExample {json} Example Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *       "Context": {
 *         "Additional_info": "Encoded successfully"
 *       }
 *     }
 *
 * @apiError (400: Bad Request Error) {String }InvalidRequestBody The request body is missing required fields.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid request body"
 *     }
 */
challegeRouter.post('/encode', (req: Request, res: Response) => {
    const { User, Data } = req.body;
    console.log("User: ", User);
    console.log("Data: ", Data);
    if (!User || !Data) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const token = encode(User, Data);
    return res.json({
        Token: token,
        Context: {
            Additional_info: "Encoded successfully"
        }
    });
});


/**
 * @api {post} /challenge/decode POST /decode
 * @apiGroup Challenge
 * @apiDescription Decodes HackWebToken into user and data.
 *
 * @apiBody {String} Token The token to be decoded.
 *
 * @apiSuccess {String} User User identifier.
 * @apiSuccess {Object} Data Decoded user data.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "User": "john_doe",
 *       "Data": {
 *         "Role": "admin",
 *         "Access_level": 5
 *       }
 *     }
 *
 * @apiError (400: InvalidRequestBody Error) InvalidRequestBody The request body is missing the Token field.
 * @apiError (400: InvalidToken Error) InvalidToken The provided token is invalid or cannot be decoded.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid token"
 *     }
 */

challegeRouter.post('/decode', (req: Request, res: Response) => {
    const { Token } = req.body;
    if (!Token) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const decoded = decode(Token);
    if (!decoded) {
        return res.status(400).json({ error: "Invalid token" });
    }

    return res.json({
        User: decoded.user,
        Data: decoded.data
    });
});

export default challegeRouter;