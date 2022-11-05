import React from 'react';
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

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const bodySystemsData = [
  { name: "Skeletal", element: <Skeletal /> },
  { name: "Muscular", element: <Muscular /> },
  { name: "Nervous", element: <Nervous /> },
  { name: "Cardiovascular", element: <Cardiovascular /> },
  { name: "Respiratory", element: <Respiratory /> },
  { name: "Digestive", element: <Digestive /> },
  { name: "Urinary", element: <Urinary /> },
  { name: "Reproductive", element: <Reproductive /> },
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