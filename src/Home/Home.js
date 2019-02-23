import React from 'react';
import banner from '../Images/banner.jpg';
import '../Stylesheets/Home.css';
import '../Stylesheets/App.css';
import { Parallax } from 'react-parallax';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
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
              <CardTitle className="CardTitle text-center"> Sustainability can be affordable and chic. No greenwashing guaranteed. </CardTitle>
              {/* <CardSubtitle className="CardSubtitle text-center">Some subtitle text</CardSubtitle> */}
              <CardText className="CardSubtitle text-center">
                We are a project that advocates for sustainable lifestyles. Limiting our hyper-consumerist economy to Earth’s finite resources,
                we encourage consumers to engage in minimalist lifestyles, slow fashion and slow architecture by purchasing from student designers, 
                creators, and artists. We are looking to upcycle second hand clothing, textiles and everyday waste, giving them a new life in fashion, 
                art, and architecture.
              </CardText>
              <Button href="/signup" className="CardButton text-center" style={{padding: "10px"}}>Join our Ecomode Campaign</Button>
            </CardBody>
          </Card>
        </div>
    </div>
  );
};

export default home;
