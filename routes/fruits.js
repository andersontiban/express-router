const express = require("express")
const router = express.Router()


// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get("/", (request, response)=>{
    response.json(fruits)
})

router.get("/:id", (request, response)=>{
    response.json(fruits[request.params.id - 1])
})


module.exports = router;