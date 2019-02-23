import React from 'react';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import '../Stylesheets/App.css';
import '../Stylesheets/Card.css';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            picture: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            picture: URL.createObjectURL(event.target.files[0]),
        });
        console.log(this.picture)
    }


    render() {
        return (
            <div>
                <TaxAppNav />
                <input type="file" onChange={this.handleChange} />
                <div style={{textAlign: 'center'}}>
                    <img src={this.state.picture} style={{textAlign: 'center'}}/>
                </div>
            </div>
        );
    }
}