const router = require('express').Router();
const {getExperience, getExperienceID, updateExperience, addExperience, delExperience} = require('../controlers/experienceCtrl');

//get experience
router.get('/experience', getExperience)

//add experience 
router.post('/experience', addExperience)

//get experience by id
router.get('/experience/:id', getExperienceID)

//update experience by id
router.put('/experience/update/:id', updateExperience)

//delete experience by id
router.delete('/experience/:id', delExperience)


module.exports = router;