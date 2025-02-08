import { Hono } from "hono";
import { v4 as uuidv4 } from "uuid";

let video = [];

const app = new Hono();

app.get('/',(c)=>{
    c.html("<h1>Aref</h1>");
})