import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';



const EditUser = ()=>{

    let history = useHistory();
    const {id} = useParams();
    //alert(id);
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""        
    });

    useEffect(()=>{
        loadUser();    
            
        },[]);

    const {name, username, email, phone, website} = user;
    const onInputChange = e=>{
        setUser({...user, [e.target.name]:e.target.value});
    }

    const onSubmit = async e=>{        
        e.preventDefault();
        await axios.put("http://localhost:3003/users/"+id, user);
        history.push("/");
    }

    const loadUser = async () => {        
       // e.preventDefault();
        const userDetails = await axios.get("http://localhost:3003/users/"+id);
        setUser(userDetails.data);
        
    }


    return (
        
        <div className="container">

            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User Details</h2>
                <div className="text-right mb-2">
                <Link className="btn btn-primary" to="/">
                    Back to Home
                    </Link>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Name"
                            placeholder="Enter Name" name="name" value={name}
                            onChange={e => onInputChange(e)}

                        />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="userName"
                            placeholder="Enter username" name="username" value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="Email"
                            placeholder="Enter Email" name="email" value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Phone"
                            placeholder="Enter Phone" name="phone" value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Website"
                            placeholder="Enter Website" name="website" value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div>
                        <button className="btn btn-warning btn-block" type="submit">Update User</button>
                    </div>


                </form>

            </div>
        </div>
    );
}



export default EditUser
