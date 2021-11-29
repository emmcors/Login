import React, { useState } from "react";
import {
    Redirect,
    Link
}from "react-router-dom";

function Poemas() {

    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ esAdmin, setEsAdmin ] = useState(localStorage.getItem('admin'));
    var log_in = (isLogin != 'false');
    var admin = (esAdmin != 'false');

    return (
        <div>
            { log_in ?
                //pagina HOME
                    <div>
                        { admin ? 
                            <div>
                                <h1>Poemas.Net</h1>
                                <div className="box-div">
                                    <h2>Administrador</h2>
                                </div>
                            </div>
                        : 
                            <Redirect to="/Home"></Redirect> 
                        }
                    </div>
                :
            
                    <Redirect to="/Login"></Redirect>
            }
        </div>
    )
}

export default Poemas
