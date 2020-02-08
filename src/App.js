import React from 'react';
import './App.css';
import 'bootstrap';

class Markdown extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>markeddown</div>);
  }
}


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2>Markdown Previewer</h2>
        </div>
      </div>
      <Markdown />
    </div>
  );
}

export default App;
