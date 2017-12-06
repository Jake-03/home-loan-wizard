import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateFirstName, updateLastName, updateEmail } from './../../ducks/reducer'
import { connect } from 'react-redux';

class WizardTen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false
        }
        this.firstname = ""
        this.lastName = ""
        this.email = ""

        this.validateEmail = this.validateEmail.bind(this)
    }
    validateEmail(e) {
        this.email = e.target.value
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
            this.setState({valid:true})
            this.props.updateEmail(e.target.value)
        }
        else
            this.setState({valid:false})
    }
    render() {
        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p name="nameText" >What is your name?</p> <br />

                    <input type="text" name="firstName" placeholder="First Name" onChange={(e) => this.props.updateFirstName(e.target.value)} />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => this.props.updateLastName(e.target.value)} />
                    <input type="email" name="email" placeholder="email" onChange={this.validateEmail} />

                    <Link to="/wEleven"><button name="next" disabled={!this.state.valid} className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email
    };
}
export default connect(mapStateToProps, { updateFirstName, updateLastName, updateEmail })(WizardTen); 