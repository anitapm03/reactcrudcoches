import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {

    urlCoches = Global.urlCoches;

    state = {
        statusNavegacion: false
    }

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    cajaFile = React.createRef();

    createCoche = (e) => {
        if(e!=null){
            e.preventDefault();
        }

        var id = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var data = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        var request = "api/Coches/InsertCoche";

        axios.post(this.urlCoches + request, data).then(response => {
            this.setState({
                statusNavegacion: true
            })
        })

    }

    subirImagen = (e) => {
        e.preventDefault();
        var archivo = this.cajaFile.current.value;
        console.log(archivo);
    }

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle '>
        <h1>Nuevo coche</h1>

        {
            this.state.statusNavegacion == true &&
            (<Navigate to="/"/>)
        }

        <form>
            <label>ID: </label>
            <input type='text' ref={this.cajaId} className='form-control'/><br></br>

            <label>Marca: </label>
            <input type='text' ref={this.cajaMarca} className='form-control'/><br></br>

            <label>Modelo: </label>
            <input type='text' ref={this.cajaModelo} className='form-control'/><br></br>

            <label>Conductor: </label>
            <input type='text' ref={this.cajaConductor} className='form-control'/><br></br>

            <label>Enlace imagen: </label>
            <input type='text' ref={this.cajaImagen} className='form-control'/><br></br>

            <button className='btn btn-outline-success' onClick={this.createCoche}>Crear!</button>
        </form>
        <br></br>
        <form>
            <label>Subir imagen</label>
            <input type='file' className='form-control' ref={this.cajaFile} />

            <button className='btn btn-danger' onClick={this.subirImagen}>Subir imagen</button>
        </form>

      </div>
    )
  }
}
