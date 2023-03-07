const express = require("express")
//import router
const router = express.Router()
//import validation
const {check, validationResult} = require("express-validator")

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
//implement middleware
router.use(express.json())

router.get("/", (request, response)=>{
    response.json(users)
})

router.get("/:id", (request, response)=>{
    response.json(users[request.params.id-1])
})



//create new user in array using POST
router.post("/", [check("name").not().isEmpty().trim()],async(request, response)=>{
    //check if the request object passed the check defined
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        response.json({error: errors.array()});
    }else{
        let newUser = request.body;
        users.push(newUser);
        response.json(users);
    }
})

//update user in array using PUT
router.put("/:id", async(request, response)=>{
    let index =  request.params.id;
    users.splice(index-1, 1 ,request.body)
    response.json(users);
})
//delete item in array using delete
router.delete("/:id", async(request, response)=>{
    let index = request.params.id;
    users.splice(index-1, 1)
    response.json(users)
})

module.exports = router;