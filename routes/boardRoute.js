const router = require('express').Router();
const {getBoard, getBoardID, updateBoard, addBoard, delBoard} = require('../controlers/boardCtrl');

//get board
router.get('/board', getBoard)

//add board 
router.post('/board', addBoard)

//get board by id
router.get('/board/:id', getBoardID)

//update board by id
router.put('/board/update/:id', updateBoard)

//delete board by id
router.delete('/board/:id', delBoard)


module.exports = router;