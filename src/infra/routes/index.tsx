import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "../../presentation/screens/AboutMe";
import { Contact } from "../../presentation/screens/Contact";
import { Portifolio } from "../../presentation/screens/Portifolio";
import { routePaths } from "./paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
