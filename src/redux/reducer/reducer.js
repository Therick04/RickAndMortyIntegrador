import { ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "../actions/types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAV:
            const newAllCharacters = [...state.allCharacters, action.payload];
            return {...state, myFavorites: newAllCharacters, allCharacters: newAllCharacters};

        case REMOVE_FAV:
            const newFavs = state.allCharacters.filter(del => del.id !== action.payload)
            state.allCharacters = newFavs
            
            return {...state,myFavorites: newFavs}

        case FILTER:
            if(action.payload === 'all'){
                return {...state,myFavorites: state.allCharacters}
            } else {
                const filterCharacters = state.allCharacters.filter((gen) => (
                    gen.gender === action.payload
                    ))
    
                return {...state,myFavorites: filterCharacters}
            }
            
        case ORDER:
            if(action.payload === 'A'){
                const asc = state.allCharacters.sort((a,b) => a.id - b.id)
                return {...state,myFavorites: asc}
            } else {
                const desc = state.allCharacters.sort((a,b) => b.id - a.id)
                return {...state,myFavorites: desc}
            }

        default:
            return {...state}
    }
}

export default rootReducer