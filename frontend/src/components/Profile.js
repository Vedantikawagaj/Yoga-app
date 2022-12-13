import React, { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";


const API_URL = "http://localhost:3000/";
const Profile = () => {

  let [profile, setProfile] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

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


      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Age:</strong> {profile.age}
      </p>

      <p>
        <strong>Current Batch:</strong> {
          profile.currBatchId !== null ? <span>Batch {profile.currBatchId}</span> : <span>Not Enrolled In Any Batch</span>

        }
      </p>

      
      <div>
        <Link to={`/all-batches`} style={{ textDecoration: 'none' }}>
          <button className="button" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>View All Batches</span>

          </button>
        </Link>
      </div>
      <div>
        <Link to={`/payment`} style={{ textDecoration: 'none' }}>
          <button className="button" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Payment</span>

          </button>
        </Link>
      </div>

    </div>
  );

};


export default Profile;



