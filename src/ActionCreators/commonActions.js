import Axios from "axios";

const API_KEY = 'AIzaSyDsUro2mrHwyIEP5SneV8x2ZC5JgXsR5Dg';
const searchTerm = 'Cricket';

//An example of API call
export function getDataFirstTime(){
    const request = () => Axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&maxResults=25&part=snippet&key=${API_KEY}`);

    return (dispatch) => {
        request().then(({data}) => {
            
            dispatch({
                type: 'GOT_DATA_FIRST_TIME',
                payload: data.items
            });
        }).catch(() => {
            dispatch({
                type: 'FAILED'
            });
        });
    }
}

export function addRow(data){
    return {
        type:'ADD_ROW',
    }
}

export function selectionChangeADD(data){
    return{
        type:'SELECTION_CHANGE_ADD',
        payload:data
    }
}
export function rowChangeADD(data){
    return{
        type:'ROW_CHANGE_ADD',
        payload:data
    }
}

export function selectionChange(data){
    return{
        type:'SELECTION_CHANGE',
        payload:data
    }
}

export function searchRow(data){
    
    return {
        type:'SEARCH_ROW',
        payload:data
    }
}

export function searchDate(data){
    return{
        type:'SEARCH_DATE',
        payload:data
    }
}

export function setCurrentEntry(data){
    return {
        type: 'SET_CURRENT_ENTRY',
        payload: data
    }
}

export function setCurrentDate(data){
    return{
        type:'SET_CURRENT_DATE',
        payload:data
    }
}

export function deleteRow(data){
    
    return{
        type:'DELETE_ROW',
        payload:data
    }
}

export function updateRow(data){
    return{
        type:'UPDATE_ROW',
        payload:data
    }
}


export function cancelUpdate(){
    return{
        type:'CANCEL_UPDATE'
    }
}
//https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&maxResults=25&part=snippet&key=${API_KEY}
//AIzaSyDsUro2mrHwyIEP5SneV8x2ZC5JgXsR5Dg