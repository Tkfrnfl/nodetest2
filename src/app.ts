import express, {Request, Response, NextFunction} from 'express';
import rest_order_biz2 from "./router/rest_order_biz2";
const app = express();

app.get('/', (request:Request, response:Response, next: NextFunction) => {
  response.send('hello');
});
app.use("/rest_order_biz2",rest_order_biz2)

app.listen(8000,()=>{
  console.log('start')
})