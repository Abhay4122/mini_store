import React, { useEffect, useState } from "react"
import Axios from "axios"
import Page from "./Page"
import Swal from "sweetalert2"

function HomeGuest(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://127.0.0.1:8000/api/token/", { username: username, password: password })
      props.setLoggedIn(true)
      localStorage.setItem("token", response.data.token)
      Swal.fire("Success", "Successfully login!", "success")
    } catch (e) {
      Swal.fire("Oops...", "Please check username and password!", "error")
    }
  }

  return (
    <Page title="Login" wide={true}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">Log in</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email-register" className="text-muted mb-1">
                    <small>Email</small>
                  </label>
                  <input onChange={(e) => setUsername(e.target.value)} id="email-register" name="email" className="form-control" type="email" autoComplete="off" />
                </div>
                <div className="form-group">
                  <label htmlFor="password-register" className="text-muted mb-1">
                    <small>Password</small>
                  </label>
                  <input onChange={(e) => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
