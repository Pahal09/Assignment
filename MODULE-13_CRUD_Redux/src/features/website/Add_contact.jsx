import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { insert } from '../userSlicer';

export default function Add_contact() {

    const { name } = useSelector((state) => state.user)
    const { age } = useSelector((state) => state.contact)
    const dispatch = useDispatch();

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        message: "" 
    });
    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
        if (formvalue.msg == "" || formvalue.message == null) {
            toast.error('msg Field is required !');
            return result = false;
        }

        return result;
    }
    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert(`http://localhost:3000/contact`, formvalue));
            setFormvalue({ ...formvalue, name: "", email: "", message: "" });
            toast.success('submitted successfully');
            return false;
        }
    }

    return (
        <div>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <h1>{name} {age}</h1>
                        <div className="col-sm-12">
                            <h2 className='text-center'>Add Contact</h2>

                            <br /><br />
                            <form method="post">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Name:</label>
                                    <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="email" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">Message:</label>
                                    <textarea className="form-control" name="message" value={formvalue.message} onChange={changehandel}></textarea>
                                </div>

                                <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
