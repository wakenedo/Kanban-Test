import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import onDragEnd from '../utils/onDragEnd'
import { v4 as uuidv4 } from 'uuid';

// COMPONENTS
import Tasks from './Task';

// STYLES
import '../styles/Collumns.css'
import ModalCollumns from './ModalCollumns';
import ModalTasks from './ModalTasks';



function Container() {
    const [newTaskName, setNewTaskName] = useState('')
    function deleteTasks(id) {
        let newTasks = {...Tasks}
        delete newTasks[id]
        addTask(newTasks)
    }
    const [newCollumnName, setNewCollumnName] = useState('')
    function deleteCollumns(id) {
        let newCollumns = {...collumns}
        delete newCollumns[id]
        setCollumns(newCollumns)  
    }
    
    //First three columns are default, so no need for uuid

    const [collumns, setCollumns] = useState({
        1: {
            id: 1,
            name: 'To-do:',
            backgroundColor: 'lightcoral',
            items: [],
        },
        2: {
            id: 2,
            name: 'In-Progress:',
            backgroundColor: 'lightblue',
            items: [],
        },
        3: {
            id: 3,
            name: 'Done:',
            backgroundColor: 'lightgreen',
            items: []
        }
    });

    const addCollumn = () => {
        let newCollumn = {
            id: uuidv4(),
            name: newCollumnName,
            backgroundColor: '#5e72e4',
            items: []
        }

        setCollumns(prevState => { return { ...prevState, [newCollumn.id]: newCollumn } })
    }

    const addTask = (collumId) => {
        let newTask = { id: uuidv4(), content: 'New' }

        let newCollumn = collumns[collumId]

        newCollumn.items = [...newCollumn.items, newTask]

        setCollumns(prevState => { return { ...prevState, [newCollumn.id]: newCollumn } })

    }

    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="addCollumnBtn" 
            onClick={() => setShow(true)}>    
            Add Collumn
            </button>
            <ModalCollumns 
            setNewCollumnName={setNewCollumnName} 
            newCollumnName={newCollumnName} 
            onClose={() => setShow(false)}
            addCollumn={addCollumn} 
            show={show}
            />

            <div className="header">
                <h1>Kanban Project</h1>
            </div>

            <div className="container">
                <DragDropContext  onDragEnd={result => onDragEnd(result, collumns, setCollumns)}>
                    {Object.entries(collumns).map(([id, column]) => {
                        return (
                            <div key={id} className="collumn" style={{backgroundColor: (column.backgroundColor)}}>
                                <h2>{column.name}</h2>
                                <Droppable droppableId={id} key={id}>
                                    {(provided) => {
                                        return (
                                            <div key={id} className="collumns" {...provided.droppableProps} ref={provided.innerRef}>
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Tasks item={item} index={index} onClick={deleteTasks}/>
                                                        
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                                <button  className="btn" 
                                onClick={() =>  addTask(id)}>
                                Add task
                                <ModalTasks 
                                newTaskName={newTaskName}
                                setNewTaskName={setNewTaskName}
                                addTask={addTask(id)}
                                show={show}
                                onClose={() => setShow(true)} 
                                />
                                </button>
                                
                                <button onClick={() => deleteCollumns(id)}>
                                Remove List
                                </button>
                                
                            </div>
                        )
                    })}
                </DragDropContext>

            </div>
        </div>
    )
}

export default Container
