import React from "react";

const ProductsSection = (props) => {

  return (
    <section className="products-section">
      <div className="container">
        <h1 className="section-title products-title">Каталог товаров</h1>
        <div className="cards-container">
          {props?.cards}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;