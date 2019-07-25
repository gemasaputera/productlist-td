import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="g-container">
                <div className="product-section">
                    <ProductItem />
                </div>
            </div>
        )
    }
}
