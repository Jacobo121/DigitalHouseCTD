import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header";
import Info from './Info';
import { personalInformation } from './personalData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Info 
        name={personalInformation.personalData.name}
        lastname={personalInformation.personalData.lastname}
        nationality={personalInformation.personalData.nationality}
        age={personalInformation.personalData.age}
        occupation={personalInformation.personalData.occupation}
        avatar={personalInformation.personalData.avatar}
        bio={personalInformation.bio}
    />
  </React.StrictMode>
);


