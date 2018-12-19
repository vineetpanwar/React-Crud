import React,{Component} from 'react';


export default class SearchComponent extends Component{

    searchContent = (value) =>  {
        this.props.searchContent(value.target.value);
    }

    searchDate = (value) => {
        this.props.searchDate(value.target.value);
    }

    refreshContent = () => {
        this.props.refreshContent();
    }

    selectionChange = (value) => {
        this.props.selectionChange(value.target.value);
    }
    render(){

        let style= {
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start'
        }

        return(
            <div style={style}>
                <label style={{marginRight:'20px'}}><b>Search Based On:</b></label>
                
                <input type="text" style={{marginRight:'20px'}} name="searchmaadi" placeholder="" value={this.props.searchVal} onChange={(val)=> this.searchContent(val)}>
                </input>
                <input type="date" style={{marginRight:'20px'}} value={this.props.currentSearchDate} onChange={(val) => this.searchDate(val)}>
                </input>
                <select onChange={(value) => this.selectionChange(value)} value={this.props.selectedValue}>
                <option value="before">Before this date </option>
                <option value="after">After this date </option>
                </select>
                
            </div>
        )
    }
    

}