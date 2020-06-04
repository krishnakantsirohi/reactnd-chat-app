import React, {Component} from 'react';
import SendMessage from "./SendMessage";
import Messages from "./Messages";

class ChatWindow extends Component{
    state= {
        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ],
        users: [{ username: 'Amy' }, { username: 'John' }]
    }

    sendMessage = (msg) => {
        this.setState((currentState) => ({
            messages: currentState.messages.concat([msg]),
        }));
    }

    render() {
        return (
            this.state.users.map((user) =>
                <div className='chat-window'>
                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{user.username}</div>
                    <Messages messages={this.state.messages} user={user}/>
                    <SendMessage user={user} sendMessage={this.sendMessage}/>
                </div>
            )
        )
    }
}

export default ChatWindow;