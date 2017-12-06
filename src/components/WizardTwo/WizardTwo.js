import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCity } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valid : false
        }
        this.city = ''

        this.updateCity = this.updateCity.bind(this)
    }

    updateCity(e){
        this.city = e.target.value
        this.props.updateCity(this.city)
        if(this.city!==''){
            this.setState({valid:true})
        }
        else
            this.setState({valid:false})
    }


    render(){
        let link = ''
        if(this.state.valid){
            link = <Link to="/wThree"><button name="next" className="wTwo-btn"> Next </button></Link>
        }
        else{
            link = <Link to="/wThree"><button name="next" disabled='true' className="wTwo-btn"> Next </button></Link>
        }
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                    <p name="cityNameText" >In what city will the property be located?</p><br />
                
                    <input name="cityName" placeholder="city name" type="text" onChange={ this.updateCity }/>
               
                    <Link to="/wThree"><button name="next" disabled={!this.state.valid} className="wTwo-btn"> Next </button></Link>
                
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      city: state.city
    };
}
export default connect(mapStateToProps, { updateCity })(WizardTwo); 