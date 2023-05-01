import React, {Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state={
            counter:0,
        }
        //привязываем контекст this, чтобы каждый компонент был независымым
        this.counter = this.counter.bind(this)
    }
    counter(){
        //увеличиваем счётчик на 1 при каждом вызове функции
        //используем функцию изменения состояния из Component
        this.setState(state =>({
            counter: ++state.counter,
        }))
    }
    render() {
        const {text} = this.props;
        return(
            <>
                <h2>{this.state.counter}</h2>
                <button onClick={this.counter}>{text}</button>
            </>
        )
    }
}

export default Counter