import React, { Component } from "react";
import Tile from "./tile";

class Tiles extends Component {
  state = {
    tiles: [
      { id: 1, value: 0, flip: false },
      { id: 2, value: 10, flip: false },
      { id: 3, value: 20, flip: false },
      { id: 4, value: 0, flip: false },
      { id: 5, value: 0, flip: false },
      { id: 6, value: 0, flip: false },
      { id: 7, value: 0, flip: false },
      { id: 8, value: 0, flip: false },
      { id: 9, value: 0, flip: false }
    ],
    match: false
  };

  handleMatch = tileId => {
    console.log("Match Event Handler Called", tileId);

    if (tileId === 3) {
      let newState = Object.assign({}, this.state);
      newState.tiles[2].flip = true;
      this.setState(newState);
      console.log("Tile3", this.state);
    }

    if (tileId === 4) {
      let newState = Object.assign({}, this.state);
      newState.tiles[3].flip = true;
      this.setState(newState);
      console.log("Tile4", this.state);
    }

    console.log(this.state.tiles[2]);
    console.log(this.state.tiles[3]);
    this.state.tiles[2].flip && this.state.tiles[3].flip
      ? console.log("tootaloo")
      : console.log("no match");
  };

  render() {
    return (
      <div>
        {this.state.tiles.map(tile => (
          <Tile
            key={tile.id}
            id={tile.id}
            value={tile.value}
            selected={true}
            funny={"test"}
            onMatch={this.handleMatch}
          >
            <h1>TESTING THE {tile.id}</h1>
          </Tile>
        ))}
      </div>
    );
  }
}

export default Tiles;
