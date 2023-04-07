import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {

    const name = useSelector(state => state.name);

  return (
    <div>

        <p>Donnees : {name}</p>
    </div>
  )
}

export default NavBar