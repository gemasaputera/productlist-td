import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <tr className="d-flex align-items-center">
                <td className="col-lg-1">
                    <div className="logo-wrapper">
                        <img className="img-mngr" src="https://cdn.tanamduit.com/images/product/BAHANA.png" alt="" />
                    </div>
                </td>
                <td className="col-lg-4"><span className="product-name">Bahana Dana Likuid</span></td>
                <td className="col-lg-2"><span className="product-type">manajer investasi</span></td>
                <td className="col-lg-1 prl-5"><span className="risk-level low"> rendah</span></td>
                <td className="col-lg-1"><span className="percentage-year">5.91%</span></td>
                <td className="col-lg-1"><span className="aum">Rp5.05T</span></td>
                <td className="col-lg-1 p0">
                    <div className="row product-buy mb-10 mt-10">
                        <div className="col-sm-12 div-btn p0">
                            <button className="btn btn-primary-solid btn-buy"><a href="" to="/cons">buy</a></button>
                        </div>    
                    </div>
                    <div className="row product-compare">
                        <div className="col-sm-12 div-btn p0">
                            <button className="btn btn-primary-outline btn-compare">bandingkan</button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}
