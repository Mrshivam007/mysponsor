import React from 'react';
import loading from "../../assets/loading/loading.svg";
import './Loading.css'; // Import CSS file for styling

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={loading} alt="Loading" className="loading-svg" />
        </div>

    );
}

export default Loading;
