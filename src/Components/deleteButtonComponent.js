import React,{Component} from 'react';


export default class DeleteButtonComponent extends Component{


    deleteRow(){
        console.log('sending the data',this.props.index);
        this.props.deleteRow(this.props.index);
    }

    render(){
        let style={
            backgroundColor:'red',
            color:'white',
            textAlign:'center',
            fontSize:'16px',
            cursor:'pointer',
            width:'100px',
            height:'auto'
        }
        return(
            <div >
                <button style={style} onClick={(event) => this.deleteRow(this.props.index)}>DELETE </button>
            </div>

        );
    }

}