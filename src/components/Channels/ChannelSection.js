import React from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';
import PropTypes from 'prop-types';
import {NavContainer, NavBody, NavHeading} from '../../css-in-js';

function ChannelSection(props){
    return(
        <NavContainer>
            <NavHeading>
                <strong>Channels</strong>
            </NavHeading>
            <NavBody>
                <ChannelList {...props}/>
                <ChannelForm {...props}/>
            </NavBody>
        </NavContainer>
    );
}

ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannelToList: PropTypes.func.isRequired,
    activeChannel: PropTypes.object
}

export default ChannelSection;


// ChannelSection passes the setChannel function it receives from App as props to ChannelList (which in turn passes it to Channel) and also the channels array
// It passes the addchanneltolist function to the form