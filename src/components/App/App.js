import React from 'react';
import '../App/App.scss';
import { initialInput, initialSizeWindow, initialSelectElemState, initialBtnLeftChar, initialBtnRightChar } from './initialInputs.js'
//---------------------------------
import '../../../node_modules/marked/marked.min.js';
const marked = require("marked");
//---------------------------------
export let exportingInput;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      sizeWindow: 0,
      selectElemState: '',
      btnLeftChar: '',
      btnRightChar: '',
    }

    this.editorRef = React.createRef();
    this.previewRef = React.createRef();
    this.mainDivRef = React.createRef();
    this.comandBoxRef = React.createRef();
    this.appDivRef = React.createRef();

    this.handleChangeEditor = this.handleChangeEditor.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  componentDidMount() {
    //Initializing the state
    this.setState({
      input: initialInput,
      sizeWindow: initialSizeWindow,
      selectElemState: initialSelectElemState,
      btnLeftChar: initialBtnLeftChar,
      btnRightChar: initialBtnRightChar,
    });
  }
  componentDidUpdate() {
    //Changes when "sizeWindow" is updated.
    this.editorRef.current.setAttribute('style', 'flex-basis: ' + this.state.sizeWindow + '%');
    this.previewRef.current.setAttribute('style', 'flex-basis: ' + (100 - this.state.sizeWindow) + '%');

    if (Number(this.state.sizeWindow) === 0) {
      this.editorRef.current.setAttribute('style', 'display: none;');
      if (this.state.selectElemState === 'SBS') {
        this.mainDivRef.current.setAttribute('class', 'edgeCorrectionLeftSBS');
      }
    } else if (Number(this.state.sizeWindow) === 100) {
      this.previewRef.current.setAttribute('style', 'display: none;');
      if (this.state.selectElemState === 'SBS') {
        this.mainDivRef.current.setAttribute('class', 'edgeCorrectionRightSBS');
      }
    } else {
      this.mainDivRef.current.setAttribute('class', null);
    }

    //Changes when "selectElemState" is updated.
    if (this.state.selectElemState === 'SBS') {
      this.mainDivRef.current.setAttribute('style', 'flex-direction: row');
      this.editorRef.current.setAttribute('class', 'editorSBS');
      this.previewRef.current.setAttribute('class', 'previewSBS');
    } else if (this.state.selectElemState === 'TOEO') {
      this.mainDivRef.current.setAttribute('style', 'flex-direction: column');
      this.editorRef.current.setAttribute('class', 'editorTOEO');
      this.previewRef.current.setAttribute('class', 'previewTOEO');
    }
    exportingInput = this.state.input;
  }
  handleChangeEditor(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
  }
  handleChangeRange(e) {
    e.preventDefault();
    this.setState({
      sizeWindow: e.target.value,
    });
  }
  handleClickLeft() {
    this.setState({
      sizeWindow: 0,
    });
    this.previewRef.current.setAttribute('style', 'flex-basis: ' + 100 + '%');
    this.editorRef.current.setAttribute('style', 'display: none');
  }
  handleClickRight() {
    this.setState({
      sizeWindow: 100,
    });
    this.editorRef.current.setAttribute('style', 'flex-basis: ' + 100 + '%');
    this.previewRef.current.setAttribute('style', 'display: none');
  }
  handleChangeSelect(e) {
    e.preventDefault();
    if (e.target.value === 'SBS') {
      this.setState({
        selectElemState: e.target.value,
        btnLeftChar: '˂',
        btnRightChar: '˃',
      });
    } else if (e.target.value === 'TOEO') {
      this.setState({
        selectElemState: e.target.value,
        btnLeftChar: '˄',
        btnRightChar: '˅',
      });
    }
  }
  render() {
    return (
      <div id="appDiv" ref={this.appDivRef}>
        <header id="header">
          <h1 id="title">Markdown Previewer</h1>
          <h6 id="ass">Developed by ⚔ Júlio Faria</h6>
          <div id="comandBox" ref={this.comandBoxRef}>
            <select id="selector" value={this.state.selectElemState} onChange={this.handleChangeSelect}>
              <option value="SBS">Side by side</option>
              <option value="TOEO">Top of each other</option>
            </select>
            <button id="btn-left" onClick={this.handleClickLeft}>{this.state.btnLeftChar}</button>
            <input id="range" type="range" value={this.state.sizeWindow} onChange={this.handleChangeRange}></input>
            <button id="btn-right" onClick={this.handleClickRight}>{this.state.btnRightChar}</button>
          </div>
        </header>
        <main id="mainDiv" ref={this.mainDivRef}>
          <textarea id="editor" ref={this.editorRef} value={this.state.input} onChange={this.handleChangeEditor}></textarea>
          <div id="preview" ref={this.previewRef} dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}></div>
        </main>
        {/* The "comandBoxCloned" will show up only on smart phone screen resolution*/}
        <div id="comandBoxCloned">
          <select id="selector" value={this.state.selectElemState} onChange={this.handleChangeSelect}>
            <option value="SBS">Side by side</option>
            <option value="TOEO">Top of each other</option>
          </select>
          <button id="btn-left" onClick={this.handleClickLeft}>{this.state.btnLeftChar}</button>
          <input id="range" type="range" value={this.state.sizeWindow} onChange={this.handleChangeRange}></input>
          <button id="btn-right" onClick={this.handleClickRight}>{this.state.btnRightChar}</button>
        </div>
      </div>
    );
  }
}

export default App;
