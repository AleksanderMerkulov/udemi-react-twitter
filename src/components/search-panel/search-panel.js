import React, {Component} from "react";

import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateTerm = this.onUpdateTerm.bind(this)
    }

    onUpdateTerm(e){
        const term = e.target.value
        this.setState({term:term})
        this.props.onUpdateTerm(term)
    }

    render() {
        return(
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск по записям"
                onChange={this.onUpdateTerm}
            />
        )
    }
}