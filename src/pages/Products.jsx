import { React, CSSProperties } from "react";
import useFetch from "../custom-hooks/useFetch";
import { PacmanLoader } from "react-spinners";
import ProductsSection from "../molecules/ProductsSection";
import ProductCard from "../atoms/ProductCard";
import { Box } from "@mui/material";
import "../styles/products.css";
import importantData from "../assets/prods.json";

const url = "https://jsonplaceholder.typicode.com/posts/";

function Products() {

  //загрузочный бар
  const { data: productsData, loading } = useFetch(url);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <PacmanLoader
        color="#36d7b7"
        size={50}
        speedMultiplier={2}
        />
      </div>
    );
  //конец загрузочного бара

  console.log(importantData)
  const products = importantData?.map((item, id) => {
    return (
      <ProductCard
        key={id}
        title={item.title}
        img={item.productImage?.data?.attributes?.url}
        body={item.body}
        price={item.productPrice}
        id={item.id}
        rating={item.rating}
      />
    );
  });

  return (
    <Box className="page-container">
      <h1 className="section-title products-title">Каталог товаров</h1>
      <ProductsSection cards={products} />
    </Box>
  );
}

export default Products;
