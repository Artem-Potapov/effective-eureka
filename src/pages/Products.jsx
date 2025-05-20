import { React, CSSProperties } from "react";
import useFetch from "../custom-hooks/useFetch";
import { PacmanLoader } from "react-spinners";
import ProductsSection from "../molecules/ProductsSection";
import ProductCard from "../atoms/ProductCard";
import { Box } from "@mui/material";

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

  console.log(productsData)
  const products = productsData?.map((item, id) => {
    return (
      <ProductCard
        key={id}
        title={item.title}
        img={"item.attributes?.productImage?.data?.attributes?.url"}
        body={item.body}
        price={"item.productPrice"}
        id={item.id}
      />
    );
  });

  return (
    <Box className="page-container">
      <ProductsSection cards={products} />
    </Box>
  );
}

export default Products;
