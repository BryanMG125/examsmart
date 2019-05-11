import React, { Component } from 'react'

class Searcher extends Component {
  

  searcherRef = React.createRef(); //Read values from inputs
  
  handleData = (e) => {
    e.preventDefault();  
    //console.log(this.searcherRef.current.value);
    
    //Take the value from the input
    const termn = this.searcherRef.current.value;
    
    //Send the value to the principal component
    this.props.searchForData(termn);

  }

  
  
  render() { 
    return ( 
        <form onSubmit={this.handleData} >
          <div className="row">
            <div className="form-group col-md-8">
              <input ref={this.searcherRef} type="text" className="form-control form-control-lg" placeholder="Buscar Registro" />
            </div>

            <div className="form-group col-md-4">
              <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
            </div>


          </div>
        </form>  
     );
  }
}
 
export default Searcher;
  

