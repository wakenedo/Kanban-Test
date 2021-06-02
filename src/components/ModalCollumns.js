import React from 'react'
import '../styles/Modal.css'



const ModalCollumns = ({show, newCollumnName, setNewCollumnName, addCollumn, onClose}) => {
    
    

    if (!show){
        return null
    }
    
    const handleCreate =() => {
        addCollumn()
        onClose()
    }
    
    
    return (
        <div className='modal__Columns'>
            <div className='modal__Content'>
                <div className='modal__Header'>
                    <h4 className='modal__Title'>Add List</h4>
                </div>
                <div className='modal__Body'>
                    
                    {
                        
                    <input 
                    value={newCollumnName} 
                    onChange={event => 
                    setNewCollumnName(event.target.value)}                     
                    placeholder="Insert text..."></input>
                    
                    }
                    
                    
                    
                </div>
                <div className='modal__Footer'>
                    <button onClick={handleCreate} className='button'>Create</button>
                </div>
            </div>
        </div>
    )
}


export default ModalCollumns 



