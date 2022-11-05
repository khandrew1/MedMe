import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Skeletal } from "./components/systems/Skeletal";
import { Muscular } from "./components/systems/Muscular";
import { Nervous } from "./components/systems/Nervous";
import { Cardiovascular } from "./components/systems/Cardiovascular";
import { Respiratory } from "./components/systems/Respiratory";
import { Digestive } from "./components/systems/Digestive";
import { Urinary } from "./components/systems/Urinary";
import { Reproductive } from './components/systems/Reproductive';

import skeletalPhoto from './images/Skeletal.png';
import muscularPhoto from './images/Muscular.png';
import nervousPhoto from './images/Nervous.png';
import cardioPhoto from './images/Cardiovascular.png';
import respPhoto from './images/Respiratory.png';
import digestPhoto from './images/Digestive.png';
import urinaryPhoto from './images/Urinary.png';
import reprodPhoto from './images/MaleReproductive.png'

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const bodySystemsData = [
  { name: "Skeletal", element: <Skeletal />, photo: skeletalPhoto },
  { name: "Muscular", element: <Muscular />, photo: muscularPhoto },
  { name: "Nervous", element: <Nervous />, photo: nervousPhoto },
  { name: "Cardiovascular", element: <Cardiovascular />, photo: cardioPhoto },
  { name: "Respiratory", element: <Respiratory />, photo: respPhoto },
  { name: "Digestive", element: <Digestive />, photo: digestPhoto },
  { name: "Urinary", element: <Urinary />, photo: urinaryPhoto },
  { name: "Reproductive", element: <Reproductive />, photo: reprodPhoto },
]

const routeList = bodySystemsData.map((system) => (
  <Route path={system.name} element={system.element} />
));

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App bodySystemsData={bodySystemsData} />} />
      {routeList}
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);