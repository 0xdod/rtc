import React from 'react';
import PropTypes from 'prop-types';
import {Li} from '../../css-in-js';

function Channel(props){
    const {channel, setChannel, activeChannel} = props
    const active = channel === activeChannel ? 'active' : ''
    return(
        <Li className = {active} onClick={() => setChannel(channel)}>{channel.name}</Li>
    );
}


Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object
}
export default Channel;


// SET PROPS TYPES :- Takes a channel object from an array of channels and responds to a click event by calling a setChannel
// function which sets the channel to show messages