import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deletedata, selectcontact } from '../contactSlicer';
export default function Manage_contact() {
    const redirect = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        dispatch(selectcontact(`http://localhost:3000/contact`));
    }

    const deletecontact = (id) => {
        dispatch(deletedata(`http://localhost:3000/contact/${id}`));
        toast.success(`Deleted successfully`);
        fetch();
    }

    const { allcontact } = useSelector((state) => state.contact);
    return (
        <div className='container p-5'>
            <div className="float-end"><Link to="/Add_contact" className="btn btn-success"><i class="fa-solid fa-arrow-left me-2"></i>Back</Link></div>
            <div className="px-5">
                <h1 className="text-center">Manage contact</h1>
                <table className="table" border="5px solid black">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">message</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allcontact.map((value) => {
                                return (
                                    <tr>
                                        <td scope="col">{value.id}</td>
                                        <td scope="col">{value.name}</td>
                                        <td scope="col">{value.email}</td>
                                        <td scope="col">{value.message}</td>
                                        <td scope="col">
                                            <button className='btn btn-primary' onClick={() => { redirect('/EditContact/' + value.id) }}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => { deletecontact(value.id) }}>Remove</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>


    )
}

