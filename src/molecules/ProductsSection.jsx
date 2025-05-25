import React from "react";

const ProductsSection = (props) => {

  return (
    <section className="products-section">
      <div className="container">
        <div className="cards-container">
          {props?.cards}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;