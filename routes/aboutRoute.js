const router = require('express').Router();
const {getAbout, getAboutID, updateAbout, addAbout, delAbout} = require('../controlers/aboutCtrl');

//get all users
router.get('/about', getAbout)

//add user 
router.post('/about', addAbout)

//get user by id
router.get('/about/:id', getAboutID)

//update user by id
router.put('/about/update/:id', updateAbout)

//delete user by id
router.delete('/about/:id', delAbout)


module.exports = router;