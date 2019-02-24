import React from 'react';
import banner from '../Images/banner.jpg';
import '../Stylesheets/Home.css';
import '../Stylesheets/App.css';
import { Parallax } from 'react-parallax';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import TaxAppForm from '../GlobalComponents/Form';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const home = (props) => {
  return (
    <div>
        <TaxAppNav />
        <Parallax
             bgImage={banner}
             bgImageAlt="Poster for Ecomode. "
             strength={300}
             className="img-fluid">
          <div style={{
            minWidth:800,
            height:'100%',
            minHeight:800,
            paddingTop:"57.25%"
            }} />
          </Parallax>

          <div className="CardContainer">
          <Card body inverse style={{backgroundColor: "#FFFFFF", borderColor: "#DCDCDC"}}>
            {/* <CardImg className="CardImage text-center" src={banner}/> This is how one would insert image into a card */}
            <CardBody className="CardBody">
              <CardTitle className="CardTitle text-center"> Don't spend money to save money </CardTitle>
              {/* <CardSubtitle className="CardSubtitle text-center">Some subtitle text</CardSubtitle> */}
              <CardText className="CardSubtitle text-center">
              Project Deductive all started with a simple goal, to make accounting more manageable for self-contracted workers. By capturing data 
              from user receipts, we will predict the user's spending habits and offer them aid with managing their book-keeping.
              </CardText>
              <Button href="/about" className="CardButton text-center" style={{padding: "10px"}}>Learn more about the Project</Button>
            </CardBody>
          </Card>
        </div>
    </div>
  );
};

export default home;
