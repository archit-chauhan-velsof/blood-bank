import React from 'react'

const SearchDonors = () => {
  return (
    <div className="content-wrapper">

      <div className="container-fluid">

        <div className="heading-area">
          <h1 className="page-title">Search Donors</h1>
          <div className="action-area"></div>
        </div>

        <div className="container px-0">
          <div className="card">
            <div className="card-body">
              <form action="./search_result.html">
                <div className="container form-container">
                  <div className="row">

                    <h6 className="my-3 w-100">Location Details</h6>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select name="state" id="state" className="form-select">
                          <option value="">-- State --</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="district">District</label>
                        <select name="district" id="district" className="form-select">
                          <option value="">-- District --</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select name="city" id="city" className="form-select">
                          <option value="">-- City --</option>
                        </select>
                      </div>
                    </div>

                    <h6 className="w-100 my-3">Blood Group Type</h6>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="blood_group">Blood Group</label>
                        <select name="blood_group" id="blood_group" className="form-select">
                          <option value="">Select a Blood Group</option>
                          <option value="1">A+</option>
                          <option value="1">A-</option>
                          <option value="1">B+</option>
                          <option value="1">B-</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-red px-5 my-4">Search</button>
                    </div>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default SearchDonors