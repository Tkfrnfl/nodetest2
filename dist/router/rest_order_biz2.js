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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const rest_order_biz2 = express_1.default.Router();
var aws = require('aws-sdk');
var db = new aws.DynamoDB({
    region: 'ap-northeast-2',
    maxRetries: 5
});
rest_order_biz2.get("/", (req, res, next) => {
    res.send(exports);
    console.log(exports);
});
exports.handler = (event) => {
    return query(event);
};
const query = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var params = {
        Key: {
            "id": {
                S: "11"
            }
        },
        TableName: "prod_mek_giftcon"
    };
    return yield db.getItem(params).promise();
});
module.exports = rest_order_biz2;
