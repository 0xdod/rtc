import React from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';
import {Ul} from '../../css-in-js';

function ChannelList(props){
    return(
        <Ul>
            {props.channels.map(channel => <Channel key = {channel.id} channel={channel} {...props} />)}
        </Ul>
    );
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object
}

export default ChannelList;

/*SET PROP TYPES: Takes a channel array and a setChannel function that shows each channel messages which is passed as props to
 each Channel component */