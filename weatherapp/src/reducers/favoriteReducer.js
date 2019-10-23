const initialState={
    favorite:[],
    error:null,
}
const favoriteReducer = (state=initialState,action)=>{
    console.log("Actionnn Type  ",state)
    switch(action.type){
        case 'ADD_FAVORITE':
        console.log("Actionnn Type  ",action.payload.City)

            return{
                ...state,
                favorite:state.favorite.concat({
                    key:action.payload.Key,
                    city:action.payload.City,
                    temp:action.payload.Temp,
                    wText:action.payload.WText
                    
                })
            }

        case 'DEL_FAVORITE':
        return{
            ...state,
            favorite:state.favorite.filter(f=>f.key!==action.payload.Key)
        }

    }
    return state;

};
export default favoriteReducer;