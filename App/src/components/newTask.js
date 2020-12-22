import React from 'react'

function newTask(props){
    let textInput = React.createRef();
    return (
        <div>
            <input type="text" ref={textInput} placeholder="Nazwa zadania"/>
            <button onClick={() =>props.addMethod(textInput.current.value)}>Dodaj</button>
        </div>
    )
}
export default newTask;