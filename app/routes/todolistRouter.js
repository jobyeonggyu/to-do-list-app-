const todolistCtrl = require("../controllers/todolistCtrl");
const router = require("express").Router();

router.route('/')
   .get(todolistCtrl.getTodolists)
   .post(todolistCtrl.insertTodolist)




   module.exports = router;