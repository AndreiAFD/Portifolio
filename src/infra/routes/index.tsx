import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "../../presentation/screens/AboutMe";
import { Contact } from "../../presentation/screens/Contact";
import { Portifolio } from "../../presentation/screens/Portifolio";
import { RoutePaths } from "./paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.about} element={<AboutMe />} />
      <Route path={RoutePaths.portifolio} element={<Portifolio />} />
      <Route path={RoutePaths.contact} element={<Contact />} />
    </Routes>
  );
};
