export async function listUs(token){
    var ftoken = 'JWT ' + token
    try{
        const lista = await fetch("https://magic-poems.herokuapp.com/list-users",{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            }
        })
        if(lista.ok){
            const jsond = await lista.json();
            console.log("jsond.data",jsond.data);
            return jsond.data;
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}

export async function usEmail(email, token){
    var ftoken = 'JWT ' + token
    var url= "https://magic-poems.herokuapp.com/getUserInfoEmail/"+email
    try{
        const user = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            }
        })
        if(user.ok){
            const jsond = await user.json();
            return jsond;
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}

export async function usId(id, token){
    var ftoken = 'JWT ' + token
    var url= "https://magic-poems.herokuapp.com/getUserInfoId/"+id
    console.log("EL ID ES:", id)
    try{
        const user = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            }
        })
        if(user.ok){
            const jsond = await user.json();
            return jsond;
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}

export async function deletUs(id, token){
    var ftoken = 'JWT ' + token
    var url= "https://magic-poems.herokuapp.com/deleteUser/"+id
    console.log("EL ID ES:", id)
    try{
        const msg = await fetch(url,{
            method:'DELETE',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            }
        })
        if(msg.ok){
            const jsond = await msg.json();
            return jsond.msg;
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}