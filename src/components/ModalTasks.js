import React from 'react'
import '../styles/Modal.css'


const ModalTasks = ({show1, newTaskName, setNewTaskName, addTask, onClose, id}) => {

    
    
    if (!show1)
    {
        return (null)
    } 
    
    
    const handleCreate =() => {
        addTask()
        onClose()
    }

    
    return (
        <div className='modal__Tasks'>
            <div className='modal__Content'>
                <div className='modal__Header'>
                    <h4 className='modal__Title'>Add New Task:</h4>
                </div>
                <div className='modal__Body'>
                    
                    {
                        
                    <input 
                    value={newTaskName}  
                    onChange={e => 
                    setNewTaskName(e.target.value)} 
                    placeholder="Insert text..."></input>
                    
                    
                    }
                    
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