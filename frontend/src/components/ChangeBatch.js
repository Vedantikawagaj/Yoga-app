import React, { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";


const API_URL = "http://localhost:3000/";
const ChangeBatch = () => {

    let [profile, setProfile] = useState([]);
    const { user: currentUser } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    const [currBatchId, setcurrBatchId] = useState('');
    const [nextBatchId, setnextBatchId] = useState();

    const handleUpdate = async () => {
        const stringUser = await localStorage.getItem('user');
        if (stringUser) {
            const res = await axios

                .patch(API_URL + "profile", {
                    "currBatchId": currBatchId,
                    "nextBatchId": nextBatchId
                }, { headers: { "authorization": `${currentUser.token}` } }
                ).catch(error => console.log(error))
            console.log(res)
            setLoading(false);
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
        <div className="container">
            <header className="jumbotron">
                <h3>
                    Profile
        </h3>
                <h3>
                    <strong>{profile.fullName}</strong>
                </h3>
            </header>



            <div></div>
            <label htmlFor="cars">Choose a Batch:</label>
            <select name="cars" id="cars"
                onChange={(val) => {
                    setcurrBatchId(val.target.value)
                    setnextBatchId(val.target.value)

                }}
            >
                <option value="">--Please choose batch--</option>
                <option value="1">Batch 1</option>
                <option value="2">Batch 2</option>
                <option value="3">Batch 3</option>
                <option value="4">Batch 4</option>
            </select>
            <p>
                <strong>Current Batch:</strong> {
                    profile.currBatchId != null ? <span>Batch {profile.currBatchId}</span> : <span>Not Enrolled In Any Batch</span>

                }
            </p>

            <Link to={`/profile`} style={{ textDecoration: 'none' }}>
                <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" disabled={loading} onClick={handleUpdate}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Change Batch</span>

                </button>
            </Link>


        </div>
    );

};


export default ChangeBatch;



