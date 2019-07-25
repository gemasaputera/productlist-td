import React, { Component } from 'react'
import Item from './Item'

export default class ProductItem extends Component {
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
                        <Item />
                        <Item />
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
