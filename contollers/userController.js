const User = require("./../models/userModel")
const catchAsync = require("./../utils/appError")

// Get all users
exports.getAllUsers = catchAsync(async (req, res) =>{
    const newUser = await User.find()

    res.status(201)
    .json({
        status: "Sucess",
        data: {
            newUser
        }
    })
});

// Get a particular user
exports.getUser = catchAsync( async (req, res)=>{
    const newUser = await User.findById(req.params.id)
    res.status(201)
    .json({
        status: 'success',
        data:{
            newUser
        }
    })
})

//Create a new user
exports.createUser = catchAsync(async (req, res)=>{
    const newUser = await User.create(req.body, {
        new: true
    })

    res.status(201)
    .json({
        status: 'created user successfully ',
        data: {
            newUser
        }
    })
})

//Update user
exports.updateUser = catchAsync(async (req, res)=>{
    const newUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(201)
    .json({
        status: 'updated user success',
        data: {
            newUser
        }
    })

})


//deleteUser
exports.deleteUser = catchAsync(async(req, res)=>{
    const newUser = await User.findByIdAndDelete(req.params.id, req.body)

    res.status(201)
    .json({
        status: 'deleted user sucessfully',
        data: null
    })
})