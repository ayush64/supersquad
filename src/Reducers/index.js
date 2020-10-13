import { combineReducers } from "redux";
import characters_json from "../Data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../Actions/index";

let character;
let hero;

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER: {
      character = state.filter((item) => item.id !== action.payload);
      return character;
    }
    case REMOVE_CHARACTER:
      character = [...state, createCharacter(action.payload)];
      return character;
    default:
      return state;
  }
}

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      hero = [...state, createCharacter(action.payload)];
      return hero;
    case REMOVE_CHARACTER:
      hero = state.filter((hero) => hero.id !== action.payload);
      return hero;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;
