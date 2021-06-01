import React from 'react'
import '../styles/Modal.css'


const ModalTasks = (show, newTaskName, setNewTaskName, addTask, onClose, id) => {
    
    if (!show) {
        return null
    }
    
    const handleCreate =() => {
        addTask(id)
        onClose(id)
    }

    
    return (
        <div className='modal'>
            <div className='modal__Content'>
                <div className='modal__Header'>
                    <h4 className='modal__Title'>New Task:</h4>
                </div>
                <div className='modal__Body'>
                    {<input
                    value={newTaskName}  
                    onChange={event => 
                    setNewTaskName(event.target.value)} 
                    placeholder="Insert text..."></input>}
                </div>
                <div className='modal__Footer'>
                    <button 
                    onClick={handleCreate} 
                    className='buttontask'>
                         Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalTasks