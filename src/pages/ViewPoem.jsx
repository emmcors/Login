import React, { useState } from "react";
//import "./Inicio.css"
import { getPoem, listPoem } from "../services/TokenLogin";
import {
    Redirect
}from "react-router-dom";

function Inicio() {
    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    console.log('token home', isLogin);
    var log_in = (isLogin != 'false')
    console.log(log_in)

    var poemGen = "";
    var fpoem = ""
    const [poemrender, setPoemrender] = useState("No hay poema recuperado");
    var titleGen = "";
    var ftitle = ""
    const [titlerender, setTitlerender] = useState("No hay titulo recuperado");
    function handleButtonn(){
        let idPoem = document.getElementById("IDPOEM").value;
        console.log("ID!!!!",idPoem);
        getP(idPoem);
    }
    async function getListpoems(){
        var cuisines = await listPoem(isLogin);
        console.log("cunisss", cuisines[0]["id"]);
        var sel = document.getElementById('IDPOEM');
        while (sel.options.length > 0) {                
            sel.remove(0);
        } 
        for(var i = 0; i < cuisines.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = cuisines[i]["title"];
            opt.value = cuisines[i]["id"];
            sel.appendChild(opt);
        }
    }
    function cargarpoemas(){
        getListpoems();
    }
    async function getP(infooo){
        console.log("infoooo::",infooo)
        let info={
            "id": infooo
        }
        poemGen = await getPoem(info, isLogin)
        for (let i = 0; i < poemGen.length; i++) {
            fpoem += poemGen[i] + "\n"
        }
        setPoemrender(fpoem);
        var selected=document.getElementById("IDPOEM");
        setTitlerender(selected.options[selected.selectedIndex].text);
        console.log("POEMA:",fpoem);
        console.log("TITULO:",selected.options[selected.selectedIndex].text);
    }
    return (
        <div>
            { log_in ?
                //pagina HOME
                <div >
                    <div>
                        <h1>Poemas</h1>
                        <div className="inputs">
                            <h2>Elija un poema</h2>
                            <form action="">
                                <select name="autor" id="IDPOEM">
                                </select>
                            </form>
                            <button onClick={handleButtonn}>Recuperar poema</button>
                            <button onClick={cargarpoemas}>Cargar lista poemas</button>
                        </div>
                        <div className="box-div">
                            <h2>{titlerender}</h2>
                            <p>{poemrender}</p>
                        </div>
                    </div>
                </div>        
                :
            <Redirect to="/Login"></Redirect>
            }
        </div>
    )
}

export default Inicio
