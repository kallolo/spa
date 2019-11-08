import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import NotFound from './pages/NotFound.js';
import {AuthContextProvider} from './context/AuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.js'; //Middleware untuk memproteksi login
// import Hello from './components/Hello.js'
import * as serviceWorker from './serviceWorker';

const RootApp = () =>(
    <AuthContextProvider>
    <BrowserRouter>
        <Switch>
           <Route exact path="/" component={App}/>
           <Route path="/login" component={Login}/>
           <ProtectedRoute path="/profile" component={Profile}/> {/* Menggunakan ProtectedRoute Karna Route Profile Hanya Bisa Diakses Jika Sudah Login */}
           <Route component={NotFound}/>{/* jika halman tidak ditemukan */}
        </Switch>
    </BrowserRouter>
    </AuthContextProvider>
)

// ReactDOM.render(<Hello username={"Mustajib"} />, document.getElementById('root'));
ReactDOM.render(<RootApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
