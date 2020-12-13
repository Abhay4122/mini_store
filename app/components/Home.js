import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"
import AllStores from "./AllStores"

function Home(store) {
  return (
    <Page title="All Stores">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row mb-3">
            <div className="col-9">
              <h4 className="text-center font-weight-bold">All Stores List</h4>
            </div>
            <div className="col-3">
              <Link to="/add-store/:id" className="btn btn-outline-primary">
                Add Store
              </Link>
            </div>
          </div>
        </div>
        <AllStores />
      </div>
    </Page>
  )
}

export default Home
