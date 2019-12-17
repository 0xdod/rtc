import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import {Ul} from '../../css-in-js';

function MessageList(props){
    return(
        <Ul>
            {props.messages.map(message => <Message key = {message.id} message={message} />)}
        </Ul>
    );
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default MessageList;