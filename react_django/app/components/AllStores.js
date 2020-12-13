import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import base_url from "./Api"

function Stores(args) {
  return (
    <div className="spikr_webi_ro my-2">
      <div className="col-md-3 m-0 px-1 spikr_webi_col">
        <div className="text-left pl-2">{args.store.owner}</div>
      </div>
      <div className="col-md-7 m-0 px-1 spikr_webi_col">
        <div className="text-left">
          <Link to={`/store/${args.store.id}`}>{args.store.title}</Link>
        </div>
      </div>
      <div className="col-md-2 m-0 px-1 spikr_webi_col">
        <div>{args.store.date}</div>
      </div>
    </div>
    // <div className="col-12 my-2">
    //   <div className="card hover_effect">
    //     <div className="card-header">
    //       <div className="row">
    //         <div className="col-6">
    //           <h4 className="m-0">
    //             <Link to={`/store/${args.store.id}`}>{args.store.title}</Link>
    //           </h4>
    //         </div>
    //         <div className="col-6">
    //           <p className="mb-0 mt-1 text-right">
    //             <small>{args.store.date}</small>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card-body">
    //       <p>{args.store.owner}</p>
    //       <div dangerouslySetInnerHTML={{ __html: args.store.description }} />
    //     </div>
    //   </div>
    // </div>
  )
}

const AllStores = () => {
  useEffect(() => {
    getData()
  }, [])

  const [store, setStore] = useState([])

  const getData = () => {
    Axios.get(`${base_url.url}store`, {
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    }).then(
      (response) => {
        setStore(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  return store.map((item) => <Stores store={item} />)
}

export default AllStores
