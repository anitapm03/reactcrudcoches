import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import HomeCoches from './HomeCoches';
import DetalleCoche from './DetalleCoche';
import CreateCoche from './CreateCoche';
import UpdateCoche from './UpdateCoche';
import EliminarCoche from './EliminarCoche';

export default class Router extends Component {
  render() {
    //funciones
    function DetalleCocheElement() {
        var {idcoche} = useParams();
        return <DetalleCoche idcoche={idcoche} />
    }

    function UpdateCocheElement() {
        var {idcoche} = useParams();
        return <UpdateCoche idcoche={idcoche} />
    }

    function EliminarCocheElement() {
        var {idcoche} = useParams();
        return <EliminarCoche idcoche={idcoche} />
    }

    return (
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element={<HomeCoches />} />
            <Route path='/detalle/:idcoche' element={<DetalleCocheElement />} />
            <Route path='/crearcoche' element={<CreateCoche />} />
            <Route path='/updatecoche/:idcoche' element={<UpdateCocheElement />} />
            <Route path='/eliminarcoche/:idcoche' element={<EliminarCocheElement />} />
        </Routes>
        </BrowserRouter>
    )
  }
}
