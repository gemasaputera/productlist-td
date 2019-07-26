import React, { Component } from 'react'
import Item from './Item';

export default class Items extends Component {
    render() {
        return this.props.items.map((item)=>(
            <Item 
                key={item.idProduct}
                item={item}
            />
        ))
    }
}
