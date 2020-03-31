import React from "react";
import ProductList from "./ProductTableSub/ProductList";

class ProductTable extends React.Component {
  render() {
    const rows = [];

    this.props.productList.forEach(item => {
      rows.push(
        <ProductList
          key={item.category}
          category={item.category}
          products={item.items}
          inStock={this.props.inStock}
          search={this.props.search}
        />
      );
    });

    return (
      <div>
        Name | Price
        {rows}
      </div>
    );
  }
}
export default ProductTable;
