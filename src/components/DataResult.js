import React, { Component } from 'react';
import JustOneData from './JustOneData';

class DataResult extends Component {
    
    showData = () => {
        
        const dataApi = this.props.dataApi;
        
        //Experimental 
        if (dataApi.length === 0) return null;
        
        console.log(this.props.dataApi);

        return(
            <React.Fragment>
                <div className="">
                    
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    
                    {dataApi.map(data =>(
                        <JustOneData
                           
                            key= {data.login.uuid}
                            data={data}
                        />

                    ) ) }
                    </table>   
                 </div>   
            </React.Fragment>
        )
    } 
    

    render() { 
    
        return (  
            <React.Fragment>
                   {this.showData()}
                   <h1>HOLA</h1>
            </React.Fragment>
        );
    }
}
 
export default DataResult;