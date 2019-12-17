import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import PropTypes from 'prop-types';
import {NavContainer, NavBody, NavHeading} from '../../css-in-js';

function UserSection(props){
    return(
        <NavContainer>
            <NavHeading>
                <strong>Users</strong>
            </NavHeading>
            <NavBody>
                <UserList {...props}/>
                <UserForm {...props}/>
            </NavBody>
        </NavContainer>
    );
}

UserSection.propTypes = {
    users: PropTypes.array.isRequired,
    addUserToList: PropTypes.func.isRequired,
}


export default UserSection;


// UserSection passes the setUser function it receives from App as props to UserList (which in turn passes it to User) and also the users array
// It passes the addusertolist function to the form