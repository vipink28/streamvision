import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchQueryReducer } from '../../features/common/commonSlice';

function Navbar(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        let { value } = e.target;
        dispatch(searchQueryReducer(value));
        if (value.length >= 3) {
            navigate('/search/movie');
        }
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browse/movie">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browse/tv">Tv Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browsebygenre/movie/28">Browse By Genre</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;