import React, {useState} from "react";
import { Formulario, Label, TerminosCondiciones, BotonCentrado, Boton, MensajeExito, MensajeError} from "../services/Formulario_cu";
import {
    Redirect
}from "react-router-dom";

import Input from "../services/Input_cu";
//import "./Registro.css"
import { signUp } from "../services/SignUp";

const Registro = () => {
  const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
  console.log('token home', isLogin);
  var log_in = (isLogin != 'false')
  console.log(log_in)
  //const [usuario, cambiarUs] = useState({campo:"", valido: null});
  const [nombre, cambiarNom] = useState({campo:"", valido: null});
  const [apellido, cambiarAp] = useState({campo:"", valido: null});
  const [password, cambiarPas] = useState({campo:"", valido: null});
  const [password2, cambiarPas2] = useState({campo:"", valido: null});
  const [correo, cambiarCorr] = useState({campo:"", valido: null});
  const [telefono, cambiarTel] = useState({campo:"", valido: null});
  const [terminos, cambiarTerm] = useState(false);
  const [formValido, cambiarForm] = useState(null);
  const [correoValido, cambiarCorrVal] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,12}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const validarPassword2 = () => {
     if(password.campo.length > 0){
       if(password.campo !== password2.campo){
         cambiarPas2((prevState) => {
           return {...prevState, valido:"false"}
         });
       }else{
        cambiarPas2((prevState) => {
          return {...prevState, valido:"true"}
        });
       }
     }
  }

  const onChangeTerminos = (e) => {
    cambiarTerm(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(
      //usuario.valido === "true" && 
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      terminos
      ){
        let info={
          "name": nombre.campo,
          "lastName":apellido.campo,
          "email": correo.campo,
          "password":password.campo
        };
        signUpF(info);     
        //...
      }else {
        cambiarForm(false);
      }
  }

  async function signUpF( param ){//condiciones
    console.log(param);
    let info={
      "name": param.name,
      "lastName":param.lastName,
      "email": param.email,
      "password":param.password
    };
    console.log(info);
    const answer = await signUp(info);
    console.log("ANSWER:",answer);
    if(answer){
      cambiarForm(true);
      cambiarCorrVal(true);
      //cambiarUs({campo: "", valido: ""});
      cambiarNom({campo: "", valido: null});
      cambiarAp({campo: "", valido: null});
      cambiarPas({campo: "", valido: null});
      cambiarPas2({campo: "", valido: "null"});
      cambiarCorr({campo: "", valido: null});
      cambiarTel({campo: "", valido: null});
    }else{
      cambiarCorrVal(false);
    }
  }

  return (
    <div className="reg-container">
      { log_in ?
      //pagina HOME
          <Redirect to="/Home"></Redirect>
      :
        <main>
            <div className="titulo mb-4">
                  <h1><b>Registro</b></h1>
            </div>
            <div className="form-container">
              <Formulario action="#" onSubmit={onSubmit}>
                  {/*<Input
                      estado={usuario}
                      cambiarEst={cambiarUs}
                      tipo="text"
                      label="Usuario"
                      placeholder="jhon123"
                      name="usuario"
                      leyError="El usuario puede ser de 4 a 12 digitos y solo puede contener numeros, letras y guiones."
                      expRegular={expresiones.usuario}
                  />*/}
                  <Input
                      estado={nombre}
                      cambiarEst={cambiarNom}
                      tipo="text"
                      label="Nombre(s)"
                      placeholder="Carlos German"
                      name="nomb"
                      leyError="El nombre solo puede contener letras y espacios."
                      expRegular={expresiones.nombre}
                  />
                  <Input
                      estado={apellido}
                      cambiarEst={cambiarAp}
                      tipo="text"
                      label="Apellido(s)"
                      placeholder="Hernandez Carbajal"
                      name="apellido"
                      leyError="El apellido solo puede contener letras y espacios."
                      expRegular={expresiones.nombre}
                  />
                  <Input
                      estado={password}
                      cambiarEst={cambiarPas}
                      tipo="password"
                      label="Contraseña"
                      placeholder="* * * * * * * *"
                      name="password1"
                      leyError="La contraseña debe tener una mayuscula, un número y un caracter especial"
                      expRegular={expresiones.password}
                  />
                  <Input
                      estado={password2}
                      cambiarEst={cambiarPas2}
                      tipo="password"
                      label="Repetir Contraseña"
                      placeholder="* * * * * * * *"
                      name="password2"
                      leyError="Ambas contraseñas deben ser iguales."
                      funcion={validarPassword2}//función que se ejecuta cuando hay un cambio en el input
                  />
                  <Input
                      estado={correo}
                      cambiarEst={cambiarCorr}
                      tipo="email"
                      label="Correo Electrónico"
                      placeholder="correo@ejemplo.com"
                      name="correo"
                      leyError="El correo solo puede contener letras, numeros, puntos y guiones"
                      expRegular={expresiones.correo}
                  />
                  <Input
                      estado={telefono}
                      cambiarEst={cambiarTel}
                      tipo="text"
                      label="Telefono"
                      placeholder="4491234568"
                      name="telefono"
                      leyError="El telefono solo puede tener de 7 a 14 digitos"
                      expRegular={expresiones.telefono}
                  />
                  <TerminosCondiciones className="mb-5">
                      <Label>
                          <input 
                              type="checkbox"
                              name="terminos"
                              id="terminos"
                              checked={terminos} 
                              onChange={onChangeTerminos}
                          />
                          Acepto los Terminos y Condiciones
                      </Label>
                  </TerminosCondiciones>
                  {formValido === false && <MensajeError>
                      <p>
                          <b>Error:</b> Por favor rellena el formulario correctamente.
                      </p>
                  </MensajeError>}
                  {correoValido === false && <MensajeError>
                      <p>
                          <b>Error:</b> Correo ya registrado, por favor registre otro usuario.
                      </p>
                  </MensajeError>}
                  <BotonCentrado>
                      <Boton type="submit">Enviar</Boton>
                      {formValido === true && correoValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito> && <Redirect to="/Login"></Redirect>}
                  </BotonCentrado>
              </Formulario>
            </div>
            
        </main>
      }
    </div>
  );
}

export default Registro;