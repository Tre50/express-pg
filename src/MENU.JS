import { client } from "./connectdb.js";

export async function getAllMenuItems(req, res){
const result = await client.query(' SELECT * FROM menu')
res.send(result.rows)}

export async function addMenuItem(res, req){
//const body =req.body
//const id = body.id
//const name = body.name
//const description = body.description
//const price = body.price
const{id, name, description, price} = body
const result = await client.query(`INSERT INTO meni (id, name, description, price)
 VALUES (${id}, '${name}, '{$desription})', ${price})`)

}



