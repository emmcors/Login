import React, { useState } from "react";
import { getUser } from "../services/TokenLogin";
import {
    Redirect,
    Link
}from "react-router-dom";


const Admin = () => {

    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ esAdmin, setEsAdmin ] = useState(localStorage.getItem('admin'));
    const [ user, setUser ] = useState("defaul_user");
    var log_in = (isLogin != 'false')
    var admin = (esAdmin != 'false')
    var userT = ""

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
                        { admin ? 
                            <div>
                                <h1>Poemas.Net</h1>
                                <div className="box-div">
                                    <h2>Administrador</h2>
                                    <h2>{user}</h2>
                                    <Link className="espbutton" to='/users'>
                                        Usuarios
                                    </Link>
                                    <Link className="espbutton" to='/poems'>
                                        Poemas
                                    </Link>
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
export default Admin;
