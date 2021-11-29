import React, { useState } from "react";
import {
    Redirect,
    Link
}from "react-router-dom";

import { pList, delPoem } from "../services/poemsList";

function Poemas() {

    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ esAdmin, setEsAdmin ] = useState(localStorage.getItem('admin'));
    const [listaPoemas, setLista] = useState("Poemas");
    var log_in = (isLogin != 'false');
    var admin = (esAdmin != 'false');
    var cadena = "";

    async function poemsL(id){
        var list = await pList(id, isLogin);
        cadena=""
        for(var i = 0; i < list.length; i++) {
            cadena += "id:" +list[i].id + "\n"
            cadena += "titulo:" +list[i].title + "\n"
        }
        console.log(cadena)
        setLista(cadena);
    }

    async function delPoema(id){
        var msg = await delPoem(id,isLogin);
        console.log("RESPUESTA 2",msg);
        if(msg=='Poem Deleted'){
            cadena="Poema "+id+" Eliminado";
        }else{
            cadena="No se encontró el poema";
        }
        console.log(cadena);
        setLista(cadena);
    }

    function handleButton1(){
        var id = document.getElementById("idUser").value;
        poemsL(id);
    }

    function handleButton2(){
        var id = document.getElementById("idPoems").value;
        delPoema(id);
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
                                    <h3>Buscar poemas</h3>
                                    <input className="ttitle" type="text" name="usuarioId" id="idUser" placeholder="ID del usuario"/>
                                    <button className="buscar" onClick={handleButton1}>Obtener Poemas</button>
                                    <input className="ttitle" type="text" name="poemsId" id="idPoems" placeholder="ID del poema"/>
                                    <button className="buscar" onClick={handleButton2}>Eliminar Poema</button>
                                    <p><pre>{listaPoemas}</pre></p>
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
