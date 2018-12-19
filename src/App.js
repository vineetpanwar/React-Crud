import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 



//Components import
import ListAllComponent from './Components/listAllComponent';
import InputComponent from './Components/inputComponent';
import PlacementComponent from './Components/placementComponent';
import AddButtonComponent from './Components/addButtonComponent';
import SearchComponent from './Components/searchComponent';

//Action Imported
import { addRow, setCurrentEntry , deleteRow ,updateRow ,cancelUpdate, getDataFirstTime ,
        setCurrentDate ,searchRow , selectionChange , searchDate ,selectionChangeADD ,rowChangeADD} from './ActionCreators/commonActions';

class App extends Component {

  componentWillMount = () => {
    this.props.getDataFirstTime();
  }

  renderList = () => {
    return this.props.state.youtubeVideos.map((video,index) => {
      return (
      <li key={index}>{video.snippet.description}</li>
      );
    });

  }

  render() {
    
    return (
      <div className="App" >
        <h1>Crud Operation</h1>
        <div className="flex-Container">

          <div style={{'marginRight':'10px'}}>
            <InputComponent currentVal = {this.props.state.currentEntry} 
            cuurentDate = {this.props.state.currentDate}
            setCurrentEntry={(data) => this.props.setCurrentEntry(data)}
            setCurrentDate={(data) => this.props.setCurrentDate(data)}
            />
          </div>

          <div style={{'marginRight':'10px'}}>
            <PlacementComponent list={this.props.state}
              selectionChangeADD = {(event) => this.props.selectionChangeADD(event)}
              rowChangeADD = {(event) => this.props.rowChangeADD(event)}/>
          </div>

          <div style={{'marginRight':'10px'}}>
            <AddButtonComponent cancelUpdate={() => this.props.cancelUpdate()}
             triggerUpdate={this.props.state.triggerUpdate} 
             addRow={() => this.props.addRow()}/>
          </div>   

        </div>      
        <hr></hr>
        <div style={{margin:'20px 20px'}}>
        <SearchComponent searchContent={(value) => this.props.searchRow(value)}
          date={this.props.currentSearchDate? this.props.date.currentSearchDate: ''}
          searchDate={(value) => this.props.searchDate(value)}
          selectionChange={(value) => this.props.selectionChange(value)}
          selectedValue = {this.props.state.searchOptions}  
          />
        </div>
        <ListAllComponent style={{float:'left'}} list={this.props.state}
            deleteRow={(index) => this.props.deleteRow(index)} 
            index={this.props.index}
            updateRow={(index) => this.props.updateRow(index)}/>
      </div>
    );
  }
}

/*
{this.props.state.youtubeVideos.length === 0 && !this.props.state.apiFailed && (<h1>Loading</h1>)}
        {this.props.state.apiFailed && (<h1>API FAILED</h1>)}
        {this.props.state.youtubeVideos.length > 0 && (<ul>
          {this.renderList()}
        </ul> )}

*/


//MapStatetoProps = Redux(Model) -> React(View)(To get or expose data from Redux(thunk) to react)

  const mapStatetoProps = (state) =>  {
    return  {
      state:state.appState
    };
  }


//MapDispatchtoProps = React(View) -> Redux(Model) (To send events or actions from react to Redux to change the state in redux)

  const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ addRow, setCurrentEntry , deleteRow ,updateRow, cancelUpdate,
                                getDataFirstTime ,setCurrentDate ,searchRow ,selectionChange , searchDate
                              ,selectionChangeADD, rowChangeADD},dispatch);
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
