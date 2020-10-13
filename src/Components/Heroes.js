import React from "react";
import { connect } from "react-redux";
import { removeCharacter } from "../Actions";

class Heroes extends React.Component {
  render() {
    return (
      <div>
        <h4>Heroes</h4>
        <ul>
          {this.props.heroes.map((character) => {
            return (
              <li key={character.id}>
                <div>{character.name}</div>
                <div onClick={() => this.props.removeCharacter(character.id)}>
                  -
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
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, { removeCharacter })(Heroes);
