import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { insert } from '../userSlicer';

export default function Add_user() {
    const dispatch = useDispatch()
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password:""
    });
    const changehandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
        //console.log(formvalue);
    }
    const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
            toast.error('Name Field is required !');
            return result = false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            toast.error('Email Field is required !');
            return result = false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            toast.error('password Field is required !');
            return result = false;
        }

        return result;
    }
    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert(`http://localhost:3000/user`, formvalue));
            setFormvalue({ ...formvalue, name: "", email: "", password: "" });
            toast.success('submitted successfully');
            return false;
        }
    }

    return (
        <div>
            <div className='px-5'>
                <div className="container p-5">
                    <h1 className="text-center">Add Users</h1>
                    <form className=" p-5">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
                            <input type="text" className="form-control" name="name" onChange={changehandel} value={formvalue.name} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" onChange={changehandel} value={formvalue.email}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" name="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' onChange={changehandel} value={formvalue.password}/>
                        </div>

                        <button className="btn btn-primary" onClick={submithandel}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )

}