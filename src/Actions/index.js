export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export function addCharactersById(id) {
  const action = {
    type: ADD_CHARACTER,
    payload: id,
  };

  return action;
}

export function removeCharacter(id) {
  const action = {
    type: REMOVE_CHARACTER,
    payload: id,
  };

  return action;
}
