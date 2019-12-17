import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from '../../css-in-js';


function ChannelForm(props){
    let textInput = React.createRef()

    function onSubmit(e){
        e.preventDefault()
        props.addChannelToList(textInput.current.value)
        textInput.current.value = ''
    }

    return(
        <form onSubmit={onSubmit}>
            <FormGroup>
                <input ref={textInput} placeholder='Add Channel'  type='text'/>
            </FormGroup>
        </form>
    );
}

ChannelForm.propTypes={
    addChannelToList: PropTypes.func.isRequired
}

export default ChannelForm;