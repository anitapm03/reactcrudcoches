import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import loading from '../assets/images/loading.gif'
import { NavLink } from 'react-router-dom';

export default class HomeCoches extends Component {

    urlCoches = Global.urlCoches;

    state = {
        coches: [],
        status: false
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    loadCoches = () => {
        var request = "api/Coches";

        axios.get(this.urlCoches + request).then(response => {
            this.setState({
                coches: response.data,
                status: true
            })
        })
    }


  render() {
    return (
      <div>
        <h1>Listado de coches</h1>

        <table className='table'>
            <thead>
                <tr>
                   <th>ID</th> 
                   <th>Marca</th>
                   <th>Modelo</th>
                   <th>Conductor</th>
                   <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true ?
                    (
                        this.state.coches.map((coche, index) => {
                            return(<tr key={index}>
                                <td>{coche.idCoche}</td>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen} style={{width: "100px", height: "100px"}}/></td>
                            
                                <td>
                                    <NavLink className='btn btn-info' to={"/updatecoche/" + coche.idCoche}>
                                    Modificar</NavLink>
                                
                                    <NavLink className='btn btn-danger' to={"/eliminarcoche/" + coche.idCoche}>
                                    Eliminar</NavLink>
                               
                                    <NavLink className='btn btn-success' to={"/detalle/"+ coche.idCoche}>
                                    Detalle</NavLink>
                                </td>
                            
                            </tr>)
                        })
                    ):
                    (<img className='position-absolute top-50 start-50 translate-middle' src={loading} style={{width: "300px", height: "300px"}} />)
                }
            </tbody>
        </table>
      </div>
    )
  }
}
