import React, { useState } from "react";
import {
    Redirect
}from "react-router-dom";

import { listUs, usEmail , usId, deletUs} from "../services/userList";

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
        cadena += "email:" +userEm.email + "\n";
        console.log(cadena);
        setLista(cadena);
    }

    async function idUs(id){
        var userId = await usId(id,isLogin);
        console.log("RESPUESTA 1",userId);
        cadena="";
        cadena += "id:" +userId.id + "\n";
        cadena += "nombre:" +userId.name + "\n";
        cadena += "email:" +userId.email + "\n";
        console.log(cadena);
        setLista(cadena);
    }

    async function delUser(id){
        var msg = await deletUs(id,isLogin);
        console.log("RESPUESTA 2",msg);
        if(msg=='User Deleted'){
            cadena="Usuario "+id+" Eliminado";
        }else{
            cadena="No se encontró el usuario";
        }
        console.log(cadena);
        setLista(cadena);
    }

    function handleButton1(){
        var email = document.getElementById("inEm").value;
        emailUs(email);
    }

    function handleButton2(){
        var id = document.getElementById("iid").value;
        idUs(id);
    }

    function handleButton3(){
        var id = document.getElementById("iid").value;
        console.log("ESTE USUARIO VAS A ELIMINAR :",id)
        if(id==="1"){
            setLista("No se puede eliminar al Administrador");
        }else{
            delUser(id);
        }
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
                                    <button className="buscar" onClick={handleButton1}>Buscar por Email</button>
                                    <input className="ttitle" type="text" name="infoId" id="iid" placeholder="Id del usuario"/>
                                    <button className="buscar" onClick={handleButton2}>Buscar por ID</button>
                                    <button className="buscar2" onClick={handleButton3}>Eliminar Usuario</button>
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
