import React from "react";

import './post-list.css'

import PostListItem from "../post-list-item/post-list-item"

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    let elements = posts.map((item)=>{
        if(typeof(item) == 'object'){
            const {id, ...itemProps} = item
            return(
                <li key={id} className={'list-group-item'}>
                    <PostListItem
                        {...itemProps}
                        onDelete={()=>onDelete(id)}
                        onToggleImportant={()=>{onToggleImportant(id)}}
                        onToggleLike={()=>{onToggleLike(id)}}
                    />
                </li>
            )
        }
        return null //если не объект, то вернуть просто null
    })

  return(
      <ul className="app-list list-group">
          {elements}
      </ul>
  )
}

export default PostList