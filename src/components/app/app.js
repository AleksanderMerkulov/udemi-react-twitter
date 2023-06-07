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
                2,
                {label:'React', important:true, id:'qwer'},
                {label:'Vue', important:false, id:'guth'},
                {label:'Angular', important:false, id:'trtr'},
            ]
        }

        this.deleteItem = this.deleteItem.bind(this)

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

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={id=>{
                        this.deleteItem(id)
                    }
                    }/>
                <PostAddForm/>
            </div>
        )
    }


}