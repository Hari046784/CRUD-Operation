import axios from "axios";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadUser = () => {
    const [apidata, setApiData] = useState([]);
    const navigate = useNavigate();




    const callGetApi = async () => {
        const response = await axios.get('https://63b688da58084a7af3b4fc1d.mockapi.io/users');
        // console.log('Response:',response);
        setApiData(response.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`https://63b688da58084a7af3b4fc1d.mockapi.io/users/${id}`)
        callGetApi();    
    }

    const updateUser = ({id, categories, name, age, department, mobile, email}) => {
        localStorage.setItem('id', id);
        localStorage.setItem('categories', categories);
        localStorage.setItem('name', name);
        localStorage.setItem('age',age);
        localStorage.setItem('department', department);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('email',email);
        navigate("/update");
    };
    // console.log('UpdateUser:',updateUser);


    useEffect(()=>{
        callGetApi();
    },[]);

    return(
        <>
            <div className="center">
                <h4>To Read and Delete User data</h4>
            </div>
            <Table responsive="sm" className="container">
                <thead>
                    <tr>
                        <th>SI.No</th>
                        <th>Categories</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Mobile</th>
                        <th>Email address</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apidata.map(values => (
                            <tr key={values.id}>
                                <td>{values.id}</td>
                                <td>{values.categories}</td>
                                <td>{values.name}</td>
                                <td>{values.age}</td>
                                <td>{values.department}</td>
                                <td>{values.mobile}</td>
                                <td>{values.email}</td>
                                <td><Button onClick={() => updateUser(values)} variant="warning">Update</Button></td>
                                <td><Button onClick={() => deleteUser(values.id)} variant="danger">Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ReadUser;