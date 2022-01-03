const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log("mmmm");
        console.log(req.body);
        const prod = new Task({
            task: req.body.task,
            completed: req.body.completed
            })
            console.log("proddd");
            console.log(prod);
            const p1 =  await prod.save()
            res.send(p1)
         
       // console.log(task);
       // res.send(task);
    } catch (error) {
        console.log("ss");
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
