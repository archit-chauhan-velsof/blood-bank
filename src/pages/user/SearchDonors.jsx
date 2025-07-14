import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import Loading from '../../components/Loading';
const SearchDonors = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Load states as soon as page loads
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`states`)
      .then((res) => {
        setStates(res.data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const validationSchema = Yup.object({
    state: Yup.string().required('State is required'),
    district: Yup.string().required('District is required'),
    city: Yup.string().required('City is required'),
    blood_group: Yup.string().required('Blood group is required'),
  });

  const handleSubmit = (values) => {
    console.log('Selected Values:', values);
    setLoading(true);
    axiosInstance.get(`donors?populate=${values.state}&populate=${values.district}&populate=${values.city}`).then((res) => {
      console.log(res.data.data);
      setShowResults(true);
      setSearchResults(res.data.data);
    }).catch((err) => console.log(err)).finally(() => setLoading(false));
  };

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="heading-area">
          <h1 className="page-title">Search Donors</h1>
        </div>

        <div className="container px-0">
          <div className="card">
            <div className="card-body">
              {loading && <Loading />}

              {
                !showResults && (

                  <Formik
                    initialValues={{
                      state: '',
                      district: '',
                      city: '',
                      blood_group: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, setFieldValue }) => {
                      // Getting districts when state changes
                      useEffect(() => {
                        if (!values.state) return;
                        setLoading(true);
                        axiosInstance.get(`districts?populate=${values.state}`)
                          .then((res) => {
                            setDistricts(res.data.data);
                            setFieldValue('district', '');
                            setFieldValue('city', '');
                            setCities([]);
                          }).catch((err) => console.error(err)).finally(() => setLoading(false));
                      }, [values.state]);

                      // Getting cities when district changes
                      useEffect(() => {
                        if (!values.district) return;
                        setLoading(true);
                        axiosInstance.get(`/cities?populate=${values.district}`)
                          .then((res) => {
                            setCities(res.data.data);
                            setFieldValue('city', '');
                          }).catch((err) => console.error(err)).finally(() => setLoading(false));
                      }, [values.district]);

                      return (
                        <Form>
                          <div className="container form-container">
                            <div className="row">
                              <h6 className="my-3 w-100">Location Details</h6>

                              {/* State */}
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <label htmlFor="state">State</label>
                                  <Field as="select" name="state" className="form-select">
                                    <option value="">-- State --</option>
                                    {states?.map((e) => (
                                      <option value={e.attributes.code} key={e.id}>
                                        {e.attributes.name}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage name="state" component="small" className="text-danger" />
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
                                      <option value={e.attributes.code} key={e.id}>
                                        {e.attributes.name}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage name="district" component="small" className="text-danger" />
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
                                      <option value={e.attributes.code} key={e.id}>
                                        {e.attributes.name}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage name="city" component="small" className="text-danger" />
                                </div>
                              </div>

                              {/* Blood Group */}
                              <h6 className="w-100 my-3">Blood Group Type</h6>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <label htmlFor="blood_group">Blood Group</label>
                                  <Field as="select" name="blood_group" className="form-select">
                                    <option value="">Select a Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                  </Field>
                                  <ErrorMessage name="blood_group" component="small" className="text-danger" />
                                </div>
                              </div>

                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-red px-5 my-4"
                                  disabled={loading}
                                >
                                  {loading ? 'Searching...' : 'Search'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                )
              }

              {
                showResults && (
                  // searched results
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
                          <td>Preference</td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          searchResults?.map((e)=>{
                            return (
                              <tr key={e.id}>
                          <td>{e?.attributes?.name}</td>
                          <td>{e?.attributes?.blood_group}</td>
                          <td>{e?.attributes?.mobile_number}</td>
                          <td>{e?.attributes?.email}</td>
                          <td>{e?.attributes?.gender}</td>
                          <td>{e?.attributes?.preference}</td>
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

                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDonors;
