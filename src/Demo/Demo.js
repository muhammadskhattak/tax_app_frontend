import React from 'react';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import '../Stylesheets/App.css';
import '../Stylesheets/Card.css';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import FormData from 'form-data';
import axios from 'axios';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            picture: null,
            pictureURL: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitImage = this.submitImage.bind(this);
        this.testDatabase = this.testDatabase.bind(this);
    }

    // Handles changes 
    handleChange(event) {
        if (this.state.picture != null){
            URL.revokeObjectURL(this.state.picture);
        }
        this.setState({
            picture: event.target.files[0],
            pictureURL: URL.createObjectURL(event.target.files[0])
        });
        console.log(this.picture)
    }

    // Handle the post request to Taggun
    submitImage(){
        let data = new FormData();
        data.append('file', this.state.picture);
        console.log(data);
        axios.post('https://api.taggun.io/api/receipt/v1/verbose/file', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'apikey': 'b84cf380374611e9bba4c5572eb43161'
            }
        })
        .then((response) => {
            console.log(response);
            console.log(response.data["totalAmount"]);
            console.log(response.totalAmount);
        })
        .catch((error) => {
            console.log("Failed to get response");
            console.log(error.msg);
        });
    }

    testDatabase(){
        console.log("button pressed");
        axios.get(
            'http://35.203.8.67/rating?userId=Dentist'
        ).then((response) => {
            console.log(response);
        }).catch((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <TaxAppNav />
                <input type="file" onChange={this.handleChange} />
                <div style={{textAlign: 'center'}}>
                    <img src={this.state.pictureURL} style={{textAlign: 'center', maxHeight: '256px'}}/>
                </div>
                <div>
                    <button onClick={this.submitImage}>Upload Image</button>
                </div>
                <div>
                    <button onClick={this.testDatabase}>Test DB</button>
                </div>
            </div>
        );
    }
}