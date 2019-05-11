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
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Cellphone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Location</th>
                            <th scope="col">Login</th>
                            <th scope="col">Password</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Registred</th>
                            
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
                   
            </React.Fragment>
        );
    }
}
 
export default DataResult;