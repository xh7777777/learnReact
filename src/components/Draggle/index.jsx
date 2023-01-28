import React, {useState,useRef} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import './index.css'
const initialData = {
    tasks: {
        'task-1': {id:'task-1', content: 'Take out the garbage'},
        'task-2': {id:'task-2', content: 'Watch my favorite show'},
        'task-3': {id:'task-3', content: 'Charge my phone'},
        'task-4': {id:'task-4', content: 'Cook dinner'},
    },
    columns: {
        'column-1': {
            id:'column-1',
            title:'To do',
            taskIds:['task-1','task-2','task-3','task-4']
        }
    },
    columnOrder:['column-1']
}

function Draggle() {
  const [data,setData] = useState(initialData)
  function onDragEnd(res) {
    const {destination, source, draggableId} = res
    if(!destination) {
        return 
    }
    if(destination.droppableId === source.droppableId&&
        destination.index === source.index){
            return 
        }
    const column = data.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index,1)
    newTaskIds.splice(destination.index,0,draggableId)
    const newColumn = {
        ...column,
        taskIds: newTaskIds
    }
    console.log(newColumn)
    setData({
        ...data,
        columns:{
            ...data.columns,
            [newColumn.id]:newColumn,
        }
    })
  }
  return (
    <DragDropContext 
        onDragEnd ={onDragEnd}>
         {data.columnOrder.map(columnId => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map(taskId=> data.tasks[taskId])
            return <Column key={column.id} column={column} tasks={tasks} />
        })}
    </DragDropContext>
       
  )
}

export default Draggle

function Column({column, tasks}) {
    return (
        <div className="container">
            <h3 className="title">{column.title}</h3>
            <Droppable droppableId={column.id}>
                {
                    provided=> (
                        <div className="task-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {tasks.map((task,index) => {
                            return <Task key={task.id} task={task} index={index}/>
                        })}
                        {provided.placeholder}
                    </div>
                    )
                }

            </Droppable>
        </div>
    )
}

function Task({task,index}) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {
                (provided) => (
                    <div className="task-item" 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                        {task.content}
                    </div>
                )
            }

        </Draggable>
    )
}