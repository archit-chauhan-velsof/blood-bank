import React from 'react'
import { Link } from 'react-router-dom'

const DonorsAdmin = () => {
  return (
    <div className="content-wrapper">

      <div className="container-fluid">

        <div className="heading-area">
          <h1 className="page-title">Donors</h1>
          <div className="action-area">
            <button className='px-5 my-4 btn btn-success'>Export</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <td>Donor Name</td>
                <td>Blood Group</td>
                <td>Contact Number</td>
                <td>State</td>
                <td>City</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rajesh Arora</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td className='d-flex gap-3'>
                  <i class="bi bi-trash3 text-danger"></i>
                  <i class="bi bi-pencil-square"></i>
                </td>
              </tr>
              <tr>
                <td>Kapil Rawat</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td className='d-flex gap-3'>
                  <i class="bi bi-trash3 text-danger"></i>
                  <i class="bi bi-pencil-square"></i>
                </td>
              </tr>
              <tr>
                <td>Raj Sinha</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td>
                  <Link to="#" className="img-icon">
                    <img src="assets/images/question-icon.svg" alt="User" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Vineet Singh</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td>
                  <Link to="#" className="img-icon">
                    <img src="assets/images/question-icon.svg" alt="User" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Nikhil</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td>
                  <Link to="#" className="img-icon">
                    <img src="assets/images/question-icon.svg" alt="User" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Raj Kishore</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td>
                  <Link to="#" className="img-icon">
                    <img src="assets/images/question-icon.svg" alt="User" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Shivam</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td>
                  <Link to="#" className="img-icon">
                    <img src="assets/images/question-icon.svg" alt="User" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Prashant</td>
                <td>O+</td>
                <td>9876543210</td>
                <td>Uttar Pradesh</td>
                <td>Noida</td>
                <td>E 23, Sector 63 Rd, E Block, Sector 63, Noida</td>
                <td>
                  <Link to="#" className="img-icon">
                    <img src="assets/images/question-icon.svg" alt="User" />
                  </Link>
                </td>
              </tr>
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


    </div>
  )
}

export default DonorsAdmin