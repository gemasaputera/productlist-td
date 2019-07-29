import React, { Component } from 'react'

export default class Itemxs extends Component {

    render() {
        const { Name, image, type, riskType, percentageYear, aum } = this.props.item
        return (
            <div style={this.productMobileStyle()} className="display-sm">
                <div className="row d-flex justify-content-center">
                    <div className="img-wrap">
                        <img src={image} alt={Name} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <span className="product-name-sm">{Name}</span>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <span className="th-mobile">Jenis Produk</span>
                    </div>
                    <div className="col-6">
                    <span className="type-mobile">{type}</span>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <span className="th-mobile">Tingkat Resiko</span>
                    </div>
                    <div className="col-6">
                    <span className="type-mobile"><span style={this.riskStyle()}></span> {riskType}</span>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <span className="th-mobile">Kinerja 1 Tahun</span>
                    </div>
                    <div className="col-6">
                    <span className="type-mobile">{percentageYear}</span>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <span className="th-mobile">Total Dana Kelolaan </span>
                    </div>
                    <div className="col-6">
                    <span className="type-mobile">{aum}</span>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-10">
                    <button className="btn btn-primary col-6" style={this.btnBuy()}>
                        BELI
                    </button>
                    <button className="btn btn-primary col-6" style={this.btnCompare()}>
                        BANDINGKAN
                    </button>
                </div>
            </div>
        )
    }

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

    btnBuy = () => {
        return {
            backgroundColor: '#485393',
            paddingBottom: '10px',
            paddingTop: '10px',
            borderRadius: '0px',
            fontSize: '.813em',
            fontWeight: 'bold',
            marginBottom: '-1rem'
        }
    }

    btnCompare = () => {
        return {
            backgroundColor: '#F5F5F5',
            paddingBottom: '10px',
            paddingTop: '10px',
            borderRadius: '0px',
            color: '#485393',
            border: '1px solid #F5F5F5',
            fontSize: '.813em',
            fontWeight: 'bold',
            marginBottom: '-1rem'
        }
    }

    productMobileStyle = () => {
        return {
            backgroundColor: '#FFF',
            padding: '1rem',
            borderRadius: '5px',
            margin: '10px',
            boxShadow: '1px -3px 20px -5px rgba(0, 0, 0, 0.1)'
        }
    }
}
