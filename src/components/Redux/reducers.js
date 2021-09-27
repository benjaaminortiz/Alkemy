import { ADD_HERO, ALL_HEROES, DELETE_HERO } from "./constants";

const initialState = {
    heroes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ALL_HEROES:
            return {
                ...state,
                heroes: action.payload
            };
        case ADD_HERO:
            return {
                heroes: [...state.heroes, action.payload]
            };
        case DELETE_HERO:
            return {
                heroes: state.heroes.filter(f => f !== action.payload)
            };
        default:
            return state;
    }
}