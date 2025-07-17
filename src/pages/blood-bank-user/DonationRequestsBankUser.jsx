import { React, useEffect, useState } from "react";
import { axiosInstance } from "../../services/axiosInstance";

import Loading from "../../components/Loading";
import { exportExcel } from "../../utils/ExportExcel";
import Pagination from "../../utils/pagination";

const DonationRequestsBankUser = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const getDonations = () => {
    setLoading(true);
    axiosInstance
      .get(`donations?pagination[page]=${currentPage}`)
      .then((res) => {
        setDonations(res.data.data);
        setTotalPages(res.data.meta.pagination.pageCount);
        setCurrentPage(res.data.meta.pagination.page);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getDonations();
  }, [reload, currentPage]);

  const handleApprove = (id) => {
    setLoading(true);
    axiosInstance
      .put(`approve-donations/${id}`)
      .then(() => setReload(!reload))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    setLoading(true);
    axiosInstance
      .delete(`donations/${id}`)
      .then(() => setReload(!reload))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleDetails = (e) => {
    setShowDetails(e);
  };

  const exportDonations = () => {
    setLoading(true);
    axiosInstance
      .get(`export-donations`)
      .then((res) => {
        // console.log(res.data)
        exportExcel(res.data, "donations");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        {!showDetails && (
          <div className="heading-area">
            <h1 className="page-title">Donation Requests</h1>
            <div className="action-area">
              <button
                className="px-5 my-4 btn btn-success"
                onClick={() => exportDonations()}
              >
                Export
              </button>
            </div>
          </div>
        )}

        {loading && <Loading />}

        {!loading && !showDetails && (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Contact Number</td>
                    <td>Email</td>
                    <td>Blood Group</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {donations?.map((e) => {
                    return (
                      <tr key={e?.id}>
                        <td onClick={() => handleDetails(e)}>
                          {e?.attributes?.name}
                        </td>
                        <td onClick={() => handleDetails(e)}>
                          {e?.attributes?.contact_number}
                        </td>
                        <td onClick={() => handleDetails(e)}>
                          {e?.attributes?.email}
                        </td>
                        <td onClick={() => handleDetails(e)}>
                          {e?.attributes?.blood_group}
                        </td>
                        <td className="d-flex gap-3">
                          <i
                            className="bi bi-trash3 text-danger"
                            onClick={() => handleDelete(e?.id)}
                          ></i>
                          <i
                            className={`bi bi-check2-circle font-weight-bold text-white rounded-circle px-1 ${
                              e?.attributes?.approved === null
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                            onClick={
                              e.attributes.approved === null
                                ? () => handleApprove(e.id)
                                : undefined
                            }
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}

        {!loading && showDetails && (
          <>
            <div className="heading-area">
              <h1 className="page-title">New Donation Request</h1>
            </div>
            <div className="container px-0 position-relative">
              <div className="card">
                <div className="card-body d-flex flex-column gap-4 my-5 mx-3">
                  <div>Full Name : {showDetails?.attributes.name}</div>
                  <div>
                    Contact Number : {showDetails?.attributes.contact_number}
                  </div>
                  <div>Email : {showDetails?.attributes.email}</div>
                  <div>Blood Group : {showDetails?.attributes.blood_group}</div>
                  <div>
                    Medical Condition Description :{" "}
                    {showDetails?.attributes.medical_condition_description}
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      className={`btn ${
                        showDetails?.attributes?.approved === null
                          ? "bg-success text-white"
                          : "bg-secondary"
                      }`}
                      onClick={() => handleApprove(showDetails.id)}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(showDetails.id)}
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="position-absolute bottom-100 end-0 fw-bold fs-3 px-2 bg-secondary rounded-circle"
                onClick={() => setShowDetails(null)}
              >
                x
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DonationRequestsBankUser;
