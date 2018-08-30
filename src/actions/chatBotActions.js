import {sendMessageToBot as sendMessageToBotApi} from "../services";
import {ACTION_TYPES} from "../constants";

export const sendMessageToBot = (text) => (dispatch) =>
    new Promise((resolve, reject) => {

        dispatch({
            type: ACTION_TYPES.CHATBOT.SEND_MESSAGE_TO_LIST,
            payload: {
                id: Date.now(),
                text
            }
        });

        sendMessageToBotApi(text)
            .then(res => {
                dispatch({
                    type: ACTION_TYPES.CHATBOT.FETCH_BOT_ANSWER.SUCCESS,
                    payload: res
                });
                dispatch({
                    type: ACTION_TYPES.CHATBOT.SEND_MESSAGE_TO_LIST,
                    payload: {
                        id: Date.now(),
                        text: res.fulfilment.speech
                    }
                });
                resolve()
            })
            .catch(err => {
                dispatch({type: ACTION_TYPES.CHATBOT.FETCH_BOT_ANSWER.SUCCESS});
                console.log(err);
                reject(err)
            })
    });