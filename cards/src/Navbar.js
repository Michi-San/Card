import React from 'react';
import './styles.css';

export default function Navbar({ selectedLanguage, setSelectedLanguage }) {
  function changeLanguage(selectedLanguage) {
    setSelectedLanguage(selectedLanguage);
  }

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedLanguage}</button>
      <div className="dropdown-content">
        <a onClick={() => changeLanguage('DE')}>DE</a>
        <a onClick={() => changeLanguage('ENG')}>ENG</a>
      </div>
    </div>
  );
}
