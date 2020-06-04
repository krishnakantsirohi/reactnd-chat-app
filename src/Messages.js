import React, {Component} from 'react';

class Messages extends Component{
    render() {
        const {messages, user} = this.props;
        return (
            <ul className='message-list'>
                {
                    messages.map((message, index) => (
                        <li key={index}
                            className={message.username===user.username
                                ?'message sender'
                                :'message recipient'}>
                            <p>{`${message.username}: ${message.text}`}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Messages;