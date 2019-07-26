import React, { Component } from 'react'
import CompareItem from './CompareItem';

export default class CompareLayout extends Component {
    render() {
        return (
            <div className="compare-section">
                <div className="container d-flex">
                    <div className="compare-wrapper d-flex align-items-center">
                        <span className="compare-title">Bandingkan Produk Reksa Dana yang Berbeda</span>
                    </div>
                    <CompareItem />
                </div>
            </div>
        )
    }
}
