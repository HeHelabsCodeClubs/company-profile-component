import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            recentOrdersData: {},
            orderFieldsData: {}
        };
    }
    
    render (){
        const { 
            companyLogo,
            customerName,
            customerId,
            customerAddress,
            customerPlan,
            customerPhoneOne,
            customerPhoneTwo,
            customerEmail,
            customerCity,
            customerDistrict,
            customerSector,
            customerNeighborhood,
            customerPoBox,
            customerCategory,
            shadowBox,
            nameColor,
            editBtn
         } = this.props;
        return (
            <div className={`row top-box ${shadowBox}`}>
                <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2 col-reset">
                    <img src={companyLogo} className='hehe-logo' />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-10 col-xs-10">
                    <div className="top-title">
                        <span style={{color: nameColor}}>{customerName}</span>
                        <span><Link to={`/update/${customerId}`}><button className={editBtn}><span className="icon-icon_edit"></span> Edit Profile info</button></Link></span>
                    </div>
                    <div className="top-content">
                        <div className="row reset">
                            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                <span className="content1">
                                    <div>{customerAddress}</div>
                                    <div>{customerPlan}</div>
                                </span>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                                <span className="content2">
                                    <table>
                                        <tr>
                                            <td className="tabletitle">Customer Name</td>
                                            <td>{customerName}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Phone number 1</td>
                                            <td>{customerPhoneOne}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Phone number 2</td>
                                            <td>{customerPhoneTwo}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Email</td>
                                            <td>{customerEmail}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Address</td>
                                            <td>{customerAddress}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">City</td>
                                            <td>{customerCity}</td>
                                        </tr>
                                    </table>
                                </span>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <span className="content3">
                                    <table>
                                        <tr>
                                            <td className="tabletitle">District</td>
                                            <td>{customerDistrict}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Sector</td>
                                            <td>{customerSector}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Neightborhood</td>
                                            <td>{customerNeighborhood}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">PO Box</td>
                                            <td>{customerPoBox}</td>
                                        </tr>
                                        <tr>
                                            <td className="tabletitle">Company Category</td>
                                            <td>{customerCategory}</td>
                                        </tr>
                                    </table>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
};

export default CompanyProfile;


