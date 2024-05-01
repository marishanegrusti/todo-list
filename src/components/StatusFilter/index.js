import React from 'react';
import './index.css';

const StatusFilter = () => {
    return (
        <div className="btn-group app-status-filter ">
            <button type="button"
                    className="btn btn-info">All</button>
            <button type="button"
                    className="btn btn-outline-secondary">Active</button>
            <button type="button"
                    className="btn btn-outline-secondary">Done</button>
        </div>
    );
};

export default StatusFilter;
