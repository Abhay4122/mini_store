import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useParams, Link } from "react-router-dom"
import Swal from "sweetalert2"
import Page from "./Page"
import base_url from "./Api"

function Sotre() {
  const { store_id } = useParams()
  const [store, setStore] = useState({
    title: "...",
    owner: "...",
    email: "...",
    address: "...",
    description: "...",
    date: "...",
  })
  useEffect(() => {
    async function getData() {
      try {
        const response = await Axios.get(`${base_url.url}store?id=${store_id}`)
        setStore(response.data)
      } catch (e) {
        Swal.fire("Oops...", "Something went wrong!", "error")
      }
    }
    getData()
  }, [])

  return (
    <Page title="Store detail" wide={true}>
      <div className="row justify-content-center">
        <div className="col-12 text-right">
          <Link to="/" className="btn btn-outline-primary">
            Stores list
          </Link>
        </div>
        <div className="col-12 my-2">
          <div className="card hover_effect">
            <div className="card-header">
              <h4 className="m-0 text-center">{store.title}</h4>
            </div>
            <div className="card-body">
              <p>Owner: {store.owner}</p>
              <p>Email: {store.email}</p>
              <p>Address: {store.address}</p>
              <p>Reg. Date: {store.date}</p> <hr />
              <h5 className="text-center">Description:</h5>
              <div dangerouslySetInnerHTML={{ __html: store.description }} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Sotre
