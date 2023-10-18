import express from "express"
import cors from "cors"

import { client } from "./src/connectdb.js"
import { getAllMenuItems } from "./src/menu.js"

const app = express()
app.use(cors())
app.use(express.json())
app.get('/menu', getAllMenuItems)

app.get("/",(res, req) => {
    res.send('hello')
})


//add some routes
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))



