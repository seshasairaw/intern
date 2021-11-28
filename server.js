const express = require("express");

const app = express()

app.listen(3000)
app.get('/', (req, res) => {
    res.send("Hello");
})

app.get("/:id", (req, res)=>{
    res.send(req.params["id"])
})