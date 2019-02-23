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
                At the core, Ecomode aims to promote sustainable living in terms of fashion and architecture 
                to the students of University of Toronto and beyond. 
              </CardTitle>
              {/* <CardSubtitle className="CardSubtitle text-center">Some subtitle text</CardSubtitle> */}
              <CardText className="CardSubtitle text-center">
                Sustainability is a hot topic at the moment: it’s fashionable and forward-thinking, but still an inaccessible luxury to most students. 
                One can forgo the use of plastic straws and such, but fashion and living spaces are embedded in the centre of our everyday lives and our culture. 
                Thus, we want to create a culture of sustainability from these mediums.
              </CardText>
              <CardText className="CardSubtitle text-center">
                We want to engage student designers, student stylists, student photographers and student consumers in upcycling textiles, “trash” and second hand 
                materials to give them a new, unique identity in prêt-a-porter and couture. Each piece is based on the individual, customized by the designer and 
                produced only once to highlight the laborous story of modern fashion production. 
                Because we involve no outsourcing and no new textiles, Ecomode clothing is incredibly affordable, rivalling the price of fast fashion whilst 
                reducing waste at the same time. Everyone will be able to participate in our mission.
                Our goals all adhere to the principles of slowness and economic degrowth - a slow production approach to consumerist culture and an emphasis of 
                upcycling to promote quality and reuse of products - which would contribute to a sustainable local economy. Ecomode hopes to engage by hosting 
                two art exhibits and one final fashion show where upcycled clothes, architectural models and art will be exhibited. To complete our sustainable 
                cycle, we will be donating all our expected proceeds (from clothing sales and tickets) to a local charity as an investment back into the city for 
                supporting sustainable purchases.
              </CardText>
            </CardBody>
          </Card>
        </div>
    </div>
  );
}

export default about;
