import $ from 'jquery';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    $('header').hide().fadeIn(1500);
  }, []);

  return (
    // Your JSX code here
  );
}

export default App;
