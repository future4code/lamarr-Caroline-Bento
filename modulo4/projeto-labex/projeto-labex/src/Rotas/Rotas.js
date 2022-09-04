import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AdminHomePage from '../Pages/private-access/AdminHomePage';
import CreateTripPage from '../Pages/private-access/CreateTripPage';
import LoginPage from '../Pages/private-access/LoginPage';
import TripDetailsPage from '../Pages/private-access/TripDetailsPage';
import ApplicationFormPage from '../Pages/public-access/ApplicatinFormPage';
import ListTripsPage from '../Pages/public-access/ListTripsPage';

function Rotas (){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripsPage/>}/>
                <Route path="/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trip/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route path="/admin/trip/:id" element={<TripDetailsPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;