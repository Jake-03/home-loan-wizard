import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updatePropToBeUsedOn } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardThree extends Component {
    
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                <p name="whatPropText" >What property are you looking to use the loan on?</p> <br />
                    <div className="row">
                        <Link to="/wFour"><button name="primary" value="Primary Home" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button name="rental" value="Rental Property" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button name="secondary" value="Secondary Home" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>        
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      propToBeUsedOn: state.propToBeUsedOn
    };
}
export default connect(mapStateToProps, { updatePropToBeUsedOn })(WizardThree); 
