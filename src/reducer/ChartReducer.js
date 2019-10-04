let DATA_TABLE_USER = []

export default (state = {DATA_TABLE_USER}, action) => {
    switch(action.type){
        case "GET_DATA_TABLE_USER": 
          return {...state, DATA_TABLE_USER: action.playload}
        default: 
          return state
    }
}