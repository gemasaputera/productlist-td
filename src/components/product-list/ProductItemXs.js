import React, { Component } from 'react'
import Axios from 'axios';
import Itemxs from './Itemxs'

export default class ProductItemXs extends Component {
    state = {
        itemsxs: []
    }

    componentDidMount() {
        Axios.get("http://www.mocky.io/v2/5d39331d9f0000e74a9b41ff")
            .then(res => this.setState({ itemsxs: res.data.data.productList }))
    }

    // riskTypeCheck
    riskCondition = (idProduct) => {
        
    }
    render() {
        return this.state.itemsxs.map((item) => (
            <React.Fragment>
                <Itemxs 
                    key={item.idProduct}
                    item={item}
                />
            </React.Fragment>

        ))
    }
}
