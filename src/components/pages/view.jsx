import React, { useState, useEffect } from 'react';
const axios = require('axios');



const View = () => {

    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUser();
    }, [])


    const loadUser = async () => {
        const result = await axios.get("http://localhost:5000/user/");
        //console.log(result.data);
        setUser(result.data.reverse());
    }

    const deleteData= async (id)=>{
        await axios.delete(`http://localhost:5000/user/delete/${id}`);
        loadUser();
    }

    return (

        <div className="container">
            <h1 className="display-4">Saved Student Data</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <td scope="row">{index + 1}</td>
                            <td scope="row">{user.name}</td>
                            <td scope="row">{user.username}</td>
                            <td scope="row">{user.email}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => deleteData(user.id)} >Delete Data</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}


export default View;