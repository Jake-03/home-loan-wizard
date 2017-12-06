import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCost, updateDownPayment } from './../../ducks/reducer'
import { connect } from 'react-redux';

class WizardSix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false
        }
        this.price = ''
        this.down = ''


        this.updatePrice = this.updatePrice.bind(this)
        this.updateDown = this.updateDown.bind(this)
    }

    updatePrice(e) {
        this.price = e.target.value
        this.props.updateCost(e.target.value)
        if (this.price.length > 0 && this.down.length > 0)
            this.setState({ valid: true })
        else
            this.setState({ valid: false })
    }

    updateDown(e) {
        this.down = e.target.value
        this.props.updateDownPayment(e.target.value)
        if (this.price.length > 0 && this.down.length > 0)
            this.setState({ valid: true })
        else
            this.setState({ valid: false })
    }


    render() {
        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p name="estimatedPurchaseText" >What is the estimated purchase price?</p> <br />


                    <input type="number" name="purchasePrice" placeholder="amount" onChange={this.updatePrice} /> <br />


                    <p name="downPaymentText" >How much are you putting down as a down payment?</p> <br />


                    <input type="number" name="downPayment" placeholder="amount" onChange={this.updateDown} />


                    <Link to="/wSeven"><button name="next" disabled={!this.state.valid} className="wSix-btn"> Next </button></Link>
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cost: state.cost,
        downPayment: state.downPayment
    };
}
export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix); 