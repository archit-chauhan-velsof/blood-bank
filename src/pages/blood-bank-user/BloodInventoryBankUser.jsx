import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../config';
import Loading from '../../components/Loading';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  blood_group: Yup.string().required('Blood group is required'),
  quantity: Yup.number().positive('Quantity must be greater than 0').required('Quantity is required'),
  doc: Yup.date().required('Date of collection is required')
});

const BloodInventoryBankUser = () => {
  const [loading, setLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [inventoryData, setInventoryData] = useState([]);
  const [reload,setReload] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`blood-inventories`).then((res) => {
      setInventoryData(res.data.data);
    }).catch((err) => console.log(err)).finally(() =>
      setLoading(false)
    )
  }, [reload]);

  return (
    <div className="content-wrapper position-relative">

      <div className="container-fluid">

        <div className="heading-area">
          <h1 className="page-title">Blood Inventory</h1>
          <div className="action-area">
            <button className="btn btn-success" onClick={() => setShowAdd(true)}>Add Blood Bags</button>
          </div>
        </div>


        {
          loading && <Loading />
        }

        {
          !loading &&
          <div className="container px-0">
            <div className="row row-cols-1 row-cols-md-3 g-4">

              {
                inventoryData?.map((e) => {
                  return (
                    <div className="col" key={e.id}>
                      <div className="card h-100">
                        <div className="card-body d-flex justify-content-between">
                          <div className="d-flex flex-column gap-2">
                            <span>Bags available</span>
                            <h4>{e?.attributes?.quantity}</h4>
                          </div>
                          <div className="bg-danger rounded-circle p-4 text-white d-flex align-items-center justify-content-center">
                            {e?.attributes?.blood_group}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        }

      </div>

      {
        showAdd &&
        <div className='position-absolute w-50 h-100 top-0 end-0 bg-white rounded-left border border-danger'>
          <div className="container-fluid">

            <div className="heading-area">
              <h1 className="page-title">Add Blood Bags</h1>
              <div className="action-area bg-secondary rounded-circle">
                <button className="btn text-white" onClick={() => setShowAdd(false)}>x</button>
              </div>
            </div>
            <div className="container px-0">

              <Formik
                initialValues={{
                  blood_group: '',
                  quantity: '',
                  doc: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  axiosInstance.post(`blood-inventories`,{
                    data:{
                      blood_group:values.blood_group,
                      quantity:values.quantity,
                      date_of_collection:values.doc
                    }
                  }).then((res)=>{
                    setReload(!reload);
                    setShowAdd(false);
                  }).catch((err)=>console.log(err));
                }}
              >
                <Form>
                  <div className="container form-container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="blood_group">Blood Group</label>
                          <Field as='select' name="blood_group" id="blood_group" className="form-select">
                            <option value="">Select a Blood Group</option>
                            <option value="A+ (A Positive)">A+</option>
                            <option value="A- (A Negative)">A-</option>
                            <option value="B+ (B Positive)">B+</option>
                            <option value="B- (B Negative)">B-</option>
                            <option value="O+ (O Positive)">O+</option>
                            <option value="O- (O Negative)">O-</option>
                            <option value="AB+ (AB Positive)">AB+</option>
                            <option value="AB- (AB Negative)">AB-</option>
                          </Field>
                          <ErrorMessage component='small' className='text-danger' name='blood_group' />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="mobile">Quantity of Blood Bags</label>
                          <Field type="number" name="quantity" id="quantity" className="form-control" placeholder="Quantity" />
                          <ErrorMessage component='small' className='text-danger' name='quantity' />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="doc">Date of Collection</label>
                          <Field type="date" name="doc" id="doc" className="form-control" />
                          <ErrorMessage component='small' className='text-danger' name='doc' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex position-absolute bottom-0 end-0 px-4 py-2 gap-2'>
                    <button className="btn btn-secondary px-4 py-2 text-white" onClick={() => setShowAdd(false)}>Cancel</button>
                    <button className="btn btn-success px-4 py-2 text-white" type='submit'>Add</button>
                  </div>
                </Form>
              </Formik>
            </div>

          </div>

        </div>

      }


    </div>



  )
}

export default BloodInventoryBankUser