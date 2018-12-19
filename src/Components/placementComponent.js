import React , {Component} from 'react';

import SelectDropdown from './selectDropdown';
import RowSelectorComponent from "./rowSelectorComponent";

export default class PlacementComponent extends Component{
    render(){
        
        

        return(
        
            <div style={{'display':'flex','justifyContent':'flex-start'}}>
                <span style={{'marginRight':'10px'}}>
                <SelectDropdown selectionChangeADD = {(event) => this.props.selectionChangeADD(event)}/>
                <label >Select the row for this operation</label>
                </span> 
                <RowSelectorComponent list={this.props.list.rowArray} rowChangeADD = {(event) => this.props.rowChangeADD(event)}></RowSelectorComponent>
            </div>
                )
    }
    
}
