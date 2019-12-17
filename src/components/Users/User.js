import React from 'react';
import PropTypes from 'prop-types';
import {Li} from '../../css-in-js';


function User(props){
    const {user, setUser} = props
    return(
        <Li style={{cursor:'auto'}} onClick={() => setUser(user)}>{user.name}</Li>
    );
}


User.propTypes = {
    user: PropTypes.object.isRequired
}
export default User;