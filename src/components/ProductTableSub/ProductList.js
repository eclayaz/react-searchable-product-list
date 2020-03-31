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
      if (this.props.inStock && !element.stocked) {
        return;
      }

      if (
        this.props.search &&
        !element.name.match(new RegExp(this.props.search, "i"))
      ) {
        return;
      }

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
