const router = require('express').Router();
const {getProject, getProjectID, updateProject, addProject, delProject} = require('../controlers/projectsCtrl');


//get projects
router.get('/project', getProject)

//add project 
router.post('/project', addProject)

//get project by id
router.get('/project/:id', getProjectID)

//update project by id
router.put('/project/update/:id', updateProject)

//delete project by id
router.delete('/project/:id', delProject)


module.exports = router;