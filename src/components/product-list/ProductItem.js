import React, { Component } from 'react';
import Items from './Items';
import Axios from 'axios';

export default class ProductItem extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        Axios.get("http://www.mocky.io/v2/5d39331d9f0000e74a9b41ff")
            .then(res => this.setState({ items: res.data.data.productList }))
    }

    // riskTypeCheck
    riskCondition = (idProduct) => {
        
    }

    render() {
        return (
            <React.Fragment>
                <table className="table-product">
                    <thead>
                        <tr>
                            <th className="col-lg-1">manajer investasi</th>
                            <th className="col-lg-4">nama produk</th>
                            <th className="col-lg-2">jenis produk</th>
                            <th className="col-lg-1">tingkat resiko</th>
                            <th className="col-lg-1">kinerja 1th</th>
                            <th className="col-lg-1">total dana</th>
                            <th className="col-lg-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Items 
                            items={this.state.items}
                            />
                    </tbody>
                </table>    
            </React.Fragment>
        );
    }
}
