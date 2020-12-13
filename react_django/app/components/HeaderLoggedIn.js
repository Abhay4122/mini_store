import React, { useEffect } from "react"

function HeaderLoggedIn(props) {
  function handleLogOut() {
    props.setLoggedIn(false)
    localStorage.removeItem("token")
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <button onClick={handleLogOut} className="btn btn-sm btn-light">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
