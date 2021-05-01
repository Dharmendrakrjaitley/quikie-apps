import React, { useState, useEffect } from 'react';
const axios = require('axios');


const Home = () => {

    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        //console.log(result.data);
        setUser(result.data.reverse());
    }


    const saveData = async (id) => {
        var user1 = users.filter((user) => {
            return user.id === id;
        }).map((user) => {
            return { 'id': user.id, 'name': user.name, 'username': user.username, 'email': user.email };
        })

        //    var user2=JSON.stringify(user1);
        //    var user3=JSON.parse(user2);
        saveIntoDatabase(user1);


    }

    const saveIntoDatabase = async (user) => {
        await axios.post('http://localhost:5000/user/save', user[0])
            .then(function (response) {
                console.log(response);
            });
        console.log(user[0]);
    }

    return (
        <div className="container">
            <div className="display-4">All Students</div>
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
                                <button className="btn btn-primary" onClick={() => saveData(user.id)} >Save Data</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Home;