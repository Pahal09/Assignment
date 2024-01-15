import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { deletedata, selectcontact } from '../contactSlicer';
import { selectuser } from '../userSlicer';
export default function Manage_user() {
    const redirect = useNavigate()
    useEffect(() => {
        fetch()
    }, [])

    const { alluser } = useSelector((state) => state.user);


    const dispatch = useDispatch()
    const fetch = () => {
        dispatch(selectuser(`http://localhost:3000/user`));
    }

    const deletecontact = (id) => {
        dispatch(deletedata(`http://localhost:3000/user/${id}`));
        toast.success(`Deleted successfully`);
        fetch();
    }

    return (
        <>

            <div className='container p-5'>
                <div className="float-end"><Link to="/" className="btn btn-success"><i class="fa-solid fa-arrow-left me-2"></i>Back</Link></div>
                <div className="px-5">
                    <h1 className="text-center">Manage Users</h1>
                    <table className="table" border="5px solid black">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((value) => {
                                    return (
                                        <tr>
                                            <td scope="col">{value.name}</td>
                                            <td scope="col">{value.email}</td>
                                            <td scope="col">{value.password}</td>
                                            <td scope="col">
                                                <button className='btn btn-primary' onClick={() => { redirect('/EditData/' + value.id) }}>Edit</button>
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

        </>
    )
}
