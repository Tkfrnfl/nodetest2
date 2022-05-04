"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rest_order_biz2_1 = __importDefault(require("./router/rest_order_biz2"));
const app = (0, express_1.default)();
app.get('/', (request, response, next) => {
    response.send('hello');
});
app.use("/rest_order_biz2", rest_order_biz2_1.default);
app.listen(8000, () => {
    console.log('start');
});
