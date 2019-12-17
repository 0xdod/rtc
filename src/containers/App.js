import React, {Component} from 'react';
import ChannelSection from '../components/Channels/ChannelSection';
import UserSection from '../components/Users/UserSection';
import MessageSection from '../components/Messages/MessageSection';
// import {channels, users} from '../examples'
import {AppStyle, Nav} from '../css-in-js';
import '../App.scss';

class App extends Component{
    constructor(){
        super()
        this.state = {
            channels:[],
            users:[],
            messages: [],
            activeUser:{},
            activeChannel:{},
        }
        this.setChannel = this.setChannel.bind(this)
        this.addChannelToList = this.addChannelToList.bind(this)
        this.addUserToList = this.addUserToList.bind(this)
        this.addMessageToList = this.addMessageToList.bind(this)
    }

    setChannel(activeChannel){
        this.setState({activeChannel})
        // retrieves msgs from the cloud or something haha
    }

    addChannelToList(name){
        //updates channel list with the value passed in by Channelform, and adds channel to list
        this.setState(state => state.channels.push({id: state.channels.length, name}))
    }
   
    addUserToList(name){
        //updates user list with the value passed in by Userform, and adds user to list
        this.setState(state => state.users.push({id: state.users.length, name}))
    }

    addMessageToList(body){
        let createdAt = new Date();
        let author = (this.state.users.length > 0) ? this.state.users[0].name :'anon'
        this.setState(state => state.messages.push({id: state.messages.length, body, createdAt,author}))
    }



   
    render(){
        return (
            <AppStyle>
                <Nav>
                    <ChannelSection
                        {...this.state} 
                        setChannel={this.setChannel} 
                        addChannelToList={this.addChannelToList}
                    />

                    <UserSection
                        {...this.state} 
                        setUser={this.setUser} 
                        addUserToList={this.addUserToList}
                    />
                </Nav>
                

                <MessageSection {...this.state} addMessageToList={this.addMessageToList}/>
               
            </AppStyle>
        );
    }
}

export default App


//app has a state of channels and users for now