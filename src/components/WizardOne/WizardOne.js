import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import { updateLoanType, updatePropertyType } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardOne extends Component { 

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">

                <p name="loanDropDownText" >What type of loan will you be needing?</p> <br />
            
                <select name="loanDropDown" onChange={(e) =>this.props.updateLoanType(e.target.value)}>

                    <option type="text" name="purchase" value="Home Purchase" >Home Purchase</option>
                    <option type="text" name="refi" value="Refinance" >Refinance</option>
                    <option type="text" name="equity" value="Home Equity" >Home Equity loan/line</option>

                </select> <br />  

                <p name="propDropDownText" >What type of property are you purchasing?</p> <br />

                <select name="propDropDown" onChange={(e)=>this.props.updatePropertyType(e.target.value)}>


                        <option name="singleHome" value="Single Family Home">Single Family Home</option>
                        <option name="townHome" value="Town Home">Townhome</option>
                        <option name="condo" value="Condo">Condo</option>
                        <option name="multiHome" value="Multi Family Dwelling">Multi Family Dwelling</option>
                        <option name="mobileHome" value="Mobile Home">Mobile Home</option>

                </select>
                    
                    <Link to="/wTwo"><button name="next" className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps( state ) {
  return { 
      loanType: state.loanType,
      propertyType: state.propertyType
    };
}
export default connect(mapStateToProps, {updateLoanType, updatePropertyType})(WizardOne); 