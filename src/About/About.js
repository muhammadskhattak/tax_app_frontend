import React from 'react';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import '../Stylesheets/App.css';
import '../Stylesheets/Card.css';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const about = (props) => {
  return (
    <div>
      <TaxAppNav />
      <h1 className='pageHeader'>About Us</h1>
      <div className="CardContainer">
          <Card body inverse style={{backgroundColor: "#FFFFFF", borderColor: "#DCDCDC"}}>
            {/* <CardImg className="CardImage text-center" src={banner}/> This is how one would insert image into a card */}
            <CardBody className="CardBody">
              <CardTitle className="CardTitle text-center">
              Don't spend money to save money!
              </CardTitle>
              {/* <CardSubtitle className="CardSubtitle text-center">Some subtitle text</CardSubtitle> */}
              <CardText className="CardSubtitle text-center">
              Deductive aims to cut the middleman out of accounting for self-contracted workers
              </CardText>
              <CardText className="CardSubtitle text-center">
              Project Deductive is a project that aims to cut the middleman out of managing a users taxes. Specfically, 
              for self-contracted workers we hope to simplify their lives by allowing users to capture their receipts and
              efficiently store them for the purpose of end of year taxes. This saves users from having to store physical 
              copies of their receipts, which easily get lost or damaged.
              </CardText>
              <CardText className="CardSubtitle text-center">
              With the receipt images, we will be able to process them to gather relevant information. Using this we can
              predict a user's spending habits and based on their income recommend to them the best way to manage their money
              so that they can get the products they need and make the most out of their tax deductions. With all this data we 
              will also be able to produce tax forms for users to simplify the process for them, removing one of the many 
              expenses of being self-contracted.
              </CardText>
            </CardBody>
          </Card>
        </div>
    </div>
  );
}

export default about;
