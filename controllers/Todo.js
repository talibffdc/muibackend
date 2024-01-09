// const getTodos = (req, res) => {
//     res.send("I am the get todos route");
//  }

const Todo=require('../Model/Todo')

const createTodo = async (req, res) => {
    const todo =  new Todo({
      title: req.body.title,
     

    });
  
    await todo.save();
    res.send(todo);
}

const getTodos = async(req, res) => {
  const tododata = await Todo.find()
     res.send(tododata);
 }


 const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.todoID });
    res.json({ message: "Todo Deleted" });
  } catch (err) {
    res.send(err);
  }
};

  
  module.exports = {
   getTodos, 
    createTodo,
    deleteTodo,
  };
  

