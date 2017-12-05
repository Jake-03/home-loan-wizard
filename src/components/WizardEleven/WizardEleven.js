import React,  { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

class WizardEleven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                
                      
                    <p name="overviewText" >Here is an overview of your form:</p> 

                    <div >

                        <div className="overarching-div">
                            <div name="name" className="form" >Name: 
                                <p className="p2" name="nameOutput">
                                    {this.props.firstName} {this.props.lastName}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div name="email" className="form" >Email: 
                                <p className="p2" name="emailOutput">
                                  {this.props.email}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div name="loan" className="form" >What type of loan will you be needing?: 
                                <p className="p2" name="typeOfLoan">
                                    {this.props.loanType}
                                </p> 
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="property" className="form" >What type of property are you purchasing?: 
                                <p className="p2" name="propertyType">
                                    {this.props.propertyType}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="city" className="form" >In what city will the property be located?: 
                                <p className="p2" name="city"> 
                                    {this.props.city}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="propertyType" className="form" >Type of property the loan is applied to:
                                <p className="p2" name="loanPropertyType">
                                    {this.props.propToBeUsedOn}
                                </p> 
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="found" className="form" >Have you already found your new home?: 
                                <p className="p2" name= "foundNewHome">
                                    {this.props.found}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div name="agent" className="form" >Currently working with a real estate agent?: 
                                <p className="p2" name="realEstateAgent">
                                    {this.props.realEstateAgent}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="cost" className="form" >Estimated purchase price of the home: 
                                <p className="p2" name="purchasePrice">
                                    {this.props.cost}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div name="downPayment" className="form" >Down payment: 
                                <p className="p2" name="downPayment">
                                    {this.props.downPayment}
                                </p>
                            </div> 
                        </div>

                        <div className="overarching-div">
                            <div name="credit" className="form" >Credit score: 
                                <p className="p2" name="creditScore"> 
                                    {this.props.credit}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="bankruptcy" className="form" >Bankruptcy history: 
                                <p className="p2" name="bankruptcyHistory">
                                    {this.props.history}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div name="address" className="form" >Current Address: 
                                <p className="p2" name= "currentAddress">
                                    {this.props.addressOne} <br />
                                    {this.props.addressTwo} <br />
                                    {this.props.addressThree}
                                </p>
                            </div>
                        </div>

                    </div>   
                </div>
               <div className="row">
                    <Link to="/finish"> <button name="send">Send</button></Link>
                    <Link to="/"> <button name="startOver">Start Again</button></Link>
               </div>
            </div>

            )
       }
}

function mapStateToProps( state ) {

        return{ 
            loanType: state.loanType,
            propertyType: state.propertyType,
            city: state.city,
            propToBeUsedOn: state.propToBeUsedOn,
            found: state.found,
            realEstateAgent: state.realEstateAgent,
            cost: state.cost,
            downPayment: state.downPayment,
            credit: state.credit,
            history: state.history,
            addressOne: state.addressOne,
            addressTwo: state.addressTwo,
            addressThree: state.addressThree,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
        };
        
}
export default connect(mapStateToProps)(WizardEleven); 
