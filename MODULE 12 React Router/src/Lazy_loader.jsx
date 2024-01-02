import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Lazy_loader() {
    useEffect(() => {
        fetch()
    }, [])
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setData(res.data);
    }
    // fetching the data



    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row p-5">
                        <div className="col-md-12">
                            <h1 className="page-subhead-line text-center text-uppercase">
                                fetching data through API using Lazy loader
                            </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover text-capitalize">
                                            <thead>
                                                <tr>
                                                    <th>id</th>
                                                    <th>postId</th>
                                                    <th>name</th>
                                                    <th>email</th>
                                                    <th>body</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, entarr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.postId}</td>
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.body}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* End  Kitchen Sink */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lazy_loader;
