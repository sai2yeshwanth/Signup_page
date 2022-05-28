"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
UserRouter.get('/hello', (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("12");
    return res.status(200).send({ message: 'get all user' });
}));
// UserRouter.get('/:id', async(res:Response, req:Request) => {
//     return res.status(200).send({message:'get all user by id'});
// })
// UserRouter.post('/', async(res:Response, req:Request) => {
//     console.log(req.body)
//     return res.status(200).send();
// })
// UserRouter.put('/:id', async(res:Response, req:Request) => {
//     console.log(req.body)
//     return res.status(200).send();
// })
exports.default = UserRouter;
//# sourceMappingURL=UserRoute.js.map