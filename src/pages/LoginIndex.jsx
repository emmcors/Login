import React, { useState } from "react";
import { tokenLogin, isAdmin } from "../services/TokenLogin";
//import { protec } from "../../services/Protected";

import {
    Redirect,
    Link
}from "react-router-dom";

import Label from "../services/Label_login";
import Input from "../services/Input_login";

const Login = () => {
    
    //estados
    const [ user, setUser] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    const [ hasError, setHasError ] = useState(false);
    const [ esAdmin, setEsAdmin] = useState(null);
    console.log('token login', isLogin);
    var log_in = (isLogin !== 'false')
    console.log(log_in)
    //funciones
    function handleChange(name, value){
        if(name === 'usuario'){ //USUARIO
            setUser(value);//variable para almacenar
            setHasError(false);
        }else{                  //CONTRASEÑA
            if (value.length < 8){
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    };

    async function ifMatch( param ){//condiciones
        if(param.user.length > 0 && param.password.length > 0){
            let info={
                "email": param.user,
                "password": param.password
            };
            const token = await tokenLogin(info);

            const admin = await isAdmin(token);

            console.log("VALOR DEL TOKEN:", token);

            if(token!==false){
                if(admin){
                    console.log("Es Administrador");
                    setEsAdmin(true);
                }else{
                    console.log("No es administrador");
                    setEsAdmin(false);
                }
                const { user , password} = param;
                let ac = { user , password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                localStorage.setItem('token', token);
                localStorage.setItem('admin', admin);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
                console.log("isLogin:",isLogin);
                console.log("hasError1.5:",hasError);
            }
        } else {
            setIsLogin(false);
        }
    }

    function handleSubmit(){
        let account = { user, password }
        console.log("ACCOUNT:",account);
        if(account){
            ifMatch(account);
        }
    };

    return(
        <div className= "login-container">
            {console.log("ADMINISTRADOR1:", esAdmin)}
            {console.log("LOG_IN:", log_in)}
            { log_in ?
            //pagina HOME
                <div>
                    { esAdmin ? 
                        <Redirect to="/adm"></Redirect> 
                    : 
                        <Redirect to="/Home"></Redirect>
                    }
                </div>
            :
                //pagina LOGIN
                <div className="login-content">
                        <h1>¡Bienvenido a Poemas.Net!</h1>
                    {hasError &&
                        <label className = 'label-alert'> Su contraseña o usuario son incorrectos,
                            o no existen en nuestra plataforma
                        </label> 
                    }
                    <div className="formulario container-fluid w-75">
                        <Label text='Correo Electrónico'/>
                        <Input
                            attribute={{
                                id: 'usuario',
                                name: 'usuario',
                                type: 'text',
                                placeholder: 'ingrese su correo'
                            }}
                            handleChange={handleChange}
                        />
                        <Label text='Contraseña'/>
                        <Input
                            className="buscar"
                            attribute={{
                                id: 'contraseña',
                                name: 'contraseña',
                                type: 'password',
                                placeholder: 'ingrese su contraseña'
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />

                        { passwordError &&
                            <label className="label-alert">
                                ( Contraseña incompleta )
                            </label> 
                        }

                        <div className="submit-button-container">
                            <button onClick={ handleSubmit }>
                                Ingresar
                            </button>
                        </div>
                        <div className="my-3">
                            <span className="alert-gray">No tienes cuenta? <Link className="click-cont" to="/user">Regístrate</Link></span>
                        </div>
                    </div>
                </div>
            
            }
        </div>
    )
};

export default Login;