import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import '../Stylesheets/Card.css';

class TaxAppForm extends Component{
    constructor(props){
        super(props);
        this.dismissAlert = this.dismissAlert.bind(this);
        this.fireAlert = this.fireAlert.bind(this);
    }

    state = {
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        income:'',
        alertVisible:false,
    }

    handleFirstNameEdit = event => {
        this.setState({ firstname: event.target.value });
    }

    handleLastNameEdit = event => {
        this.setState({ lastname: event.target.value });
    }

    handleEmailEdit = event => {
        this.setState({ email: event.target.value });
    }

    handleUsernameEdit = event => {
        this.setState({ username: event.target.value });
    }

    handleIncomeEdit = event => {
        this.setState({ income: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const person = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            income: this.state.income
        };

        if (this.props.handler){
            this.props.handler(person.username);
        }

        if (person.firstname && person.lastname && person.email && person.username && person.income){
            // axios.get(`https://script.google.com/macros/s/AKfycbxgPAWdcg81X-Ny3VJuIUF_jLinxZ6xiFOobiU81czWMzpn_ZPX/exec?firstname=${person.firstname}&lastname=${person.lastname}&email=${person.email}`, { person })
            // .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            //     this.props.history.push('/home');
            // });

            // Need to make a post result here.
            console.log("Make a post request!!!")
        } else {
            this.fireAlert();
        }
    }

    fireAlert = () => {
        this.setState({alertVisible: true});
    }

    dismissAlert = () => {
        this.setState({alertVisible: false});
    }

    render = () => {
        return (
            <div className='CardContainer'>
            <Container  className='container'>
            <h2 style={{fontFamily:"Arial"}}>Sign Up</h2>
            <p style={{fontFamily:"Arial"}}>Signing up will allow you to use our API</p>
            
            <Form id="test-form" onSubmit={this.handleSubmit}>
            <Col>
                <FormGroup>
                <Label>First Name</Label>
                <Input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="John"
                    onChange={this.handleFirstNameEdit}
                />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label>Last Name</Label>
                <Input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Doe"
                    onChange={this.handleLastNameEdit}
                />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johndoe@email.com"
                    onChange={this.handleEmailEdit}
                />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label>Username</Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="someone_interesting"
                    onChange={this.handleUsernameEdit}
                />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label>Income</Label>
                <Input
                    type="number"
                    name="income"
                    id="income"
                    placeholder="50000"
                    onChange={this.handleIncomeEdit}
                />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label>Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                </FormGroup>
            </Col>
            <Alert color="dark" isOpen={this.state.alertVisible} toggle={this.dismissAlert}>
                Invalid input! Check that you have filled out all fields!
            </Alert>
            <Button className="button" type="submit" id="submit-form">Submit</Button>
            <div style={{padding:'10px'}}></div>
            </Form>
        </Container>
        </div>
        );
    }
}

export default withRouter(TaxAppForm);