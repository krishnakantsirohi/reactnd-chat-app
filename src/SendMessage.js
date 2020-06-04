import React, {Component} from 'react';

class SendMessage extends Component{

    state={
        username: '',
        text:'',
    }

    isDisabled = () => {
        return this.state.text==='';
    };

    updateText = (e, user) => {
        this.setState(() => ({
            text: e,
            username: user
        }))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.sendMessage(this.state);
        this.setState(()=>({
            text: ''
        }))
    }

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        onChange={(e) => this.updateText(e.target.value, this.props.user.username)}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()} >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SendMessage;