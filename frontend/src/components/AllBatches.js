import React, { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";


const API_URL = "http://localhost:3000/";
const AllBatches = () => {

    let [batches, setbatches] = useState([]);
    const { user: currentUser } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const handlebatches = async (id) => {
            const stringUser = await localStorage.getItem('user');
            if (stringUser) {
                const res = await axios
                    .get(API_URL + "all-batch", { headers: { "authorization": `${currentUser.token}` } });
                setLoading(false);
                const batch = res.data.data;
                console.log(batch);
                setbatches(batch);
            }


        }
        handlebatches()

    }, [])

    return (

        <ul className="cards">
            {
                batches && batches.map((item, idx) => {
                    return (

                        <li>
                            <a href="" className="card">
                                <img src="https://img.freepik.com/free-vector/silhouette-female-yoga-pose-against-mandala-design_1048-13082.jpg?w=740&t=st=1670652205~exp=1670652805~hmac=7fc542a68c3cfdf2437718aba227bb6580d1909442fdc54fa37514495f7ce3a9" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                        <div className="card__header-text">
                                            <h2 className="card__title">Batch {item.id}</h2>
                                            <span className="card__status">Timimgs: {item.startTime} - {item.endTime}</span>
                                        </div>
                                    </div>
                                    <p className="card__description">Instructor: {item.instructorName}</p>
                                    <p className="card__description">Fees: Rs. {item.fee}</p>
                                    <Link to={`/change-batch`} style={{ textDecoration: 'none' }}>
                                        <button className="center button" disabled={loading}>
                                            {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                            <span>Enroll</span>

                                        </button>
                                    </Link>

                                </div>
                            </a>
                        </li>
                    )
                })
            }


        </ul>
    );

};


export default AllBatches;



