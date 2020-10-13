import React from "react";
import { connect } from "react-redux";
import { addCharactersById } from "../Actions";

class Characters extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>CHARACTERS</h4>
        <ul>
          {this.props.characters.map((character) => {
            return (
              <li key={character.id}>
                <div>{character.name}</div>
                <div onClick={() => this.props.addCharactersById(character.id)}>
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    characters: state.characters,
  };
}
export default connect(mapStateToProps, { addCharactersById })(Characters);
