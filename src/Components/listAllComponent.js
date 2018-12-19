import React,{Component} from 'react';
import ListOneComponent from './listOneComponent';

export default class ListAllComponents extends Component{

    render(){

        const Dropdown={
            listStyle: 'none',
            float:'left'
        }

        return(
            <ul style={Dropdown}>
            {   
                this.props.list.rowArray.map((current,index) => 
                (<ListOneComponent key={index} index={index} rowdata={current.value}
                    deadline={current.deadline} 
                    deleteRow={(index) => this.props.deleteRow(index)}
                    updateRow = {(index) => this.props.updateRow(index)} ></ListOneComponent>           
                ))
            } 
            </ul>
        )};
            
} ;