import React from 'react';
import TaxAppNav from '../GlobalComponents/TaxAppNav';
import TaxAppForm from '../GlobalComponents/Form';
import SignInForm from '../GlobalComponents/SigninForm';
import '../Stylesheets/App.css';
import '../Stylesheets/Card.css';
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import FormData from 'form-data';
import axios from 'axios';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            picture: null,
            pictureURL: null,
            user: null,
            totalAmount: 0,
            taxAmount: 0,
            data:null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitImage = this.submitImage.bind(this);
        this.submitDatabase = this.submitDatabase.bind(this);
        this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
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
            this.setState({
                totalAmount: response["data"]["totalAmount"]["data"],
                taxAmount: response["data"]["taxAmount"]["data"],
                date: response["data"]["date"]["data"],
            });
            console.log(response);
            console.log(response["data"]["totalAmount"]["data"]);
        })
        .catch((error) => {
            console.log("Failed to get response");
            console.log(error.msg);
        });
    }

    submitDatabase(){
        const receipt = {
            tax: this.state.taxAmount,
            price: this.state.totalAmount, 
        };
        
        axios.post(
            'https://spatial-genius-232603.appspot.com/predict/addReceipt', receipt
        ).then((response) => {
            console.log(response);
        }).catch((response) => {
            console.log(response);
        })
    }

    formSubmissionHandler(new_username){
        this.setState({user: new_username});
    }

    render() {
        return (
            <div>
                <TaxAppNav />
                <TaxAppForm handler={this.formSubmissionHandler}/>
                <SignInForm handler={this.formSubmissionHandler}/>
                <p>{this.state.user}</p>
                <input type="file" onChange={this.handleChange} />
                <div style={{textAlign: 'center'}}>
                    <img src={this.state.pictureURL} style={{textAlign: 'center', maxHeight: '256px'}}/>
                </div>
                <div>
                    <Button onClick={this.submitImage} style={{textAlign:'center'}}>Upload Image</Button>
                </div>
                <div>
                    <Button onClick={this.submitDatabase}>Submit to Database</Button>
                </div>
                <p>Total amount spent: {this.state.totalAmount}</p>
                <p>Date of purchase: {this.state.date}</p>
                <Button href="https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/t2/t2-18e.pdf">link to your tax form</Button>
            </div>
        );
    }
}