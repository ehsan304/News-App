import React from 'react'

function NavBar({setCategory}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand"  ><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="navbar-nav">
                                <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
                            </li>
                            <li className="navbar-nav">
                                <div className="nav-link" onClick={()=>setCategory("business")} >Business</div>
                            </li>
                            <li className="navbar-nav">
                                <div className="nav-link" onClick={()=>setCategory("health")} >Health</div>
                            </li>
                            <li className="navbar-nav">
                                <div className="nav-link" onClick={()=>setCategory("science")} >Science</div>
                            </li>
                            <li className="navbar-nav">
                                <div className="nav-link" onClick={()=>setCategory("sports")} >Sports</div>
                            </li>
                            <li className="navbar-nav">
                                <div className="nav-link" onClick={()=>setCategory("entertainment")} >Entertainment</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar