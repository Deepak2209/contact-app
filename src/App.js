import React from 'react';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Contacts/>
        </div> 
      </div>
    </div>
  );
}

export default App;
