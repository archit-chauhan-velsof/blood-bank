import React from 'react'

const BloodInventoryBankUser = () => {
  return (
    <div className="content-wrapper">

      <div className="container-fluid">

        <div className="heading-area">
          <h1 className="page-title">Blood Inventory</h1>
          <div className="action-area">
            <button className="btn btn-success">Add Blood Bags</button>
          </div>
        </div>



        <div className="container px-0">
          <div className="row row-cols-1 row-cols-md-3 g-4">

            <div className="col">
              <div className="card h-100">
                <div className="card-body d-flex justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <span>Bags available</span>
                    <h4>33 bags</h4>
                  </div>
                  <div className="bg-danger rounded-circle p-4 text-white d-flex align-items-center justify-content-center">
                    A+
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body d-flex justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <span>Bags available</span>
                    <h4>33 bags</h4>
                  </div>
                  <div className="bg-danger rounded-circle p-4 text-white d-flex align-items-center justify-content-center">
                    A+
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body d-flex justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <span>Bags available</span>
                    <h4>33 bags</h4>
                  </div>
                  <div className="bg-danger rounded-circle p-4 text-white d-flex align-items-center justify-content-center">
                    A+
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body d-flex justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <span>Bags available</span>
                    <h4>33 bags</h4>
                  </div>
                  <div className="bg-danger rounded-circle p-4 text-white d-flex align-items-center justify-content-center">
                    A+
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>



    </div>



  )
}

export default BloodInventoryBankUser