import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-item">
                <div className="nav-icon">
                    <i className="fas fa-home"></i>
                </div>
                <div className="nav-title">Home</div>
            </div>
            <div className="nav-item">
                <div className="nav-icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="nav-title">Jobs</div>
            </div>
            <div className="nav-item">
                <div className="nav-icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="nav-title">Tasks</div>
            </div>
            <div className="nav-item">
                <div className="nav-icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="nav-title">Progress</div>
            </div>
            <div className="nav-item user-profile">
                <div className="nav-title">Neka maca</div>
                <div className="nav-icon">
                    <i className="fas fa-user"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
