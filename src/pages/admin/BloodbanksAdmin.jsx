import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../services/axiosInstance";
import Loading from "../../components/Loading";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  addBloodBank_Schema,
  editBloodBank_Schema,
} from "../../schemas/bloodBank";
import { exportExcel } from "../../utils/ExportExcel";
import Pagination from "../../utils/pagination";

const BloodBanksAdmin = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);
  const [addBloodBank, setAddBloodBank] = useState(false);
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const getBloodBanks = () => {
    setLoading(true);
    axiosInstance
      .get(`blood-banks?pagination[page]=${currentPage}`)
      .then((res) => {
        setBloodBanks(res?.data?.data);
        setTotalPages(res.data.meta.pagination.pageCount);
        setCurrentPage(res.data.meta.pagination.page);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const getStates = () => {
    setLoading(true);
    axiosInstance
      .get(`states`)
      .then((res) => {
        setStates(res.data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (values) => {
    axiosInstance
      .post(`blood-banks`, {
        data: {
          name: values.blood_bank_name,
          phone_number: values.mobile,
          email: values.email,
          address: values.address_line,
          blood_bank_type: values.blood_bank_type,
          license_name: values.license,
          blood_type: values.blood_group,
          district: [values.district],
          state: [values.state],
          city: [values.city],
        },
      })
      .then(() => {
        setAddBloodBank(false);
        setReload(!reload);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    setLoading(true);
    axiosInstance
      .delete(`blood-banks/${id}`)
      .then(() => setReload(!reload))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const exportBloodBanks = () => {
    setLoading(true);
    axiosInstance
      .get(`export-blood-bank`)
      .then((res) => {
        exportExcel(res.data, "blood-banks");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleEdit = (values) => {
    console.log("values for edit are ", values, edit);
    axiosInstance
      .put(`blood-banks/${edit.id}`, {
        data: {
          name: values.blood_bank_name,
          phone_number: values.mobile,
          email: values.email,
          address: values.address,
          blood_bank_type: values.blood_bank_type,
        },
      })
      .then((res) => {
        setEdit(false);
        setReload(!reload);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBloodBanks();
  }, [reload, currentPage]);

  useEffect(() => {
    getStates();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          {!addBloodBank && (
            <>
              <div className="heading-area">
                <h1 className="page-title">Blood Banks</h1>
                <div className="action-area">
                  <div className="item">
                    <button
                      className="px-5 my-4 btn btn-success"
                      onClick={() => exportBloodBanks()}
                    >
                      Export
                    </button>
                  </div>
                  <button
                    className="px-5 my-4 btn btn-danger"
                    onClick={() => setAddBloodBank(true)}
                  >
                    Add Blood Bank
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
                          <td>Blood Bank</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Type</td>
                          <td>Address</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {bloodBanks?.map((e) => {
                          return (
                            <tr key={e?.id}>
                              <td>{e?.attributes?.name}</td>
                              <td>{e?.attributes?.phone_number}</td>
                              <td>{e?.attributes?.email}</td>
                              <td>{e?.attributes?.blood_bank_type}</td>
                              <td>{e?.attributes?.address}</td>
                              <td className="d-flex gap-3">
                                <i
                                  className="bi bi-trash3 text-danger"
                                  onClick={() => handleDelete(e.id)}
                                ></i>
                                <i
                                  className="bi bi-pencil-square"
                                  onClick={() => setEdit(e)}
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
            </>
          )}

          {addBloodBank && (
            <>
              <div className="heading-area">
                <h1 className="page-title">Add Blood Bank</h1>
                <div className="action-area">
                  <button
                    className="px-5 my-4 btn btn-danger"
                    onClick={() => setAddBloodBank(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="container px-0">
                <div className="card">
                  <div className="card-body">
                    <Formik
                      initialValues={{
                        blood_bank_name: "",
                        mobile: "",
                        email: "",
                        address_line: "",
                        state: "",
                        district: "",
                        city: "",
                        blood_bank_type: "",
                        license: "",
                        blood_group: "",
                      }}
                      validationSchema={addBloodBank_Schema}
                      onSubmit={handleSubmit}
                    >
                      {({ values, setFieldValue }) => {
                        // Getting districts when state changes
                        useEffect(() => {
                          if (!values.state) return;
                          setLoading(true);
                          axiosInstance
                            .get(`districts?populate=${values.state}`)
                            .then((res) => {
                              setDistricts(res.data.data);
                              setFieldValue("district", "");
                              setFieldValue("city", "");
                              setCities([]);
                            })
                            .catch((err) => console.error(err))
                            .finally(() => setLoading(false));
                        }, [values.state]);

                        // Getting cities when district changes
                        useEffect(() => {
                          if (!values.district) return;
                          setLoading(true);
                          axiosInstance
                            .get(`/cities?populate=${values.district}`)
                            .then((res) => {
                              setCities(res.data.data);
                              setFieldValue("city", "");
                            })
                            .catch((err) => console.error(err))
                            .finally(() => setLoading(false));
                        }, [values.district]);

                        return (
                          <Form>
                            <div className="container form-container">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label htmlFor="blood_bank_name">
                                      Name of the Blood Bank
                                    </label>
                                    <Field
                                      type="text"
                                      name="blood_bank_name"
                                      id="blood_bank_name"
                                      className="form-control"
                                      placeholder="Please enter name of blood bank"
                                    />
                                    <ErrorMessage
                                      name="blood_bank_name"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label htmlFor="mobile">
                                      Mobile Number
                                    </label>
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

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label htmlFor="address_line">
                                      Address line
                                    </label>
                                    <Field
                                      type="text"
                                      name="address_line"
                                      id="address_line"
                                      className="form-control"
                                      placeholder="Please enter address of blood bank"
                                    />
                                    <ErrorMessage
                                      name="address_line"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                {/* State */}
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <Field
                                      as="select"
                                      name="state"
                                      className="form-select"
                                    >
                                      <option value="">-- State --</option>
                                      {states?.map((e) => (
                                        <option value={e?.id} key={e?.id}>
                                          {e?.attributes?.name}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage
                                      name="state"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                {/* District */}
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <label htmlFor="district">District</label>
                                    <Field
                                      as="select"
                                      name="district"
                                      className="form-select"
                                      disabled={!districts.length}
                                    >
                                      <option value="">-- District --</option>
                                      {districts.map((e) => (
                                        <option value={e?.id} key={e?.id}>
                                          {e?.attributes?.name}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage
                                      name="district"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                {/* City */}
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <Field
                                      as="select"
                                      name="city"
                                      className="form-select"
                                      disabled={!cities.length}
                                    >
                                      <option value="">-- City --</option>
                                      {cities?.map((e) => (
                                        <option value={e?.id} key={e?.id}>
                                          {e?.attributes?.name}
                                        </option>
                                      ))}
                                    </Field>
                                    <ErrorMessage
                                      name="city"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group">
                                    <label>Type of Blood Bank</label>
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_bank_type"
                                          id="blood_bank_type_1"
                                          value="Public"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="blood_bank_type_1"
                                        >
                                          Public
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_bank_type"
                                          id="blood_bank_type_2"
                                          value="Private"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="blood_bank_type_2"
                                        >
                                          Private
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_bank_type"
                                          id="blood_bank_type_3"
                                          value="Hospital Based"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="blood_bank_type_3"
                                        >
                                          Hospital Based
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_bank_type"
                                          id="blood_bank_type_4"
                                          value="Independent"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="blood_bank_type_4"
                                        >
                                          Independent
                                        </label>
                                      </div>
                                    </div>
                                    <ErrorMessage
                                      name="blood_bank_type"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label htmlFor="license">
                                      License/Certification Number
                                    </label>
                                    <Field
                                      type="text"
                                      name="license"
                                      id="license"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="license"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group">
                                    <label>Blood Types Available</label>
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="A+"
                                          value="A+ (A Positive)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="A+"
                                        >
                                          A+
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="A-"
                                          value="A- (A Negative)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="A-"
                                        >
                                          A-
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="B+"
                                          value="B+ (B Positive)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="B+"
                                        >
                                          B+
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="B-"
                                          value="B- (B Negative)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="B-"
                                        >
                                          B-
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="AB+"
                                          value="AB+ (AB Positive)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="AB+"
                                        >
                                          AB+
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="AB-"
                                          value="AB- (AB Negative)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="AB-"
                                        >
                                          AB-
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="O+"
                                          value="O+ (O Positive)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="O+"
                                        >
                                          O+
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="O-"
                                          value="O- (O Negative)"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="O-"
                                        >
                                          O-
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <Field
                                          className="form-check-input"
                                          type="radio"
                                          name="blood_group"
                                          id="ABO"
                                          value="ABO"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="ABO"
                                        >
                                          ABO
                                        </label>
                                      </div>
                                    </div>
                                    <ErrorMessage
                                      name="blood_group"
                                      component="small"
                                      className="text-danger"
                                    />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <button
                                    type="submit"
                                    className="btn btn-red px-5 my-4"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </>
          )}

          {!addBloodBank && edit && !loading && (
            <Formik
              initialValues={{
                blood_bank_name: edit.attributes.name,
                mobile: edit.attributes.phone_number,
                email: edit.attributes.email,
                address_line: edit.attributes.address,
                blood_bank_type: edit.attributes.blood_bank_type,
              }}
              validationSchema={editBloodBank_Schema}
              onSubmit={handleEdit}
            >
              <Form>
                <div className="container form-container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="blood_bank_name">
                          Name of the Blood Bank
                        </label>
                        <Field
                          type="text"
                          name="blood_bank_name"
                          id="blood_bank_name"
                          className="form-control"
                          placeholder="Please enter name of blood bank"
                        />
                        <ErrorMessage
                          name="blood_bank_name"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>

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

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="address_line">Address line</label>
                        <Field
                          type="text"
                          name="address_line"
                          id="address_line"
                          className="form-control"
                          placeholder="Please enter address of blood bank"
                        />
                        <ErrorMessage
                          name="address_line"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label>Type of Blood Bank</label>
                        <div>
                          <div className="form-check form-check-inline">
                            <Field
                              className="form-check-input"
                              type="radio"
                              name="blood_bank_type"
                              id="blood_bank_type_1"
                              value="Public"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="blood_bank_type_1"
                            >
                              Public
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              className="form-check-input"
                              type="radio"
                              name="blood_bank_type"
                              id="blood_bank_type_2"
                              value="Private"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="blood_bank_type_2"
                            >
                              Private
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              className="form-check-input"
                              type="radio"
                              name="blood_bank_type"
                              id="blood_bank_type_3"
                              value="Hospital Based"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="blood_bank_type_3"
                            >
                              Hospital Based
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              className="form-check-input"
                              type="radio"
                              name="blood_bank_type"
                              id="blood_bank_type_4"
                              value="Independent"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="blood_bank_type_4"
                            >
                              Independent
                            </label>
                          </div>
                        </div>
                        <ErrorMessage
                          name="blood_bank_type"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="col-12 d-flex gap-3">
                      <button
                        type="submit"
                        className="btn btn-success px-5 my-4"
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-red px-5 my-4"
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
    </>
  );
};

export default BloodBanksAdmin;
