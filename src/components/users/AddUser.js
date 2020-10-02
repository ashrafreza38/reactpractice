import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddUser = () => {

    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
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
                        <button className="btn btn-primary btn-block" type="submit">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUser
