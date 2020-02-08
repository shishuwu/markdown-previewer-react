import React from 'react';

// css - 有先后顺序
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// css - end 

import marked from 'marked';

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '# hello world \n ## hello 2 \n> note \n>> note2 \n\n [link](http://github.com/shishuwu) \n *italic* **bold text** \n\n ``Use `code` in your Markdown file.`` \n ``` inline ```\n ![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUkdXeYPKUxlhVh2WWCxRYdM6VRsR8sV8rfPpLlgUbuIq6kpfI) \n\n `block` \n\n - item1 \n -item2 \n'
    };
  }

  toPreview(value) {
    var rawMarkup = marked(value, { sanitize: true });
    return { __html: rawMarkup };
  }

  updateMdStateValue(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <textarea id="editor" type="text" className="md-input" value={this.state.value} onChange={this.updateMdStateValue.bind(this)}></textarea>
        </div>
        <div className="col-md-6">
          <div id="preview" className="md-preview" dangerouslySetInnerHTML={this.toPreview(this.state.value)}>
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
