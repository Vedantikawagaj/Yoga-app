import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import '../componentCss/payment.css'



const API_URL = "http://localhost:3000/";
const MakePayment = () => {

    let [profile, setProfile] = useState([]);
    const { user: currentUser } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const { message } = useSelector(state => state.message);
    let history = useNavigate();

    const handlePayment = async () => {
        const stringUser = await localStorage.getItem('user');
        if (stringUser) {
            const res = await axios

                .get(API_URL + "payment",{ headers: { "authorization": `${currentUser.token}` } }
                ).catch(error => console.log(error))
            
            setLoading(false);

            if (res.data.status === 200) {
                alert(res.data.message)
            }
            else {
    
                alert(res.data.message);
            }

        }
    }

    useEffect(() => {

        const handleProfile = async (id) => {
            const stringUser = await localStorage.getItem('user');
            if (stringUser) {
                const res = await axios
                    .get(API_URL + "profile", { headers: { "authorization": `${currentUser.token}` } });
                setLoading(false);
                const data1 = res.data.data;
                console.log(data1);
                setProfile(data1);
            }


        }
        handleProfile()

    }, [])

    return (
        <div className="container p-0">
            <div className="card px-4">
                <p className="h8 py-3">Payment Details</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Person Name</p>
                            <input className="form-control mb-3" type="text" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Card Number</p>
                            <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Expiry</p>
                            <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                        </div>
                    </div>
                    
                    <Link to={`/profile`} style={{ textDecoration: 'none' }}>
                        <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" disabled={loading} onClick={handlePayment}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Pay ₹500</span>

                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );

};


export default MakePayment;



