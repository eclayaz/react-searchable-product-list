import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <br />
        <input type="checkbox" />
        <span>Only show products in stock</span>
      </div>
    );
  }
}

export default SearchBar;
