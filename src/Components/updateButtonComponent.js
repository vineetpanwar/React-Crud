import React,{Component} from 'react';


export default class UpdateButtonComponent extends Component{

    updateRow = (val)  => {
        console.log(val);
        this.props.updateRow(val);
    }

    render(){
        let style={
            backgroundColor:'blue',
            color:'white',
            textAlign:'center',
            fontSize:'16px',
            cursor:'pointer',
            width:'100px',
            height:'auto'
        }
        return(
            <div>
                <button style={style} onClick={(event) => this.updateRow(this.props.index)}>Update</button>
            </div>

        );
    }

}