import React , {Component} from 'react';


export default class RowSelectorComponent extends Component{

    changeInRowDropDown = (value) => {
        console.log(value, value.target.value);
        this.props.rowChangeADD(value.target.value);
    }

    render(){

        return(
        <div> 
            <select   onChange={(event) => this.changeInRowDropDown(event)}>
                <option value="">--Please choose an option--</option>
                {this.props.list.map((curr,index) => {
                    return (<option key={index} data={index} value={index}>{curr.value}</option>)
                })}
            </select>
        </div>
                )
    }
    
}