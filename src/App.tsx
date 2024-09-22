import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

interface AppConfig {
  firstName: string;
  lastName: string;
  iconPath: string;
}


function App() {
  const [appConfig, setAppConfig] = useState<AppConfig[]>([]);

  useEffect(() => {
    fetch("/config.json")
      .then((response) => response.json())
      .then((data) => {setAppConfig(data)})
      .catch((error) => console.error("Error loading config:", error));
  }, []);
  
  return (
    <div className={styles.main}>
      <div className={styles.cardHolder}>
        {appConfig.map((config, index) => (<div className={styles.card}>
          <img src={config.iconPath} alt="icon" className={styles.icon} />
          {config.firstName} {config.lastName}
        </div>))}
      </div>
    </div>
  );
}

export default App;
