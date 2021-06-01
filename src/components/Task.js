import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import '../styles/Task.css'


function Tasks({ item, index, id }) {
  
  

  return <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided) => {
      return (
        <div key={id} className='tasks' ref={provided.innerRef}
        {...provided.draggableProps}{...provided.dragHandleProps}
        style={{...provided.draggableProps.style}}>
        {item.content}
        
        </div>
        
      );
    }}
  </Draggable>;
}

export default Tasks;