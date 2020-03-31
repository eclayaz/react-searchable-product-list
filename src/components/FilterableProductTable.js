import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <h2>Product List</h2>
        <SearchBar />
        <br /> <br />
        <ProductTable productList={this.props.productList} />
      </div>
    );
  }
}

export default FilterableProductTable;
