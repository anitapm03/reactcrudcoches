import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class UpdateCoche extends Component {

    urlCoches = Global.urlCoches;

    state = {
        coche: {},
        statusGet: false,
        statusNavegacion: false
    }

    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    componentDidMount = () => {
        this.cargarCoche();
    }

    cargarCoche = () => {

        var request = "api/Coches/FindCoche/" + this.props.idcoche;

        axios.get(this.urlCoches + request).then(response => {
            this.setState({
                coche: response.data,
                statusGet: true
            })
        })
    }

    actualizarCoche = (e) => {
        if(e!=null){
            e.preventDefault();
        }

        var id = parseInt(this.props.idcoche);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var request = "api/coches/updatecoche";

        var data = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.put(this.urlCoches+request, data).then(response => {
            this.setState({
                statusNavegacion: true
            })
        })
    }

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1 style={{color: "blue"}}>Actualizar el coche: {this.props.idcoche}</h1>
        {
            this.state.statusNavegacion == true &&
            (<Navigate to="/" />)
        }
        {
            this.state.statusGet == true ?
            (<form>
                <label>Marca:</label>
                <input className='form-control' defaultValue={this.state.coche.marca} 
                type='text' ref={this.cajaMarca}/><br></br>

                <label>Modelo:</label>
                <input className='form-control' defaultValue={this.state.coche.modelo} 
                type='text' ref={this.cajaModelo}/><br></br>

                <label>Conductor:</label>
                <input className='form-control' defaultValue={this.state.coche.conductor} 
                type='text' ref={this.cajaConductor}/><br></br>

                <label>Imagen:</label>
                <input className='form-control' defaultValue={this.state.coche.imagen} 
                type='text' ref={this.cajaImagen}/><br></br>

                <button className='btn btn-outline-info' onClick={this.actualizarCoche}>
                    Actualizar coche!</button>
                
            </form>):
            (<img src={loading} style={{width: "200px", height: "200px"}} />)
        }
      </div>
    )
  }
}
