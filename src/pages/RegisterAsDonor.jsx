import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { axiosInstance } from '../config'

const validationSchema = Yup.object({
    full_name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.date().required('Date of Birth is required'),
    blood_group: Yup.string().required('Blood Group is required'),
    mobile: Yup.string().matches(/^\d{10}$/, 'Phone number must have exactly 10 digits').required('Contact Number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    state: Yup.string().required('State is required'),
    district: Yup.string().required('District is required'),
    city: Yup.string().required('City is required'),
    donation_date: Yup.date().required('Date of Donation is required'),
    preference: Yup.string().required("Preference is required"),
    donated_previously: Yup.string().required("Previous donation record is required"),
    agree: Yup.string()
});

const RegisterAsDonor = () => {

    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = (values) => {
        console.log(agree);
        console.log('Values', values);
        axiosInstance.post(`donors`,{
            data:{
                name:values.full_name,
                gender:values.gender ,
                date_of_birth:values.dob, 
                blood_group:values.blood_group ,
                email:values.email ,
                mobile_number:values.mobile ,
                last_date_of_donation:values.donation_date,
                preference:values.preference,
                donated_previously:values.donated_previously,
                district:values.district,
                state:values.state,
                city:values.city,
                agree_to_contact:values.agree
            }
        }).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    }

    return (
        <div className="content-wrapper">

            <div className="container-fluid">

                <div className="heading-area">
                    <h1 className="page-title">Register as a Donor</h1>
                    <div className="action-area"></div>
                </div>

                <div className="container px-0">
                    <div className="card">
                        <div className="card-body">
                            <Formik initialValues={{
                                full_name: "",
                                gender: "Male",
                                dob: "",
                                blood_group: "",
                                mobile: "",
                                email: "",
                                state: "",
                                district: "",
                                city: "",
                                donation_date: "",
                                preference: "",
                                donated_previously: "",
                                agree: "No"
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
                                                    <h6 className="my-3 w-100">Personal Details</h6>

                                                    <div className="col-lg-8">
                                                        <div className="form-group">
                                                            <label htmlFor="full_name">Full Name</label>
                                                            <Field type="text" name="full_name" id="full_name"
                                                                className="form-control" placeholder="Full Name" />
                                                            <ErrorMessage name='full_name' component="small" className='text-danger' />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="gender">Gender</label>
                                                            <Field as='select' name="gender" id="gender" className="form-select">
                                                        
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Other">Other</option>
                                                            </Field>
                                                            <ErrorMessage name='gender' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="dob">Date of Birth</label>
                                                            <Field type="date" name="dob" id="dob" className="form-control" />
                                                            <ErrorMessage name='dob' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="blood_group">Blood Group</label>
                                                            <Field as='select' name="blood_group" id="blood_group" className="form-select">
                                                                <option value="A+ (A Positive)">A+</option>
                                                                <option value="A- (A Negative)">A-</option>
                                                                <option value="B+ (B Positive)">B+</option>
                                                                <option value="B- (B Negative)">B-</option>
                                                                <option value="O+ (O Positive)">O+</option>
                                                                <option value="O- (O Negative)">O-</option>
                                                                <option value="AB+ (AB Positive)">AB+</option>
                                                                <option value="AB- (AB Negative)">AB-</option>
                                                            </Field>
                                                            <ErrorMessage name='blood_group' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <h6 className="my-3 w-100">Contact Details</h6>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="mobile">Mobile Number</label>
                                                            <Field type="number" name="mobile" id="mobile" className="form-control" placeholder="Mobile Number" />
                                                            <ErrorMessage name='mobile' component="small" className='text-danger' />

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email">Email</label>
                                                            <Field type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                                            <ErrorMessage name='email' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <h6 className="my-3 w-100">Location Details</h6>

                                                    {/* State */}
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="state">State</label>
                                                            <Field as="select" name="state" className="form-select">
                                                                <option value="">-- State --</option>
                                                                {states?.map((e) => (
                                                                    <option value={e.id} key={e.id}>
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
                                                                    <option value={e.id} key={e.id}>
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
                                                                    <option value={e.id} key={e.id}>
                                                                        {e.attributes.name}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage name="city" component="small" className="text-danger" />
                                                        </div>
                                                    </div>

                                                    <h6 className="w-100 my-3">Donor Specific Information</h6>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="donation_date">Late Date of Donation</label>
                                                            <Field type="date" name="donation_date" id="donation_date"
                                                                className="form-control" />
                                                            <ErrorMessage name='donation_date' component="small" className='text-danger' />

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="preference">Late Date of Donation</label>
                                                            <Field as='select' name="preference" id="preference" className="form-control">
                                                                <option value="">Select Donation preference</option>
                                                                <option value="Unit 1">Unit 1</option>
                                                                <option value="Unit 2">Unit 2</option>
                                                                <option value="Unit 3">Unit 3</option>
                                                                <option value="Unit 4">Unit 4</option>
                                                                <option value="Unit 5">Unit 5</option>
                                                                <option value="Unit 6">Unit 6</option>
                                                                <option value="Unit 7">Unit 7</option>
                                                                <option value="Unit 8">Unit 8</option>
                                                                <option value="Unit 9">Unit 9</option>
                                                                <option value="Unit 10">Unit 10</option>
                                                            </Field>
                                                            <ErrorMessage name='preference' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Have you donated previously</label>
                                                            <div>
                                                                <div className="form-check form-check-inline">
                                                                    <Field className="form-check-input" type="radio"
                                                                        name="donated_previously" id="donated_previously_1"
                                                                        value="Yes" />

                                                                    <label className="form-check-label"
                                                                        htmlFor="donated_previously_1">Yes</label>

                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <Field className="form-check-input" type="radio"
                                                                        name="donated_previously" id="donated_previously_2"
                                                                        value="No" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="donated_previously_2">No</label>
                                                                </div>
                                                            </div>
                                                            <ErrorMessage name='donated_previously' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <Field className="form-check-input" type="radio" id="agree" name='agree' value="Yes"/>
                                                            <label className="form-check-label" htmlFor="agree">
                                                                I agree to be contacted by blood banks, SBTCs and NBTC
                                                            </label>
                                                            <ErrorMessage name='agree' component="small" className='text-danger' />

                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-red px-5 my-4" type='submit'>Submit</button>
                                                    </div>

                                                </div>
                                            </div>

                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RegisterAsDonor