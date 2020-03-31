import React from "react";

class SearchBar extends React.Component {
  handleInStockChange = e => {
    this.props.handleInStock();
  };

  handleSearchChange = e => {
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.search}
          onChange={this.handleSearchChange}
        />
        <br />
        <input
          type="checkbox"
          checked={this.props.inStock}
          onChange={this.handleInStockChange}
        />
        <span>Only show products in stock</span>
      </div>
    );
  }
}

export default SearchBar;
