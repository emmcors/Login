import React, { useState } from "react";
import { genPoem, save } from "../services/TokenLogin";
//import "./Inicio.css"
import {
    Redirect
}from "react-router-dom";

function Inicio() {
    const [ isLogin, setIsLogin ] = useState(localStorage.getItem('token'));
    console.log('token home', isLogin);
    var log_in = (isLogin != 'false')
    console.log(log_in)

    var poemGen = "";
    var fpoem = "";
    var toSave = [];
    const [poemrender, setPoemrender] = useState("No hay poema generado");
    function handleButtonn(){
        console.log('Solitando nuevo poema')
        var key = document.getElementById("keyw").value;
        var author = document.getElementById("autor").value;

        console.log(key, author)
        genP(key, author);
    }
    async function genP(key, autor){
        let info={
            "keyword": key,
            "author": autor
        }
        poemGen = await genPoem(info, isLogin)
        console.log(poemGen)
        for (let i = 0; i < poemGen.length; i++) {
            fpoem += poemGen[i] + "\n"
            toSave.push(poemGen[i]);
        }
        setPoemrender(fpoem);
        console.log(fpoem)
        console.log("resultado",toSave)
    }

    function saveButton(){
        var tit = document.getElementById("tp").value;
        var key = document.getElementById("keyw").value;
        var tts = poemrender.split("\n");
        tts.pop();
        console.log("antes ",poemrender);
        let account = { tit, key, tts};
        console.log(tts);
        if(account){
            save2(account);
        }
    }
    async function save2(param){
        console.log(param)
        let info={
            "title": param.tit,
            "keyword": param.key,
            "poem": param.tts
        };
        const token = await save(info, isLogin);
        console.log("tokenY:", token);
    }

    return (
        <div>
            { log_in ?
                //pagina HOME
                <div >
                    <div>
                        <h1>Poemas</h1>
                        <div className="inputs">
                            <h2>Generar un poema</h2>
                            <form action="">
                                <input type="text" name="keyword" id="keyw" />
                                <select name="autor" id="autor">
                                    <option value="OctavioPaz">Octavio Paz</option>
                                    <option value="PabloNeruda">Pablo Neruda</option>
                                    <option value="JoseLuisBorges">Jos?? Luis Borges</option>
                                </select>
                            </form>
                            <button onClick={handleButtonn}>Generar Poema</button>
                        </div>
                        <div className="box-div">
                            <input className="ttitle" type="text" name="titlepoem" id="tp" placeholder="Titulo de su poema"/>
                            <button className="saveButton" onClick={saveButton}>Save</button>
                            <p>{poemrender}</p>
                            <h2>Pablo Neruda (Ejemplo)</h2>
                            <p>
                            Me gustas cuando callas porque est??s como ausente,<br />
                            y me oyes desde lejos, y mi voz no te toca.<br />
                            Parece que los ojos se te hubieran volado<br />
                            y parece que un beso te cerrara la boca.<br />
                            </p>
                            <p>
                            Como todas las cosas est??n llenas de mi alma<br />
                            emerges de las cosas, llena del alma m??a.<br />
                            Mariposa de sue??o, te pareces a mi alma,<br />
                            y te pareces a la palabra melancol??a.<br />
                            </p>
                            <p>
                            Me gustas cuando callas y est??s como distante.<br />
                            Y est??s como quej??ndote, mariposa en arrullo.<br />
                            Y me oyes desde lejos, y mi voz no te alcanza:<br />
                            d??jame que me calle con el silencio tuyo.<br />
                            </p>
                            <p>
                            D??jame que te hable tambi??n con tu silencio<br />
                            claro como una l??mpara, simple como un anillo.<br />
                            Eres como la noche, callada y constelada.<br />
                            Tu silencio es de estrella, tan lejano y sencillo.<br />
                            </p>
                            <p>
                            Me gustas cuando callas porque est??s como ausente.<br />
                            Distante y dolorosa como si hubieras muerto.<br />
                            Una palabra entonces, una sonrisa bastan.<br />
                            Y estoy alegre, alegre de que no sea cierto.   <br /> 
                            </p>
                            <h2>Octavio Paz</h2>
                            <p>
                            Salta la palabra<br />
                            adelante del pensamiento<br />
                            adelante del sonido<br />
                            la palabra salta como un caballo<br />
                            adelante del viento<br />
                            como un novillo de azufre<br />
                            adelante de la noche<br />
                            se pierde por las calles de mi cr??neo<br />
                            en todas partes las huellas de la fiera<br />
                            en la cara del ??rbol el tatuaje escarlata<br />
                            en la frente del torre??n el tatuaje de hielo<br />
                            en el sexo de la iglesia el tatuaje el??ctrico<br />
                            sus u??as en tu cuello<br />
                            sus patas en tu vientre<br />
                            la se??al violeta<br />
                            el tornasol que gira hasta el blanco<br />
                            hasta el grito hasta el basta<br />
                            el girasol que gira como un ay desollado<br />
                            la firma del sin nombre a lo largo de tu piel<br />
                            en todas partes el grito que ciega<br />
                            la oleada negra que cubre el pensamiento<br />
                            la campana furiosa que ta??e en mi frente<br />
                            la campana de sangre en mi pecho<br />
                            la imagen que r??e en lo alto de la torre<br />
                            la palabra que revienta las palabras<br />
                            la imagen que incendia todos los puentes<br />
                            la desaparecida en mitad del abrazo<br />
                            la vagabunda que asesina a los ni??os<br />
                            la idiota la mentirosa la incestuosa<br />
                            la corza perseguida<br />
                            la mendiga prof??tica<br />
                            la muchacha que en mitad de la vida<br />
                            me despierta y me dice acu??rdate<br />
                            </p>
                            <h2>Jos?? Luis Borges</h2>
                            <p>
                            En su grave rinc??n, los jugadores<br />
                            rigen las lentas piezas. El tablero<br />
                            los demora hasta el alba en su severo<br />
                            ??mbito en que se odian dos colores.<br />
                            </p>
                            <p>
                            Adentro irradian m??gicos rigores<br />
                            las formas: torre hom??rica, ligero<br />
                            caballo, armada reina, rey postrero,<br />
                            oblicuo alfil y peones agresores.<br />
                            </p>
                            <p>
                            Cuando los jugadores se hayan ido,<br />
                            cuando el tiempo los haya consumido,<br />
                            ciertamente no habr?? cesado el rito.<br />
                            </p>
                            <p>
                            En el Oriente se encendi?? esta guerra<br />
                            cuyo anfiteatro es hoy toda la tierra.<br />
                            Como el otro, este juego es infinito.<br />
                            </p>
                            <p>
                                        II
                            </p>
                            <p>
                            Tenue rey, sesgo alfil, encarnizada<br />
                            reina, torre directa y pe??n ladino<br />
                            sobre lo negro y blanco del camino<br />
                            buscan y libran su batalla armada.<br />
                            </p>
                            <p>
                            No saben que la mano se??alada<br />
                            del jugador gobierna su destino,<br />
                            no saben que un rigor adamantino<br />
                            sujeta su albedr??o y su jornada.<br />
                            </p>
                            <p>
                            Tambi??n el jugador es prisionero<br />
                            (la sentencia es de Omar) de otro tablero<br />
                            de negras noches y blancos d??as.<br />
                            </p>
                            <p>
                            Dios mueve al jugador, y ??ste, la pieza.<br />
                            ??Qu?? Dios detr??s de Dios la trama empieza<br />
                            de polvo y tiempo y sue??o y agon??as?<br />
                            </p>
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