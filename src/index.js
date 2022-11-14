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

import { PersistantCough } from './components/medicines/Respiratory/PersistantCough';
import { Wheeze } from './components/medicines/Respiratory/Wheeze';
import { MucusProduction } from './components/medicines/Respiratory/MucusProduction';
import { ChestCongestion } from './components/medicines/Respiratory/ChestCongestion';

import { Breath } from './components/medicines/Cardiovascular/Breath';
import { ChestPain } from './components/medicines/Cardiovascular/ChestPain';
import { ChestTightness } from './components/medicines/Cardiovascular/ChestTightness';
import { NeckPain } from './components/medicines/Cardiovascular/NeckPain';

import { Bloating } from './components/medicines/Digestive/Bloating';
import { Constipation } from './components/medicines/Digestive/Constipation';
import { Diarrhea } from './components/medicines/Digestive/Diarrhea';
import { Heartburn } from './components/medicines/Digestive/Heartburn';
import { Nausea } from './components/medicines/Digestive/Nausea';

import { Cramps } from './components/medicines/Muscular/Cramps';
import { Tingling } from './components/medicines/Muscular/Tingling';

import { Loss } from './components/medicines/Nervous/Loss';
import { PersistantHeadache } from './components/medicines/Nervous/PersistantHeadache';
import { RadiatePain } from './components/medicines/Nervous/RadiatePain';

import { MusclePain } from './components/medicines/Skeletal/MusclePain';
import { PainfulJoints } from './components/medicines/Skeletal/PainfulJoints';
import { Rashes } from './components/medicines/Skeletal/Rashes';

import { Burning } from './components/medicines/Urinary/Burning';
import { PelvicPain } from './components/medicines/Urinary/PelvicPain'
import { Smell } from './components/medicines/Urinary/Smell'
import { Urge } from './components/medicines/Urinary/Urge'

import skeletalPhoto from './images/Skeletal.png';
import muscularPhoto from './images/Muscular.png';
import nervousPhoto from './images/Nervous.png';
import cardioPhoto from './images/Cardiovascular.png';
import respPhoto from './images/Respiratory.png';
import digestPhoto from './images/Digestive.png';
import urinaryPhoto from './images/Urinary.png';

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
]

const medicineData = [
  { name: "PersistantCough", element: <PersistantCough /> },
  { name: "Wheeze", element: <Wheeze /> },
  { name: "MucusProduction", element: <MucusProduction /> },
  { name: "ChestCongestion", element: <ChestCongestion /> },
  { name: "Breath", element: <Breath /> },
  { name: "ChestPain", element: <ChestPain /> },
  { name: "ChestTightness", element: <ChestTightness />},
  { name: "NeckPain", element: <NeckPain /> },
  { name: "Bloating", element: <Bloating /> },
  { name: "Constipation", element: <Constipation /> },
  { name: "Diarrhea", element: <Diarrhea /> },
  { name: "Heartburn", element: <Heartburn /> },
  { name: "Cramps", element: <Cramps /> },
  { name: "Tingling", element: <Tingling />},
  { name: "Loss", element: <Loss /> },
  { name: "PersistantHeadache", element: <PersistantHeadache /> },
  { name: "RadiatePain", element: <RadiatePain />},
  { name: "MusclePain", element: <MusclePain /> },
  { name: "PainfulJoints", element: <PainfulJoints /> },
  { name: "Rashes", element: <Rashes /> },
  { name: "Burning", element: <Burning /> },
  { name: "PelvicPain", element: <PelvicPain /> },
  { name: "Smell", element: <Smell /> },
  { name: "Urge", element: <Urge /> },
  { name: "Nausea", element: <Nausea />}
]

const systemRouteList = bodySystemsData.map((system) => (
  <Route path={system.name} element={system.element} />
));

const medicineRouteList = medicineData.map((medicine) => (
  <Route path={`/${medicine.name}`} element={medicine.element} />
));

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App bodySystemsData={bodySystemsData} />} />
      {systemRouteList}
      {medicineRouteList}
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);