import React,{Component} from 'react';

export default class SelectDropdown extends Component{

    changeInDropDown = (value) => {
        this.props.selectionChangeADD(value.target.value);
    }

    render(){
        const Dropdown={
             listStyle: 'none',
             margin:'0 30px'
        }
    return(
    <select style={Dropdown} onChange={(event) => this.changeInDropDown(event)}>
    <option value=''>Select</option>
    <option value='before'>Before</option>
    <option value='after'>After</option>
    </select>)}
}