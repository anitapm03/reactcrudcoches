import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class DetalleCoche extends Component {

    urlCoches = Global.urlCoches;

    state = {
        coche: {},
        status: false
    }

    componentDidMount = () => {
        this.loadCoche();
    }

    loadCoche = () => {

        var request = "api/Coches/FindCoche/" + this.props.idcoche;

        axios.get(this.urlCoches + request).then(response => {
            this.setState({
                coche: response.data,
                status: true
            })
        })

    }


  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1 style={{color: "blue"}}>Detalles del coche: {this.props.idcoche}</h1>
        {
            this.state.status == true ?
            (<div>
                <h2>Marca: {this.state.coche.marca}</h2>
                <h2>Modelo: {this.state.coche.modelo}</h2>
                <h2>Conductor: {this.state.coche.conductor}</h2>
                <img src={this.state.coche.imagen} style={{width: "150px", height: "150px"}} />
            </div>):
            (<img src={loading} style={{width: "200px", height: "200px"}} />)
        }
      </div>
    )
  }
}
