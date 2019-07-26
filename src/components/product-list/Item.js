import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {

    riskStyle = () => {
        let rT = this.props.item.riskType;
        let clr;
        if (rT === 'Rendah') {
            clr = '#18D795';
        } else if (rT === 'Menengah') {
            clr = '#ddf32e';
        } else if (rT === 'Tinggi') {
            clr = '#f32e2e';
        } else {
            clr = '#18D795';
        }
        return {
                content: ' ',
                width: '10px',
                height: '10px',
                backgroundColor: clr,
                borderRadius: '50%',
                border: "0",
                display: 'inline-block',
                fontSize: '.813em'
        }
    }

    render() {
        const { Name, image, type, riskType, percentageYear, aum } = this.props.item
        return (
            <tr className="d-flex align-items-center">
                <td className="col-lg-1">
                    <div className="logo-wrapper">
                        <img className="img-mngr" src={image} alt={Name} />
                    </div>
                </td>
                <td className="col-lg-4"><span className="product-name">{Name}</span></td>
                <td className="col-lg-2"><span className="product-type">{type}</span></td>
                <td className="col-lg-1 prl-5"><span style={this.riskStyle()}></span> {riskType}</td>
                <td className="col-lg-1"><span className="percentage-year">{percentageYear}</span></td>
                <td className="col-lg-1"><span className="aum">{aum}</span></td>
                <td className="col-lg-1 p0">
                    <div className="row product-buy mb-10 mt-10">
                        <div className="col-sm-12 div-btn p0">
                            <Link className="btn btn-primary-solid btn-buy" to="/cons">buy</Link>
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
