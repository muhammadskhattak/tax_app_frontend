import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import '../Stylesheets/Card.css';

class SignInForm extends Component{
    constructor(props){
        super(props);
        this.dismissAlert = this.dismissAlert.bind(this);
        this.fireAlert = this.fireAlert.bind(this);
    }

    state = {
        username:'',
        alertVisible:false,
    }

    handleUsernameEdit = event => {
        this.setState({ username: event.target.value });
    }


    handleSubmit = event => {
        event.preventDefault();
        const person = {
            username: this.state.username,
        };

        if (this.props.handler){
            this.props.handler(person.username);
        }

        if (person.username){
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
            <h2 style={{fontFamily:"Arial"}}>Sign In</h2>
            <p style={{fontFamily:"Arial"}}>Signing up will allow you to use our API</p>
            
            <Form id="test-form" onSubmit={this.handleSubmit}>
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

export default withRouter(SignInForm);