import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mock_API } from "../URLData";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UpdateUser = () => {
    const [id, setId] = useState('');
    const [categories, setCategories] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [department, setDepartment] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const updateData = () => {
        Axios.put(Mock_API+"/"+ id, {id}, {id, categories, name, age, department, mobile, email});
        navigate('/read');   
    };
    // console.log('updateData:', updateData);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setCategories(localStorage.getItem('categories'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setDepartment(localStorage.getItem('department'));
        setMobile(localStorage.getItem('mobile'));
        setEmail(localStorage.getItem('email'));
    },[]);

    return(
        <>
            <div className="center">
                <h2>Update Users</h2>
            </div>
            <br/>
            <Form className="container form">
                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="category">Categories</Form.Label>
                    <Form.Control type="text" id="category" placeholder="Student or Teacher" value={categories} onChange={event => setCategories(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={event => setName(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" value={age} onChange={event => setAge(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="depart">Department</Form.Label>
                    <Form.Control type="select" id="depart" placeholder="EEE/CSE/IT/MECH" value={department} onChange={event => setDepartment(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="num" placeholder="Enter number" value={mobile} onChange={event => setMobile(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4" controlId="exampleForm.ControlInput1">
                    <Form.Label for="Emailinfo">Email address</Form.Label>
                    <Form.Control type="email" id="Emailinfo" placeholder="Enter Email" value={email} onChange={event => setEmail(event.target.value)} required/>
                </Form.Group>

                <Button variant="primary" onClick={updateData}>
                    Submit
                </Button><br/>

            </Form>
        </>
    );
};

export default UpdateUser;