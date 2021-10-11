const router = require('express').Router();
const {getEducation, getEducationID, updateEducation, addEducation, delEducation} = require('../controlers/educationCtrl');

//get education
router.get('/education', getEducation)

//add education 
router.post('/education', addEducation)

//get education by id
router.get('/education/:id', getEducationID)

//update education by id
router.put('/education/update/:id', updateEducation)

//delete education by id
router.delete('/education/:id', delEducation)


module.exports = router;