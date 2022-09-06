import{
    LOAD_AUTOS,
    ORDER,
    FILTER
}from'../action/index'

const initialState={
    autos:[],
    order:'nada',
    filter:'todos'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_AUTOS:{
            return{
                ...state,
                autos:action.payload
            }
        }

        case ORDER:{
            
                return{
                    ...state,
                    order:action.payload
                } 
        
        }
        case FILTER:{
            return{
                ...state,
                filter:action.payload
            } 
    
        }
                    
            
                default:{
                    return state;
                }
                    ;
            }
}

export default rootReducer;