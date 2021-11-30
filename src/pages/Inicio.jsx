import React, { useState } from "react";
import { getUser } from "../services/TokenLogin";
//import "./Inicio.css"
import {
    Redirect,
    Link
}from "react-router-dom";
function Inicio() {
    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ esAdmin, setEsAdmin ] = useState(localStorage.getItem('admin'));
    const [ user, setUser ] = useState("defaul_user");
    console.log('token home', isLogin);
    console.log('Es administrador?', esAdmin);
    var log_in = (isLogin != 'false')
    var admin2 = (esAdmin != 'false')
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
            {console.log("ADMINISTRADOR2:", admin2)}
            { log_in ?
                //pagina HOME
                    <div>
                        { admin2 ? 
                            <Redirect to="/adm"></Redirect> 
                        : 
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
                        }
                    </div>
                :
            
                    <Redirect to="/Login"></Redirect>
            }
        </div>
    )
}

export default Inicio
