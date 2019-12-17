import React from 'react';
import PropTypes from 'prop-types';
import { TimeStamp, Msgauthor, Msgbody } from '../../css-in-js';


function Message(props){
    const {message} = props
    return(
        <li >
            <div>
                <Msgauthor>{message.author}</Msgauthor>
                <TimeStamp>  {message.createdAt.toLocaleString()}:</TimeStamp>
            </div>
            <Msgbody>
                <p>{message.body}</p>
            </Msgbody>         
        </li>
    );
}


Message.propTypes = {
    message: PropTypes.object.isRequired
}
export default Message;

