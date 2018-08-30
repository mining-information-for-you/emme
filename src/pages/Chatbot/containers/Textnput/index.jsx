import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from "./styles";
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import classNames from 'classnames';

class TextInput extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classNames(classes.inputBar, classes.inputBarFixed)}>
                <form>
                    <div className={classes.inputBarInner}>
                        <input
                            placeholder="Ask something to me..."
                            className={classes.input}
                            type="text"
                        />
                        <div className={classes.buttonContainer}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                OK
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
    connect(null, {})
)(TextInput);

export {TextInput}