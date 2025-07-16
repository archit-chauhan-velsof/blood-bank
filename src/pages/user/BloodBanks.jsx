import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { axiosInstance } from '../../config';

const BloodBanks = () => {
    const [loading, setLoading] = useState(false);
    const [bloodBanks, setBloodBanks] = useState([]);
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`blood-banks`).then((res) => {
            setBloodBanks(res?.data?.data)
        }).catch((err) => console.log(err)).finally(()=>{

            setLoading(false);
        })
    }, [])


    return (
        <>

            <div className="content-wrapper">
                {loading ? <Loading /> : (

                    <div className="container-fluid">

                        <div className="heading-area">
                            <h1 className="page-title">Blood Banks</h1>
                            <div className="action-area">
                                <div className="item">
                                    <label htmlFor="state">State</label>
                                    <select name="state" id="state" className="form-select form-select-sm">
                                        <option value="">None Selected</option>
                                    </select>
                                </div>
                                <div className="item">
                                    <label htmlFor="city">City</label>
                                    <select name="city" id="city" className="form-select form-select-sm">
                                        <option value="">None Selected</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Blood Bank</td>
                                        <td>Contact Number</td>
                                        <td>City</td>
                                        <td>State</td>
                                        <td>Address</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bloodBanks?.map((e) => {
                                            return (
                                                <tr key={e.id}>
                                                    <td>{e?.attributes?.name}</td>
                                                    <td>{e?.attributes?.phone_number}</td>
                                                    <td>{e?.attributes?.city}</td>
                                                    <td>{e?.attributes?.state}</td>
                                                    <td>{e?.attributes?.address}</td>
                                                    <td>
                                                        <Link to="#" className="img-icon">
                                                            <img src="assets/images/question-icon.svg" alt="User" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>

                        <nav aria-label="Page navigation" className="pagination-nav">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link active" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>


                )}
            </div>

        </>
    )
}

export default BloodBanks