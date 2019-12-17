import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from '../../css-in-js';

function UserForm(props){
    let textInput = React.createRef()

    function onSubmit(e){
        e.preventDefault()
        props.addUserToList(textInput.current.value)
        textInput.current.value = ''
    }

    return(
        <form onSubmit={onSubmit}>
            <FormGroup>
                <input ref={textInput} placeholder='Add User'  type='text'/>
            </FormGroup>
        </form>
    );
}

UserForm.propTypes={
    addUserToList: PropTypes.func.isRequired
}

export default UserForm;