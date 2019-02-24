import React from 'react';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import '../Stylesheets/App.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const team = (props) => {
    return (
        <div>
            <TaxAppNav />
            <div className="CardContainer">
            <Card body inverse style={{backgroundColor: "#FFFFFF", borderColor: "#DCDCDC"}}>
            {/* <CardImg className="CardImage text-center" src={banner}/> This is how one would insert image into a card */}
            <CardBody className="CardBody">
              <CardTitle className="CardTitle text-center">
              Meet the Team!
              </CardTitle>
              {/* <CardSubtitle className="CardSubtitle text-center">Some subtitle text</CardSubtitle> */}
              <CardText className="CardSubtitle text-center">
                We are all second year students studying computer science. We've known eachother since high school
                and were all very excited to participate in a hackathon together. Hack the Valley gave us the opportunity
                to do just that. We chose a project that is meaningful to all of us and we are excited to share it with everyone!
              </CardText>
            </CardBody>
          </Card>
        </div>
        </div>
    );
}

export default team;