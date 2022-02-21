import { useState } from "react"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { SearchResults } from "../redux/action"

export const Navbar = ()=>{
    let [search,setSearch] = useState('')
    let dispatch = useDispatch()
    let navigate = useNavigate();

    function handleChange(e){
        let m = e.target.value
      setSearch(m)
      
    }

    function handleClick(){
      fetch("https://fast-reef-22226.herokuapp.com/data/")
      .then(d=>d.json())
      .then(res=>{
          res.map((e)=>{
              if(e.title === search){
                  let addItem = SearchResults(e)
                  dispatch(addItem)
                  
                  navigate("/search")
                  
              }
          })
      })
      
    }
    return(
        <div id="navbar">
             <img src="https://img.search.brave.com/X-AWQ6gKmOBsmZvoycM8Gb3BSIKvhxVPP-cDIyBczNI/rs:fit:989:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/dDlEc25SelE5ZHlG/MzNfVGVaOG9RSGFE/aiZwaWQ9QXBp"/>
            <input type="text" placeholder="Enter the Title" className="search-box" onChange={(e)=>handleChange(e)}/>
            <button className="search" onClick={handleClick}>SEARCH</button>
        </div>
    )
}
