import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config';
import Loading from '../../components/Loading';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const DonorsAdmin = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`donors`).then((res) => {
      setDonors(res.data.data);
    }).catch((err) => console.log(err)).finally(() => setLoading(false));
  }, [reload])


  let handleDelete = (id) => {
    setLoading(true);
    axiosInstance.delete(`donors/${id}`).then(() =>
      setReload(!reload)
    ).catch((err) => console.log(err)).finally(() => setLoading(false));
  }


  let exportDonor = () => {
    setLoading(true);
    axiosInstance.get(`export-donor`).then((res) => {
      // console.log(res.data)
      let apiData = res.data;
      apiData = apiData.split('\n');

      let dataAoa = [];

      apiData.map((e) => {
        dataAoa.push(e.split(','));
      })

      console.log(dataAoa);


      const worksheet = XLSX.utils.aoa_to_sheet(dataAoa);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, 'donors.xlsx');
    }
    ).catch((err) => console.log(err)).finally(() => setLoading(false));
  }
  return (
    <div className="content-wrapper">

      <div className="container-fluid">

        <div className="heading-area">
          <h1 className="page-title">Donors</h1>
          <div className="action-area">
            <button className='px-5 my-4 btn btn-success' onClick={() => exportDonor()}>Export</button>
          </div>
        </div>

        {
          loading && <Loading />
        }

        {
          !loading && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Donor Name</td>
                      <td>Blood Group</td>
                      <td>Contact Number</td>
                      <td>Email</td>
                      <td>Gender</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      donors?.map((e) => {
                        return (
                          <tr key={e.id}>
                            <td>{e?.attributes?.name}</td>
                            <td>{e?.attributes?.blood_group}</td>
                            <td>{e?.attributes?.mobile_number}</td>
                            <td>{e?.attributes?.email}</td>
                            <td>{e?.attributes?.gender}</td>
                            <td className='d-flex gap-3'>
                              <i className="bi bi-trash3 text-danger" onClick={() => handleDelete(e.id)}></i>
                              <i className={`bi bi-pencil-square`}></i>

                            </td>
                          </tr>
                        )
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
            </>
          )}

      </div>


    </div>
  )
}

export default DonorsAdmin