import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from './styles'
import {
    Chat as ChatIcon,
    Face as FaceIcon
} from '@material-ui/icons';
import Typist from 'react-typist';
import {compose} from 'redux'
import {VoicePlayer} from '../../../../components'

class ChatListItem extends Component {

    constructor(props) {
        super(props);
        this._renderRightRow = this._renderRightRow.bind(this);
        this._renderLeftRow = this._renderLeftRow.bind(this)
    }

    componentDidMount(){
    }

    _renderLeftRow(item) {
        const {
            classes,
        } = this.props;

        return (
            <div key={`${item.id}_leftRow`} className={classes.messageContainer}>
                <VoicePlayer play text={item.text}/>
                <ChatIcon
                    classes={{
                        root: classes.messageIcon
                    }}
                />
                <div className={classes.messageText}>
                    <Typist
                        avgTypingDelay={30}
                        onCharacterTyped={() => this.props.onCharacterTyped()}
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

    render() {
        const {direction, message} = this.props;
        return direction === 'left' ? this._renderLeftRow(message) : this._renderRightRow(message)
    }
}

ChatListItem = compose(
    withStyles(styles, {withTheme: true}),
)(ChatListItem);

export {ChatListItem}