import express, { Request, Response, NextFunction } from "express";
import aws from "aws-sdk"


export interface bizItem{
    id:string
}

const rest_order_biz2 = express.Router();
var db = new aws.DynamoDB.DocumentClient({
  region: 'ap-northeast-2',
  maxRetries: 5
});

rest_order_biz2.get("/", async(req: Request, res: Response, next: NextFunction) => {
  const biz2:any= await getItem()
  console.log(getItem().id)
  res.send(getItem());
});

async function getItem():Promise<bizItem>{

  var params = {
    TableName : "prod_mek_giftcon",
    Key: {
      "id":'11'
    }
  };
      
    db.get(params, (err, data) => {
    if (err){
      console.log("Error:", err);
    } 
    else{
      console.log("Success:", data.Item);
      
    } 
    console.log("Completed call");
  });
  
  }
  exports.handler = (event:any) => {
    
    getItem()
    
   };

export = rest_order_biz2;