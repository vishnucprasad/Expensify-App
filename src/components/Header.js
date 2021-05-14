import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import MySwal, { Toast } from '../swal/swal';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button
                    onClick={() => {
                        MySwal.fire({
                            title: 'Are you sure you want to logout?',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonText: 'Logout',
                            reverseButtons: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                startLogout().then(() => {
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'Logged out successfully'
                                    });
                                });
                            }
                        });
                    }}
                    className="button button--link">Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);