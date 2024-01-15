import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';


import { singlefetch, update } from '../userSlicer';
function EditContact() {
    const { name } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        message: ""
    });

    const { id } = useParams();

    useEffect(() => {
        fetch();
    }, []);

    const { singleuser } = useSelector((state) => state.user);
    const fetch = () => {
        dispatch(singlefetch(`http://localhost:3000/contact/${id}`));
        setFormvalue(singleuser);
    }


    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
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
    const redirect = useNavigate();
    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            await dispatch(update(`http://localhost:3000/contact/${id}`, formvalue));
            setFormvalue({ ...formvalue, name: "", email: "", message: "" });
            toast.success('changed suceesfully');
            return redirect('/Manage_contact');
        }
    }

    return (
        <div>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className='text-center'>Edit Contact</h2>

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

export default EditContact