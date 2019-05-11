import React, { Component } from 'react';
import Searcher from './components/Searcher';
import DataResult from './components/DataResult'

class App extends Component {
  
  state ={
    termn: '',
    dataApi: []
  }
  
  consultApi = () =>{
    //const termn = this.state.termn;
    //const url = 'https://randomuser.me/api?results={termn}';
    const url = 'https://randomuser.me/api?results=20';
    console.log(url);

    fetch(url)
      .then(respont => respont.json() )
      .then(result => this.setState({ dataApi : result.results }) )

  }

  searchForData = (termn) => {
    this.setState({
      termn 
    },() => {
      this.consultApi();
    })
    
    console.log(termn);
  } 


render(){ 
  return (  
    <div className="app container">
      <div className="jumbotron">
        <h1 className="flex-row">React Table</h1>
        <Searcher
        searchForData={this.searchForData}
        
        /> 
      </div>
        
      <DataResult
          dataApi = {this.state.dataApi}
        
        />   
    </div>
    );
  }
}

export default App;
