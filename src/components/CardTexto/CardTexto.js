import React from "react";

import { Card, CardHeader,CardBody,CardTitle, CardText, Table} from "mdbreact"


class CardTexto extends React.Component {




    render() {
        if(this.props.sender == '0'){
            return (
                <Card className="text-right">
                <CardTitle  >
                    Emme
                </CardTitle>
                              <CardBody>
                              <CardText>
                                  {this.props.text}
                              </CardText>
                              </CardBody>
                 </Card>
    
            )
        }else{

            return (
                <Card className="text-left">
                <CardTitle  >
                User</CardTitle>
                              <CardBody>
                              <CardText>
                                  {this.props.text}
                              </CardText>
                              </CardBody>
                 </Card>
    
            )

        }


    }
}

export default CardTexto;