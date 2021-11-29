import React, { useState } from "react";
import {
    Redirect
}from "react-router-dom";

import { listUs, usEmail } from "../services/userList";

function Usuarios() {

    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ esAdmin, setEsAdmin ] = useState(localStorage.getItem('admin'));
    const [listaUsuarios, setLista] = useState("Usuarios");
    var log_in = (isLogin != 'false');
    var admin = (esAdmin != 'false');
    var cadena = "";

    async function uList(){
        var list = await listUs(isLogin);
        cadena=""
        for(var i = 0; i < list.length; i++) {
            cadena += "id:" +list[i].id + "\n"
            cadena += "nombre:" +list[i].name + "\n"
            cadena += "apellido:" +list[i].lastname + "\n"
            cadena += "email:" +list[i].email + "\n"
            cadena += "administrador:" +list[i].isAdmin + "\n"
        }
        console.log(cadena)
        setLista(cadena);
    }
    
    async function emailUs(email){
        var userEm = await usEmail(email,isLogin);
        cadena="";
        cadena += "id:" +userEm.id + "\n";
        cadena += "nombre:" +userEm.name + "\n";
        cadena += "apellido:" +userEm.lastname + "\n";
        cadena += "email:" +userEm.email + "\n";
        cadena += "administrador:" +userEm.isAdmin + "\n";
        console.log(cadena);
        setLista(cadena);
    }

    function handleButton(){
        var email = document.getElementById("inEm").value;
        emailUs(email)
    }

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
                                    <h3>Buscar usuario</h3>
                                    <input className="ttitle" type="text" name="infoEmail" id="inEm" placeholder="Email del usuario"/>
                                    <input className="ttitle" type="text" name="infoId" id="iid" placeholder="Id del usuario"/>
                                    <button className="buscar" onClick={handleButton}>Buscar</button>
                                    <button className="buscar" onClick={uList}>Todos los usuarios</button>
                                    <p><pre>{listaUsuarios}</pre></p>
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

export default Usuarios
