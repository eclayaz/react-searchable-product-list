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
