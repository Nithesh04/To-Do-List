import React, { useState } from 'react'

const Todolist = () => {
    const [tasks,setTasks] =useState([]);
    const [newtask,setnewTask] =useState("");
    function handleInputChange(event){
        setnewTask(event.target.value);
    }
    function Addtask(){
        if(newtask.trim("")!==""){
            setTasks(t=>[...t,newtask]);
            setnewTask("");
        }
    }
    function deletetask(index){
        const updateTask= tasks.filter((_,i)=>i !== index);
        setTasks(updateTask);
    }
    function movetaskup(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function movetaskdown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


  return (
    <div>
        <div className='todolist'>
        <h1>To-Do-List</h1>

        <input type='text' className='add-button' placeholder='Enter your Tasks' value={newtask} onChange={handleInputChange}></input>
        <button onClick={Addtask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>
                        {task}
                    </span>
                    <button className='delete-button' onClick={()=>deletetask(index)}>Delete</button>
                    <button className='up-button' onClick={()=>movetaskup(index)}>Move-Up</button>
                    <button className='down-button' onClick={()=>movetaskdown(index)}>Move-Down</button>
                </li>
            )}     
        </ol>
    </div>
    
  )
}

export default Todolist
