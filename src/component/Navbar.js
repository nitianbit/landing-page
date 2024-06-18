import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <div className="row">
                    <img src="/path/to/your/image/logo.png" width="50" height="50" alt="Logo" />
                    <h3 className="line-hei">
                        <em className="text-primary">Sterling</em> <br />
                        <span className="nav-text pt-0">holidays differently</span>
                    </h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar