import React from "react";
import { useRouteError } from "react-router";
import '../styles/App.css'
import { Box, Container } from "@mui/material";


export default function ErrorBoundary() {
    const error = useRouteError();
    console.log(error)
    console.log("error logged")
    
    try {
        return (
            <Container>
                <h1>{error.status} {error.statusText}</h1>
                <h2>{error.error.message}</h2>
                <div>uwu</div>
            </Container>)
    }
    catch {
        return (
        <div>
            <h1>
                Внутренняя ошибка сервера. Пожалуйста, обратитесь в support@shoeshop.io
            </h1>
        </div>
        )
    }
}
  