import React, { useState } from "react";
import './Styles/SearchBar.css'

export default function SearchBar(props) {
   const [id, setId] = useState("")

   const handleChannge = (event) => {
      const id = event.target.value
      setId(id)

   }

   return (
      <div className="inma">
         <div className="search">
            <input required className="input" value={id} type='search' onChange={handleChannge} />
            <div className="underline"></div>
            <label>Character ID</label>
            <button className="btn" onClick={() => {
               props.onSearch(id)
               setId('')
            }}>Agregar</button>
         </div>
      </div>
   );
}
