import React,{Component} from 'react';


export default class AddButtonComponent extends Component{

    addRow = () => {
        this.props.addRow();
    }

    render(){
        let style={
            backgroundColor:'green',
            color:'white',
            textAlign:'center',
            fontSize:'16px',
            cursor:'pointer',
            width:'100px',
            heigth:'auto'
        }
        return(
            <div>
                { !this.props.triggerUpdate && <button style={style} onClick={() => this.addRow()}>Add </button> }
                { this.props.triggerUpdate && (<span><button style={style} onClick={() => this.addRow()}>Update </button> <button style={style} onClick={() => this.props.cancelUpdate()}>Cancel</button></span>) }
            </div>

        );
    }

}