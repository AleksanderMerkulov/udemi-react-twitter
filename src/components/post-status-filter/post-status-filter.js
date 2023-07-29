import React from "react";

import './post-status-filter.css'

const PostStatusFilter = (props) => {

    function changeFilter(e){
        console.log(e.target.value)
        props.changeFilterStatus(e.target.value)
    }

  return(
      <div className="btn-group">
        <button className={'btn btn-info'}
                value={""}
                onClick={changeFilter}
                >Все</button>
        <button className={'btn btn-outline-secondary'}
                value={"like"}
                onClick={changeFilter}
                >Понравилось</button>
      </div>
  )
}

export default PostStatusFilter