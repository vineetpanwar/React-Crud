import React,{Component} from 'react';

import DeleteButtonComponent from './deleteButtonComponent';
import UpdateButtonComponent from'./updateButtonComponent';

export default class ListOneComponent extends Component{
    render(){
        let style={
            display:'flex',
            margin:'10px 30px',
            justifyContent:'space-around',
            width:'400px',
        }
        return (
            <span style={style}>
                <li>
                <span style={{marginRight:'10px'}}>
                {this.props.deadline}
                </span>
                <span>
                {this.props.rowdata}
                </span>
                </li>
                <DeleteButtonComponent 
                deleteRow={(index) => this.props.deleteRow(index)} index={this.props.index}
                />
                <UpdateButtonComponent 
                updateRow = {(index) => this.props.updateRow(index)} index={this.props.index}/>
            </span>
            
        );
    }
};