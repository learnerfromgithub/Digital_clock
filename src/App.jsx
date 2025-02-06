import React, { useState, useEffect } from 'react';

function App() {
  const [curTime, setCurTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Digital Clock</h2>
      <h1 style={styles.clock}>{curTime}</h1>
    </div>
  );
}

// CSS Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#fff',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  clock: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
  },
};

export default App;
