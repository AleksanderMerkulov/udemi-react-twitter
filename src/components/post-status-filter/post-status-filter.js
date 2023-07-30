import React from "react";

import './post-status-filter.css'

const PostStatusFilter = (props) => {

    const tags = [
        {name:'all', label:'Все'},
        {name:'like', label:'Понравилось'},
    ]

    function changeFilter(e){
        console.log(e.target.value)
        console.dir(e.target)
        props.changeFilterStatus(e.target.value)
    }

  return(
      <div className="btn-group">
          {tags.map(({name, label}) => {
              const isActive = props.filter === name?'btn-info':'btn-outline-secondary'
              return (
                  <button key={name}
                          value={name}
                          className={`btn  ${isActive}`}
                          onClick={changeFilter}
                  >{label}</button>
              )
          })}
      </div>
  )
}

export default PostStatusFilter