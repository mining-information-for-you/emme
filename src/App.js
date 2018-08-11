import React from "react";
import { connect } from "react-redux";
import { msgChatMessageRequest } from "./store/actions";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Card, CardHeader,CardBody,CardFooter, CardText, Table} from "mdbreact"
import CardTexto from "./components/CardTexto/CardTexto";

const headingStyle = {
  position: "fixed",
  top: 0,
  backgroundColor: "white",
  borderBottom: "1px solid"
};
const listStyle = {
  paddingTop: "60px",
  paddingBottom: "60px"
};
const formPosStyle = {
  position: "fixed",
  bottom: 0,
  marginBottom: 0,
  backgroundColor: "white"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      textToBeSent: ""
    };
  }
  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleChange(e) {
    this.setState({ textToBeSent: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { textToBeSent } = this.state;
    const { sendMessage } = this.props;
    if (textToBeSent.trim() === "") {
      alert("Empty is not allowed! ");
      return;
    }
    sendMessage(textToBeSent);
    this.setState({ textToBeSent: "" });
  }

  render() {
    const { textToBeSent } = this.state;
    const { messages, onProcess } = this.props;
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">


        <Card style={{width: '22rem', marginTop: '1rem'}}>
          <CardHeader color="primary-color" tag="h3">EMME</CardHeader>
          <CardBody>
              <div style={{'display': 'block',  'maxHeight': '600px', 'overflowY': 'auto'}}>
                <Table responsiveMd>
                  
                  <tbody>
                  {messages.map(({ text, sender, isErrorMessage }, index) => (
                    <tr key={index}>

                      <td >
                        <CardTexto  sender={sender} text={text} />
                      </td>             
                    </tr>
                  ))}
                
                  </tbody>
                </Table>
              </div>
        
        
        {/* message thread */}

            <CardFooter >
              {/* form input to send chat message */}
                 <form onSubmit={this.handleSubmit}>
                   <input
                      className="form-control"
                      ref={input => input && input.focus()}
                      type="text"
                      value={onProcess ? "Waiting..." : textToBeSent}
                      onChange={this.handleChange}
                      placeholder="Type here to chat!"
                      disabled={onProcess}
                    />
                    </form>
            </CardFooter>
        </CardBody>
        </Card>
        </div>
        <div className="col-md-4"></div>
      </div>

    );
  }
}

const mapStateToProps = state => state;
const mapActionToProps = { sendMessage: msgChatMessageRequest };

export default connect(mapStateToProps, mapActionToProps)(App);