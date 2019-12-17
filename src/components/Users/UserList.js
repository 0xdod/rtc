import React from 'react';
import User from './User';
import PropTypes from 'prop-types';
import {Ul} from '../../css-in-js';

function UserList(props){
    return(
        <Ul>
            {props.users.map(user => <User key = {user.id} user={user} {...props} />)}
        </Ul>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;
