import React from 'react'
import "./Filters.scss"
import { useState } from 'react'

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
]

function Filters({filterprojects}) {

    const [active, setactive]= useState("all");

    const Clickhandler = (id)=> {
        setactive(id)
        filterprojects(id)
    }

  return (
    <div className='filters' >
        <ul className="filter-menu-items">
            {
                filtersData.map((item)=>{
                    return <li key={item.id} className={`filter-menu-item ${active === item.id ? "active" : ""}`} onClick={()=> Clickhandler(item.id)} >{item.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Filters