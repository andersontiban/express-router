const express = require("express")
const router = express.Router()


// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get("/", (request, response)=>{
    response.json(users)
})

router.get("/:id", (request, response)=>{
    response.json(users[request.params.id-1])
})

module.exports = router;