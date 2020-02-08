import React from 'react';
import './App.css';
import 'bootstrap';
import marked from 'marked';

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '#hello world'
    };
  }

  rawMarkup(value) {
    var rawMarkup = marked(value, { sanitize: true });
    return { __html: rawMarkup };
  }

  updateMarkdown(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <textarea type="text" className="markdown-input" value={this.state.value} onChange={this.updateMarkdown.bind(this)}></textarea>
        </div>
        <div className="col-md-6">
          <div className="markdown-preview" dangerouslySetInnerHTML={this.rawMarkup(this.state.value)}>
          </div>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>Markdown Previewer</h1>
        </div>
      </div>
      <Markdown />
    </div>
  )
}

export default App;
