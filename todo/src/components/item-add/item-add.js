import React, {Component} from "react";
import "./item-add.css";

export default class ItemAdd extends Component {
    state = {
        text: ""
    }
    onSubmit= (e)=>{
        e.preventDefault()
        this.props.onAdded(this.state.text)
        this.setState(
            {
                text: ''
            }
        )
    }
    onTextChange= (e)=>{
        this.setState(
            {
                text: e.target.value
            }
        )
    }

    render() {
        return (
                <form className="item-add d-flex"
                onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.onTextChange}
                        value={this.state.text}
                    />
                <button
                className="btn btn-outline-secondary"
                >
                    Add Item
                </button>
                </form>
        )
    }

}
    