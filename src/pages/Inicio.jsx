import React, { useState } from "react";
import { getUser } from "../services/TokenLogin";
//import "./Inicio.css"
import {
    Redirect,
    Link
}from "react-router-dom";
function Inicio() {
    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ user, setUser ] = useState("defaul_user");
    console.log('token home', isLogin);
    var log_in = (isLogin != 'false')
    console.log(log_in)
    var userT = ""
    function handleGenPoem(){
        console.log('Solitando nuevo poema')

    }

    async function getName(){
        userT = await getUser(isLogin);
        setUser(userT);
    }
    getName();
    return (

        <div>
            { log_in ?
                //pagina HOME
                <div>
                        <h1>Poemas.Net</h1>
                        <div className="box-div">
                            <h2>Bienvenido</h2>
                            <h2>{user}</h2>
                            <Link className="espbutton" to='/lpo'>
                                Generar nuevo poema
                            </Link>
                            <Link className="espbutton" to='/view'>
                                Ver poemas guardados
                            </Link>
                        </div>
                    </div> 
                :
            
            <Redirect to="/Login"></Redirect>
            }
        </div>
    )
}

export default Inicio
