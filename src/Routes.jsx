// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CharactersListPage } from "./pages/personagensSection/CharactersListPage";
import { CharactersMainPage } from "./pages/personagensSection/CharactersMainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/personagens",
        element: <CharactersListPage />,
    },
    {
        path: "/personagemEscolhido",
        element: <CharactersMainPage />,
    },
    {
        path: "/resumo",
        element: <CharactersListPage />,
    },
    {
        path: "/dragoes",
        element: <CharactersListPage />,
    },
]);