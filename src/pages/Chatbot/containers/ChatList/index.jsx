import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {connect} from 'react-redux'
import {
    Chat as ChatIcon,
    Face as FaceIcon
} from '@material-ui/icons';
import classNames from 'classnames';
import Typist from 'react-typist';
import _ from 'lodash'
import {USER_TYPES} from "../../../../constants";

class ChatList extends Component {

    constructor(props) {
        super(props);
        this._renderMessagesList = this._renderMessagesList.bind(this)
    }

    _renderLeftRow(item) {
        const {classes} = this.props;

        return (
            <div key={`${item.id}_leftRow`} className={classes.messageContainer}>
                <ChatIcon
                    classes={{
                        root: classes.messageIcon
                    }}
                />
                <div className={classes.messageText}>
                    <Typist
                        avgTypingDelay={30}
                        onCharacterTyped={() => this.scrollToBottom()}
                        stdTypingDelay={15}
                        cursor={{
                            hideWhenDone: true,
                        }}
                    >{item.text}</Typist>
                </div>
            </div>
        )
    }

    _renderRightRow(item) {
        const {classes} = this.props;

        return (
            <div key={`${item.id}_rightRow`} className={classes.messageContainer}>
                <FaceIcon
                    classes={{
                        root: classes.rightMessageIcon
                    }}
                />
                <div className={classes.rightMessageText}>{item.text}</div>
            </div>
        )
    }

    _renderMessagesList() {
        return _.map(this.props.messagesList, message => {
            if (message.messageFrom === USER_TYPES.BOT) {
                return this._renderLeftRow(message)
            }
            return this._renderRightRow(message)
        })
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {classes} = this.props;
        return (
            <div
                ref={(div) => {
                    this.messageList = div;
                }}
                className={classes.chatListContainer}>
                <div className={classes.chatListInner}>
                    {this._renderMessagesList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messagesList: state.chatbot.messagesList
});

ChatList = compose(
    withStyles(styles, {withTheme: true}),
    connect(mapStateToProps)
)(ChatList);

export {ChatList}