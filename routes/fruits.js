const express = require("express")
const router = express.Router()
const{check, validationResult} = require("express-validator")


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

//implement middleware
router.use(express.json())

//create new fruit in array using POST
router.post("/", [check("color").not().isEmpty().trim()],async(request, response)=>{
    //check if the request object passed the check defined
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        response.json({error : errors.array()})
    }else{
        let newFruit = request.body;
        fruits.push(newFruit);
        response.json(fruits);
    }
})

//update fruit in array using PUT
router.put("/:id", async(request, response)=>{
    let index =  request.params.id;
    fruits.splice(index-1, 1 ,request.body)
    response.json(fruits);
})
//delete fruit in array using delete
router.delete("/:id", async(request, response)=>{
    let index = request.params.id;
    fruits.splice(index-1, 1)
    response.json(fruits)
})


module.exports = router;