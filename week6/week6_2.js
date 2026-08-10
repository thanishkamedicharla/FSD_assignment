const express = require('express');
const app = express();
const Port = 3000;

app.use(express.json());

let list = [
    { id:1,title:"Learn Express"},
    { id:2,title: "Master REST APIs"}
];

app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

app.post('/tasks',(req,res)=>{
    const newTask = {
        id:req.body.id!=null?req.body.id:tasks.length + 1,
        title:req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if(task){
        task.title = req.body.title;
        res.json({message:"Task updated successfully",task});
    }else{
        res.status(404).json({error:"Task not found"});
    }
});

app.delete('/tasks/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.json({message:`Task ${id} deeted`,remainingTasks:tasks});
});

app.listen(Port,() => {
    console.log(`REST API Server running at http://localhost:${Port}`);
});