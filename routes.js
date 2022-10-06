const express = require('express');
const app = express();
const pool = require("./db")

//craete a todo
app.post("/todos",(req,res)=>{

    try{
console.log(req.body);
const {description} = req.body
const newTodo = await pool.query("INSERT INTO todos(description) VALUES ($1) RETURNING *", [description])
res.json(allTodos.rows);
    }catch(err){
        console.error(err.message);
    }
});

//get a todo

app.get("/todos/:id", async(req,res)=>{
    console.log(req.params);
    const{id} = req.params;
    try {
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = S1")
    } catch (error) {
        
    }
})

//update a todo
app.put("/todo/:id", async(res,req)=>{

    try {
        const {id,description} = req.param;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", [description,id]
        )
        res.json("Todo was updated")
    } catch (error) {
        console.error(err.message);
    }
})
//delete a todo

app.delete("/todo/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deteTodo = await pool.query("DELETE FROM tofo WHERE todo_id = $1",[id]);
        res.json("Todo was succesfully deleted")
    } catch (error) {
        
    }
})
