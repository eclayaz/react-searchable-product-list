import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStock: false,
      search: ""
    };
  }

  handleInStock = () => {
    this.setState({ inStock: !this.state.inStock });
  };

  handleSearch = val => {
    this.setState({ search: val });
  };

  render() {
    return (
      <div>
        <h2>Product List</h2>
        <SearchBar
          inStock={this.state.inStock}
          search={this.state.search}
          handleInStock={this.handleInStock}
          handleSearch={this.handleSearch}
        />
        <br /> <br />
        <ProductTable
          productList={this.props.productList}
          inStock={this.state.inStock}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
