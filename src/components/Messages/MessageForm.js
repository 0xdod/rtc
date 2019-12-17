import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from '../../css-in-js';


function MessageForm(props){
    let textInput = React.createRef()
    let input;

    function onSubmit(e){
        e.preventDefault()
        props.addMessageToList(textInput.current.value)
        textInput.current.value = ''
    }
    if(props.activeChannel.id !== undefined){
        input = <input ref={textInput} placeholder='Type Something in here'  type='text'/>
    }

    return(
        <form onSubmit={onSubmit}>
            <FormGroup>
               {input}
            </FormGroup>
        </form>
    );
}

MessageForm.propTypes={
    addMessageToList: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageForm;