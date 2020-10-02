import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import {FirstName, LastName} from '../../App';


const Home = () => {
    const [users, setUser] = useState([]);    
    
  //  const firstname = useContext(FirstName);
    //const lastname = useContext(LastName);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());        
    };

    const deleteUser = async id => {
        await axios.delete("http://localhost:3003/users/"+id);
        loadUsers();          
    };
    

    return (
        
        <div className="container">
            
      
        <div className="row">
        
            {/* My name is : {firstname}{lastname} */}
        </div>
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            <th scope="col">website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td><Link className="btn btn-primary mr-2" to={`/users/ViewUser/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/users/EditUser/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger mr-2" onClick={()=> deleteUser(user.id)}>Delete</Link>
                                        </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;    
