import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import PropTypes from 'prop-types';
import {MsgContainer,MsgBody,MsgHeading, NavHeading} from '../../css-in-js';

function MessageSection(props){
    return(
        <MsgContainer>
            <MsgHeading>
               {(props.activeChannel.id ===undefined) ? <strong>Select a Channel</strong> : <strong>Messages</strong>}
            </MsgHeading>
            {(props.activeChannel.id !==undefined) && <NavHeading>{props.activeChannel.name}</NavHeading>}
            <MsgBody>
                <MessageList {...props}/>
                <MessageForm {...props}/>
            </MsgBody>
        </MsgContainer>
    );
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    addMessageToList: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageSection;

