import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Liste = () => {
    const [clients, setClients] = useState([]);

    useEffect( () => {
        loadClients();
    },[]);

    const loadClients = async() =>{
        const result = await axios.get("http://localhost:3001/clients")
        setClients(result.data.reverse());
    }
        const deleteClient = async  id => {
            await axios.delete('http://localhost:3001/clients/'+id);
            loadClients();
        }
    return(
        <div className="container mx-auto">
            <div>
                <Link className="bg-green-600 px-4  py-2 text-white rounded" to="/clients/add">Ajouter un client</Link>
                <table className="tableau">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((client, index ) =>(
                                <tr>
                                    <th>{index + 1 }</th>
                                    <td>{client.name}</td>
                                    <td>{client.username}</td>
                                    <td>{client.email}</td>
                                    <td>
                                        <Link className="mr-5" to='/clients/view/${client.id}'>View</Link>
                                        <Link className="mr-5" to={'/clients/edit/${client.id}'}>Modifier</Link>
                                        <Link className="" onClick={ () => deleteClient(client.id)}>Supprimer</Link>

                                    </td>
                                </tr>
                            ))
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Liste;