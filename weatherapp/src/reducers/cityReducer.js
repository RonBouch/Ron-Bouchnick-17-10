const initialState={
    fetched:false,
    cities:[],
    error:null,
}
const cityReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_CITY':
        return {
            ...state,
            fetched:true,
            ...action.payload}
           case 'FETCH_CITY_REJECTED':
           return {...state,error:action.payload}
          
           default :
           return state;
    }
};
export default cityReducer;