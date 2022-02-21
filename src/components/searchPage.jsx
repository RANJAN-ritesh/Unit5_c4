import {useSelector} from "react-redux"

export const SearchPage = ()=>{
    const showresults = useSelector((state)=>state.results)
    return(
        <div>
           <div id="search-result">
              {showresults.map((e)=>{
                  console.log(e.title)
                  if(e.title !== undefined){
               return(   <div className="result">
                     <p id="url">{e.url}</p>
                     <div>
                     <h3>{e.title} |   </h3>
                     <p >{e.author}</p>
                     </div>
                     <p>{e.description}</p>
                     <p>Creation-date : {e.creation_date}</p>
                     <p>Explicit : {e.explicit ? "True" : "False"}</p>
                     {/* url, title, author (company's parent basically) description, creation date, and explicit */}
                  </div>)
                  }
              })}
           </div>
        </div>
    )
            }
