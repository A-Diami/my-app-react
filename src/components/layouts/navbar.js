import React from 'react';

const Navbar = () => {
    return(
        <header className="flex items-center py-4 mb-3 bg-indigo-500">
                <div className="text-black-500 m-2 text-xl  font-black">KAFFARRR</div>
                <nav className="container mx-auto">
                    <a href="/" className="mr-4 text-white  text-xl  font-weight: 700 hover:text-green-500">Accueil</a>
                    <a href="/apropos" className="mr-4 text-white  text-xl  font-weight: 700 hover:text-green-500">A propos</a>
                    <a href="/liste" className="mr-4 text-white  text-xl font-weight: 700 hover:text-green-500">Liste Clients</a>
                
                </nav>
        </header>
    )
}

export default Navbar