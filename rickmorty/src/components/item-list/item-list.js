import React, {Component} from 'react';
import './item-list.css'
import {logDOM} from "@testing-library/react";

class ItemList extends Component {

    state = {
        itemList: []
    }
    componentDidMount() {
        const {getData} = this.props
        getData()
            .then((items)=>{
                Promise.all(items).then((itemList)=>{
                    this.setState({itemList})
                })
            })
    }

    renderItems = (items)=>{
        return items.map(({id, name})=>{
            return(
                <li className='list-group-item'
                    key={id}
                    onClick={()=>{
                        this.props.onItemSelected(id)
                    }}
                >
                    {name}
                </li>
            );
        });

    }
    render() {
        const {itemList} = this.state
        return (
            <ul className='item-list list-group'>
                {this.renderItems(itemList.slice(0, 8))}
            </ul>
        );
    }
}

export default ItemList;