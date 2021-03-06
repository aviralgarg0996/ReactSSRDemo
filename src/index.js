import 'babel-polyfill'
import express from "express";
import renderer from "./helpers/renderer";
import configureStore from "./helpers/configureStore";
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';
const app = express();

app.use('/api',proxy('http://react-ssr-api.herokuapp.com',{
  proxyReqOptDecorator(opts){
    opts.headers['x-forwarded-host']='localhost:3000';
    return opts
  }
}))
app.use(express.static("public"));
app.get("*", (req, res) => {
    const store=configureStore(req)
    //Some logic to initialize & load data into store
   const promises= matchRoutes(Routes, req.path).map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    });
    const render=()=>{
      const context={}
      const content=renderer(req,store,context)
      if(context.notFound){
        res.status(404);
      }
      res.send(content);
    }
  Promise.all(promises).then(render).catch(render)
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
