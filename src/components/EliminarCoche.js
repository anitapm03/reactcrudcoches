import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class EliminarCoche extends Component {

    urlCoches = Global.urlCoches;

    state = {
        status: false
    }

    eliminarCoche = () => {

        var request = "api/coches/deletecoche/" + this.props.idcoche;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: '¿Seguro que quiere eliminar el coche?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar!',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(this.urlCoches + request).then(response => {
                    this.setState({
                        status: true
                    })
                })

              swalWithBootstrapButtons.fire(
                'Eliminado correctamente!'
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Operación cancelada'
              )
            }
          })


        /*var confirmar = window.confirm("¿Seguro que quiere eliminar el coche?");

        if (confirmar == true){
            axios.delete(this.urlCoches + request).then(response => {
                this.setState({
                    status: true
                })
            })
        } else {
            alert("Se ha cancelado la operación");
        }*/
    }

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle '>
        {
            this.state.status == true &&
            (<Navigate to="/" />)
        }
        <h1 style={{color: "red"}}>¿Está seguro de eliminar el coche {this.props.idcoche}?</h1>
        <button className='btn btn-outline-danger' onClick={() => this.eliminarCoche()}>
            Si, eliminar</button>
      </div>
    )
  }
}
