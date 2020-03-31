import React from "react";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  const productList = [
    {
      category: "Sporting Goods",
      items: [
        { key: 1, price: "$49.99", stocked: true, name: "Football" },
        { key: 2, price: "$9.99", stocked: true, name: "Baseball" },
        { key: 3, price: "$29.99", stocked: false, name: "Basketball" }
      ]
    },
    {
      category: "Electronics",
      items: [
        { key: 1, price: "$99.99", stocked: true, name: "iPod Touch" },
        { key: 2, price: "$399.99", stocked: false, name: "iPhone 5" },
        { key: 3, price: "$199.99", stocked: true, name: "Nexus 7" }
      ]
    }
  ];

  return (
    <div className="App">
      <FilterableProductTable productList={productList} />
    </div>
  );
}

export default App;
