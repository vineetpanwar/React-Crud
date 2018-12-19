
import * as Moment from 'moment';

let newState;
let initialState = {
    currentEntry: '',
    currentDate:'',
    rowArray:[],
    triggerUpdate:false,
    currentRow:null,
    currentSearchDate:null,
    searchOptions:'after',
    apiFailed: false,
    youtubeVideos: [],
    addSelection:'',
    placementSelection:-1
}
let backUpState = {...initialState};

export default function(state=initialState,action){
    switch(action.type){

        case 'SELECTION_CHANGE_ADD':
        newState = {...state};
        newState.addSelection = action.payload;
        console.log(newState.addSelection);
        return newState;

        case 'ROW_CHANGE_ADD':
        newState = {...state};
        newState.placementSelection = parseInt(action.payload);
        console.log(newState.placementSelection);
        return newState;

        case 'SEARCH_ROW':
        
            newState = {...state};
            if(action.payload !== ""){
                newState.rowArray = newState.rowArray.filter((val) => {
                    if(val.value.startsWith(action.payload)){
                        return val;
                    }
    
                });
            }

            else{
                newState = {...backUpState};
            }
            
            return newState;

        case 'SEARCH_DATE':
            newState = {...state};
            newState.currentSearchDate = action.payload;
            if(action.payload !== ""){
                newState.rowArray = newState.rowArray.filter((val) => {  
                    if(newState.currentSearchDate){
                        if(newState.searchOptions=="before"){
                        
                            if( new Date(val.deadline) < new Date(newState.currentSearchDate)){
                                return val;
                            }                       
                        }
                        if(newState.searchOptions=="after"){
                            if(new Date(val.deadline) > new Date(newState.currentSearchDate)){
                                return val;
                            }  
                        }   
                    }      
                    
                });
            }
            else{
                newState = {...backUpState};
            }
            // newState.currentDate = 
            return newState;    

        case 'SELECTION_CHANGE':
            newState = {...state};
            newState.searchOptions = action.payload;
            return newState;    

        case 'ADD_ROW':   
            newState = {...state};
            let datsetter = newState.currentDate;
            
            console.log(newState.addSelection,'newState.addSelection');
            console.log(newState.placementSelection,'newState.placementSelection');

            if(!datsetter){
                datsetter = Moment().format('YYYY-MM-DD')
            }
            
            //for a nomral add/update
            if(newState.addSelection =='' && newState.placementSelection<0){
                console.log('here is the index',parseInt(newState.placementSelection));
                if(newState.currentEntry !=='' ){
                    
                              
                    //if this a fresh row
                    if(!newState.triggerUpdate)
                    {
                        newState.rowArray.push({value:newState.currentEntry,deadline:datsetter});
                        
                    }
                    //update 
                    else{
                        newState.rowArray[newState.currentRow] = {value:newState.currentEntry,deadline:datsetter};
                        newState.triggerUpdate = false;
                    }
                }
            }
            //for an exclusive placement
            else{
                if(newState.currentEntry !=='' ){

                    //push the row before the selected row
                     if(newState.addSelection =='before') {
                        //if this a fresh row
                    if(!newState.triggerUpdate)
                    {
                        newState.rowArray.splice(newState.placementSelection,0,{value:newState.currentEntry,deadline:datsetter});
                    }
                    //update 
                    else{
                        let obj = {value:newState.currentEntry,deadline:datsetter};
                        newState.rowArray.splice(newState.currentRow,1);
                        newState.rowArray.splice(newState.placementSelection,0,obj);
                        newState.triggerUpdate = false;
                    }
                    }        
                    //push the row before the selected row
                    if(newState.addSelection =='after') {
                        //if this a fresh row
                    if(!newState.triggerUpdate)
                    {
                        newState.rowArray.splice(newState.placementSelection+1,0,{value:newState.currentEntry,deadline:datsetter});
                    }
                    //update 
                    else{
                        let obj = {value:newState.currentEntry,deadline:datsetter};
                         newState.rowArray.splice(newState.currentRow,1);
                        newState.rowArray.splice(newState.placementSelection+1,0,obj);
                        newState.triggerUpdate = false;
                    }
                    }
                }
            }
            
            
            //newState.currentEntry='';
            //newState.currentDate='';
            backUpState = {...newState};
            return newState;

        case 'SET_CURRENT_ENTRY':
            newState = {...state};
            newState.currentEntry=action.payload;
            return newState;

        case 'SET_CURRENT_DATE':
            newState = {...state};
            newState.currentDate = action.payload;
            return newState;    

        case 'DELETE_ROW':
            newState = {...state};
            newState.rowArray.splice(action.payload,1);
            return newState;

        case 'UPDATE_ROW':
            newState = {...state};
            newState.triggerUpdate = true;
            newState.currentEntry = newState.rowArray[action.payload].value;
            newState.currentDate = newState.rowArray[action.payload].deadline;
            newState.currentRow = action.payload;
            backUpState = {...newState};
            return newState;

        case 'CANCEL_UPDATE':
            newState = {...state};
            newState.triggerUpdate = false;
            newState.currentEntry = '';
            newState.currentRow = null;
            backUpState = {...newState};
            return newState;

        case 'GOT_DATA_FIRST_TIME':
            newState = {...state};
            newState.youtubeVideos = action.payload;
            return newState;

        case 'FAILED':
            newState = {...state};
            newState.apiFailed = true;
            return newState;

        default:
            return state;
    }
}



