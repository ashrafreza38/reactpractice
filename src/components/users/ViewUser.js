import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const ViewUser = ()=>{
    let history = useHistory();
    const {id} = useParams();
    
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
    const loadUser = async () => {               
        const userDetails = await axios.get("http://localhost:3003/users/"+id);
        setUser(userDetails.data);    
    }
    return(
        <div className="container">        
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">User Details</h2>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Name"
                            placeholder="Enter Name" readOnly="true" name="name" value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="userName"
                            placeholder="Enter username" readOnly="true" name="username" value={username}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Email"
                            placeholder="Enter Email" readOnly="true" name="email" value={email}

                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Phone"
                            placeholder="Enter Phone" readOnly="true" name="phone" value={phone}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Website"
                            placeholder="Enter Website" readOnly="true" name="website" value={website}
                        />
                    </div>
                    <div>
                    <Link className="btn btn-primary" to="/">
                    Back to Home
                    </Link>
                        {/* <button className="btn btn-primary btn-block" 
        type="submit">Add User</button> */}
                    </div>


                </form>

            </div>
        </div>
    );
}

export default ViewUser