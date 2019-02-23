import React from 'react';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import '../Stylesheets/App.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const team = (props) => {
    return (
        <div>
            <TaxAppNav />
            <h1 className='pageHeader'>Meet the Team</h1>
            <p className='paragraph' style={{textAlign:'center'}}>More info to come soon!</p>
        </div>
    );
}

export default team;