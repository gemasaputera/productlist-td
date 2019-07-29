import React, { Component } from 'react'
import ProductItem from './ProductItem'
import ProductItemSmall from './ProductItemXs';

export default class ProductList extends Component {
    render() {
        return (
            <div className="g-container">
                <div className="product-section display-lg">
                    <ProductItem />
                </div>
                <ProductItemSmall />
            </div>
        )
    }
}
