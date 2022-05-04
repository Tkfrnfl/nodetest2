import express, { Request, Response, NextFunction } from "express";

const rest_order_biz2 = express.Router();
var aws =require('aws-sdk');
var db = new aws.DynamoDB({
  region: 'ap-northeast-2',
  maxRetries: 5
});

rest_order_biz2.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(exports);
  console.log(exports)
});

exports.handler =(event:any) => {
  return query(event);
}

const query = async (event:any) => { 
var params = {
    Key: {
    "id": {
       S: "11"
      }
    }, 
    TableName: "prod_mek_giftcon"
   };

  return await db.getItem(params).promise();

}

export = rest_order_biz2;