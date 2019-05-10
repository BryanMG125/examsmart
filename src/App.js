import React from 'react';
import Buscador from './components/Buscador';

function App() {
  return (  
    <div className="app container">
     <div className="jumbotron">
        <h1 className="flex-row">React Table</h1>
        <Buscador/>
     </div>
    </div>
  );
}

export default App;
