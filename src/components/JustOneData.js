import React from 'react';

 const JustOneData = (props) => {
    
    //const dopage =props.data.age

    const {cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered} =props.data;    
    
    var strdate = registered.date.toString(); 

    var newdate = strdate.split("T");


    return (
            <React.Fragment>
              
                <tbody>
                    <tr className="table-info">        
                    <th scope="row"><p className="text-capitalize">{name.title} {name.first} {name.last}</p> </th>
                    <td><p className="text-capitalize">{gender} </p></td>
                    <td>{nat}</td>
                    <td>{cell}</td>
                    <td>{email}</td>
                    <td>{dob.age}</td>
                    <td><p className="text-capitalize">{location.city}</p></td>
                    <td>{login.username}</td>
                    <td>{login.password}</td>
                    <td> <img src={picture.medium} className="img-fluid" alt="Responsive image"></img> </td>
                    <td>{newdate[0]}</td>

                    </tr>   
                </tbody>
              

            </React.Fragment>
            
        )
}

 
export default JustOneData;