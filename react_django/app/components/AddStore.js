import React, { useEffect, useState } from "react"
import Axios from "axios"
import CKEditor from "ckeditor4-react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import Page from "./Page"
import base_url from "./Api"

function AddTicket() {
  const [title, setTitle] = useState()
  const [owner, setOwner] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [storId, setStorId] = useState()
  const [description, setDescription] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post(`${base_url.url}store`, { title: title, owner: owner, email: email, address: address, store_id: storId, description: description })
      Swal.fire("Success", "Store added successfully!", "success")
    } catch (e) {
      Swal.fire("Oops...", "Something went wrong!", "error")
    }
  }

  return (
    <Page title="Add Store" wide={true}>
      <div className="row mb-3">
        <div className="col-9"></div>
        <div className="col-3">
          <Link to="/" className="btn btn-outline-primary">
            Stores list
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <small className="text-primary"> Please Notice: Store title and ID must be unique. </small>
          <div className="card">
            <div className="card-header text-center">Add Store</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="title-register" className="text-muted mb-1">
                      <small>Store Title</small>
                    </label>
                    <input onChange={(e) => setTitle(e.target.value)} id="title-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="name-register" className="text-muted mb-1">
                      <small>Owner Name</small>
                    </label>
                    <input onChange={(e) => setOwner(e.target.value)} id="name-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="email-register" className="text-muted mb-1">
                      <small>Owner Email</small>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} id="email-register" className="form-control" type="email" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="address-register" className="text-muted mb-1">
                      <small>Address</small>
                    </label>
                    <input onChange={(e) => setAddress(e.target.value)} id="address-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="store-register" className="text-muted mb-1">
                      <small>Store ID</small>
                    </label>
                    <input onChange={(e) => setStorId(e.target.value)} id="store-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description-register" className="text-muted mb-1">
                    <small>Description</small>
                  </label>
                  <CKEditor onChange={(e) => setDescription(e.editor.getData())} />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default AddTicket
