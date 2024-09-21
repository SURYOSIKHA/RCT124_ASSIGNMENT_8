import React from 'react';
import axios from 'axios';

export function Users() {


    const [users, setUsers] = React.useState([]);

    async function handleClick(event) {
        try{
            const response=await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            console.log(response.data);
            
        }
        catch(error){
            console.error(error);
        }
    }

  return (
    <div>
      <button onClick={handleClick}>Show List of Users...</button>
        <ul id="userList">
            {
                users.map((ele,index)=>{
                    return(
                        <li key={index}>
                            <p>Name:{ele.name}</p>
                            <p>Username: {ele.address.city}</p>
                            <p>Email: {ele.email}</p>
                            <p>Phone: {ele.phone}</p>

                            </li>
                       
                    )
                })
            }
        </ul> 
    </div>
  );
}

