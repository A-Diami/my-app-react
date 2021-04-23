import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const AddClients = () => {
        let history = useHistory();
        const [clients, setClients] = useState({
            name: "",
            username: "",
            email: "",
            phone:"",
            website: ""
        });

        const {name, username, email, phone, website} = clients;

        const onInputChange = e =>{
            setClients({...clients,[e.target.name]: e.target.value});
        }

        const onSubmit = async e => {
            e.preventDefault();
            await axios.post("http://localhost:3001/clients", clients);
            history.push("/liste");
        }

    return(
        <div className="container mx-auto">
            <div className="mt-8 sm:mx-auto py-8 px-6 shadow rounded-lg sm:px-10">
            <h1 className="text-green-500 text-center text-2xl font-bold">AJOUTER UN CLIENT</h1>

                <form onSubmit={ e => onSubmit(e) } className="mb-0 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nom</label>
                        <div className="mt-1">
                            <input type="text" name="name" value={name}  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 " placeholder="Entrer votre nom" onChange={ e => onInputChange(e)} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Prenom</label>
                        <div className="mt-1">
                            <input type="text" name="username" value={username}  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 " placeholder="Entrer votre prenom" onChange={ e => onInputChange(e)}  />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Adresse</label>
                        <div className="mt-1">
                            <input type="text"name="email" value={email} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 " placeholder="Entrer votre email" onChange={ e => onInputChange(e)} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Numero</label>
                        <div className="mt-1">
                            <input type="text" name="phone" value={phone} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 " placeholder="Entrer votre numero" onChange={ e => onInputChange(e)} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Site</label>
                        <div className="mt-1">
                            <input type="text" name="website" value={website} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 " placeholder="Entrer votre site web" onChange={ e => onInputChange(e)}  />
                        </div>
                    </div>
                    <button className="bg-green-600 px-4  py-2 text-white rounded">Ajouter</button>
                </form>
            </div>
        </div>
    )
}

export default AddClients;