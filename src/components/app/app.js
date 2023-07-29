import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

//импорт стилей
import './app.css'


export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label:'React', important:true, id:'qwer', like: false},
                {label:'Vue', important:false, id:'guth', like: false},
                {label:'Angular', important:false, id:'trtr', like: false},
            ],
            term: '',
            filterTag: '',
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)
        this.onUpdateTerm = this.onUpdateTerm.bind(this)
        this.changeFilterTag = this.changeFilterTag.bind(this)

    }



    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)
            const newData = [...data.slice(0, index), ...data.slice(index + 1)]
            return{
                data: newData
            }
        });
    }

    onAdd(body){
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: 'post' + String(Math.random()+Math.random())
        }

        this.setState(({data})=>{
            const newData = [...data, newItem]
            return {
                data: newData,
            }
        })
    }

    onToggleImportant(id){
        console.log(id)
        this.setState(({data})=>{
            const index = data.findIndex(item => item.id === id)
            // console.log()
            const oldItem = data[index]
            const newItem = {...oldItem, important: !oldItem.important}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newData,
            }
        })
    }

    onToggleLike(id){
        console.log(id)
        this.setState(({data})=>{
            const index = data.findIndex(item => item.id === id)
            // console.log()
            const oldItem = data[index]
            const newItem = {...oldItem, like: !oldItem.like}
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newData,
            }
        })
    }

    searchPosts(items, term){
        if(term === ''){
            return items
        }

        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateTerm(term){
        this.setState({term:term})
    }

    filterPosts(items, filterTag){
        if(filterTag === "like"){
            return items.filter(item=>item.like)
        }else{
            return items
        }
    }

    changeFilterTag(newFilterTag){
        this.setState({filterTag:newFilterTag})
    }

    render() {
        const {data, term, filterTag} = this.state

        let likedCount = data.filter(item=>item.like).length
        let allPostCount = data.length

        const visiblePost = this.filterPosts(this.searchPosts(data, term), filterTag)

        return (
            <div className="app">
                <AppHeader
                    liked={likedCount}
                    allPosts={allPostCount}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateTerm={this.onUpdateTerm}/>
                    <PostStatusFilter
                        changeFilterStatus={this.changeFilterTag}/>
                </div>
                <PostList
                    posts={visiblePost}
                    onDelete={id=>{
                        this.deleteItem(id)
                    }}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm onAdd = {this.onAdd}/>
            </div>
        )
    }


}