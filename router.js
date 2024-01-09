const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});


const { createTodo,getTodos,deleteTodo } = require("./controllers/Todo");
router.post("/todos", createTodo);
router.get("/showdata", getTodos );

router.delete("/todos/:todoID", deleteTodo);


module.exports = router;



