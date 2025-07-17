import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import Loading from "../../components/Loading";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { editDonors_Schema } from "../../schemas/donors";
import { exportExcel } from "../../utils/ExportExcel";

const DonorsAdmin = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(null);

  const getDonors = () => {
    setLoading(true);
    axiosInstance
      .get(`donors`)
      .then((res) => {
        setDonors(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    setLoading(true);
    axiosInstance
      .delete(`donors/${id}`)
      .then(() => setReload(!reload))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const exportDonor = () => {
    setLoading(true);
    axiosInstance
      .get(`export-donor`)
      .then((res) => {
        // console.log(res.data)
        exportExcel(res.data,'donors');
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (values) => {
    // console.log(values,edit);
    axiosInstance
      .put(`donors/${edit?.id}`, {
        data: {
          name: values.full_name,
          gender: values.gender,
          date_of_birth: edit.attributes.date_of_birth,
          blood_group: values.blood_group,
          email: values.email,
          mobile_number: values.mobile,
          last_date_of_donation: edit.attributes.last_date_of_donation,
          preference: edit.attributes.preference,
          donated_previously: edit.attributes.donated_previously,
          medical_condition: edit.attributes.medical_condition,
          agree_to_connect: edit.attributes.agree_to_connect,
        },
      })
      .then((res) => {
        setEdit(false);
        setReload(!reload);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDonors();
  }, [reload]);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="heading-area">
          <h1 className="page-title">Donors</h1>
          <div className="action-area">
            <button
              className="px-5 my-4 btn btn-success"
              onClick={() => exportDonor()}
            >
              Export
            </button>
          </div>
        </div>

        {loading && <Loading />}

        {!loading && !edit && (
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
                  {donors?.map((e) => {
                    return (
                      <tr key={e?.id}>
                        <td>{e?.attributes?.name}</td>
                        <td>{e?.attributes?.blood_group}</td>
                        <td>{e?.attributes?.mobile_number}</td>
                        <td>{e?.attributes?.email}</td>
                        <td>{e?.attributes?.gender}</td>
                        <td className="d-flex gap-3">
                          <i
                            className="bi bi-trash3 text-danger"
                            onClick={() => handleDelete(e?.id)}
                          ></i>
                          <i
                            className={`bi bi-pencil-square`}
                            onClick={() => setEdit(e)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
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
                <li className="page-item">
                  <Link className="page-link active" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}

        {!loading && edit && (
          <Formik
            initialValues={{
              full_name: edit.attributes.name,
              gender: edit.attributes.gender,
              blood_group: edit.attributes.blood_group,
              mobile: edit.attributes.mobile_number,
              email: edit.attributes.email,
            }}
            validationSchema={editDonors_Schema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="container form-container">
                <div className="row">
                  <h6 className="my-3 w-100">Personal Details</h6>

                  <div className="col-lg-8">
                    <div className="form-group">
                      <label htmlFor="full_name">Full Name</label>
                      <Field
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="form-control"
                        placeholder="Full Name"
                      />
                      <ErrorMessage
                        name="full_name"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <Field
                        as="select"
                        name="gender"
                        id="gender"
                        className="form-select"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Other</option>
                      </Field>
                      <ErrorMessage
                        name="gender"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="blood_group">Blood Group</label>
                      <Field
                        as="select"
                        name="blood_group"
                        id="blood_group"
                        className="form-select"
                      >
                        <option value="A+ (A Positive)">A+</option>
                        <option value="A- (A Negative)">A-</option>
                        <option value="B+ (B Positive)">B+</option>
                        <option value="B- (B Negative)">B-</option>
                        <option value="O+ (O Positive)">O+</option>
                        <option value="O- (O Negative)">O-</option>
                        <option value="AB+ (AB Positive)">AB+</option>
                        <option value="AB- (AB Negative)">AB-</option>
                      </Field>
                      <ErrorMessage
                        name="blood_group"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <h6 className="my-3 w-100">Contact Details</h6>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile Number</label>
                      <Field
                        type="number"
                        name="mobile"
                        id="mobile"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                      <ErrorMessage
                        name="mobile"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-12 d-flex gap-2">
                    <button className="btn btn-success px-5 my-4" type="submit">
                      Submit
                    </button>
                    <button
                      className="btn btn-danger px-5 my-4"
                      onClick={() => setEdit(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default DonorsAdmin;
