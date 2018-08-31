import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Button, CircularProgress} from '@material-ui/core'
import classNames from 'classnames';
import {sendMessageToBot} from "../../../../actions";
import {Field, reduxForm} from 'redux-form'

class TextInput extends Component {
    constructor(props) {
        super(props);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(values) {
        const inputValue = values.inputTextMessage;
        this.props.reset();
        return new Promise((resolve, reject) => {
            this.props.sendMessageToBot(inputValue)
                .then(() => resolve())
                .catch(() => reject())
        });
    }

    render() {

        const {handleSubmit, classes, submitting, pristine} = this.props;

        return (
            <div className={classNames(classes.inputBar, classes.inputBarFixed)}>
                <form onSubmit={handleSubmit(this._onSubmit)}>
                    <div className={classes.inputBarInner}>
                        <Field
                            component='input'
                            required={true}
                            placeholder="Ask something to me..."
                            type="text"
                            autoComplete="off"
                            name="inputTextMessage"
                            className={classes.input}
                        />
                        <div className={classes.buttonContainer}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                disabled={pristine || submitting}
                            >
                                {submitting ? <CircularProgress color="primary" size={30} thickness={3}/> : 'Send'}
                            </Button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

TextInput = compose(
    withStyles(styles, {withTheme: true}),
    connect(null, {sendMessageToBot}),
    reduxForm({
        form: 'BotInput',
    }),
)(TextInput);

export {TextInput}