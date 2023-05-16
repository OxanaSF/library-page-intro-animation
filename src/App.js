import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import mainImg from './images/library-main.png';

const App = () => {
  const [showShading, setShowShading] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);
  const shadingControls = useAnimation();
  const contentControls = useAnimation();

  const handleButtonClick = () => {
    shadingControls.start({ opacity: 0 }).then(() => {
        setShowShading(false);
        setShowWebsite(true);
        contentControls.start({ opacity: 1 });
    });
  };

  useEffect(() => {
    if (!showShading) {
      contentControls.start({ opacity: 1 });
    }
  }, [showShading, contentControls]);

  return (
    <div className="app">
      {showShading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={shadingControls}
          transition={{ duration: 2 }}
          className="landing-page-image"
        >
          <button className="landing-page-button" onClick={handleButtonClick}>
            Enter Library
          </button>
        </motion.div>
      )}

      {showWebsite && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={contentControls}
          transition={{ duration: 1 }}
          className="landing-page-container"
        >
          <h1>Welcome to the Library</h1>
          <p>Explore our collection of books.</p>
        </motion.div>
      )}
    </div>
  );
};

export default App;
