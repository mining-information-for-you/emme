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

class ChatList extends Component {


    _renderLeftRow() {
        const {classes} = this.props;

        return (
            <div className={classes.messageContainer}>
                <ChatIcon
                    classes={{
                        root: classes.messageIcon
                    }}
                />
                <div className={classes.messageText}>
                    <Typist
                        avgTypingDelay={30}
                        stdTypingDelay={15}
                        cursor={{
                            hideWhenDone: true,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut

                    </Typist>
                </div>
            </div>
        )
    }

    _renderRightRow() {
        const {classes} = this.props;

        return (
            <div className={classes.messageContainer}>
                <FaceIcon
                    classes={{
                        root: classes.rightMessageIcon
                    }}
                />
                <div className={classes.rightMessageText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
        )
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.chatListContainer}>
                <div className={classes.chatListInner}>

                    {this._renderLeftRow()}
                    {this._renderRightRow()}


                </div>
            </div>
        )
    }
}

ChatList = compose(
    withStyles(styles, {withTheme: true}),
    connect(null, {})
)(ChatList);

export {ChatList}