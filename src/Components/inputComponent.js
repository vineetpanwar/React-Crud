import React,{Component} from 'react';

export default class InputComponent extends Component {

    setCurrentEntry = (event) => {
        event.preventDefault();
        this.props.setCurrentEntry(event.target.value);
    }

    setCurrentDate = (event) => {
        event.preventDefault();
        this.props.setCurrentDate(event.target.value);
    }

    showVal = () => {
        console.log(this.props);
    }

    render(){
        this.showVal();
        return (
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="entermaadi"><b>Enter the row to be added &nbsp;</b></label>
                <input type="text" style={{marginRight:"10px"}}
                 name="entermaadi" placeholder="Enter the text details" 
                 value = {this.props.currentVal} 
                 onChange={(event) => this.setCurrentEntry(event)}/>                
                <br></br>
                <div style={{margin:" 10px 10px"}}>
                    <label htmlFor="datePicker" style={{margin:" 10px 10px"}}><b>Pick a DeadLine</b></label>    
                    <input type="date" name="datePicker" 
                    value = {this.props.cuurentDate} 
                    onChange={(event) => this.setCurrentDate(event)}></input>
                </div>
            </form>
            
        );
    }
}