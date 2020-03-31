import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";

function SingleProduct(props) {
  return (
    <li>
      {props.item.name} | {props.item.price} | In stock :{" "}
      {props.item.stocked ? "yes" : "no"}
    </li>
  );
}

class ProductList extends React.Component {
  render() {
    let items = [];
    this.props.products.forEach(element => {
      items.push(<SingleProduct key={element.key.toString()} item={element} />);
    });

    return (
      <div>
        <ProductCategoryRow name={this.props.category} />
        <ul>{items}</ul>
      </div>
    );
  }
}

export default ProductList;
