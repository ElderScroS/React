import React, {Component} from "react";
import './status-filter.css'
class StatusFilter extends Component{

    state = {isActive:false}

    onClickBtn = () => {
        if (this.state.isActive)
        {
            this.setState((state) => {
                this.props.onBtnClicked('All')
                return {isActive: !state.isActive}
            })
        }
        else
        {
            this.setState((state) => {
                this.props.onBtnClicked(this.props.text)
                return {isActive: !state.isActive}
            })
        }
    }

    render(){
        const clazz = this.state.isActive
        ? "btn btn-info btn-outline-secondary"
        : "btn  btn-outline-secondary"
        return(
            <>
                <button
                    type="button"
                    className= {clazz}
                    onClick={this.onClickBtn}
                >
                    {this.props.text}
                </button>
            </>
        )
    }
}

export default StatusFilter
