export async function tokenLogin(info){
    try{
        console.log(info);
        const response = await fetch("https://magic-poems.herokuapp.com/Login",{
            method:'POST',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        if(response.ok){
            const token=await response.json();
            console.log("token1:",token.access_token);
            return token.access_token;
        }else{
            return false;
        }
    }catch(e){
        console.log(e)
    }
}
export async function genPoem(info, token){
    console.log(info);
    var ftoken = 'JWT ' + token
    console.log(ftoken)
    var url = "https://magic-poems.herokuapp.com/new-poem"
    url = url + "/"+info.keyword +"/"+info.author
    try{
        const response = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            },
        })
        if(response.ok){
            const token=await response.json();
            console.log("poema generado:",token.poem);
            return token.poem;
        }else{
            console.log(response)
            return false;
        }
    }catch(e){
        console.log(e)
    }
}

export async function getUser(token){
    var ftoken = 'JWT ' + token
    var url = "https://magic-poems.herokuapp.com/getName"
    try{
        const response = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            },
        })
        if(response.ok){
            const token=await response.json();
            console.log("poema generado:",token.name);
            return token.name;
        }else{
            console.log(response)
            return false;
        }
    }catch(e){
        console.log(e)
    }
}

export async function listPoem(token){
    var ftoken = 'JWT ' + token
    var url = "https://magic-poems.herokuapp.com/list-poem"
    try{
        const response = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            },
        })
        if(response.ok){
            const token=await response.json();
            console.log("poema generado:",token.data);
            return token.data;
        }else{
            console.log(response)
            return false;
        }
    }catch(e){
        console.log(e)
    }
}

export async function getPoem(info, token){
    var ftoken = 'JWT ' + token
    console.log(ftoken)
    var url = "https://magic-poems.herokuapp.com/get-poem"
    url = url + "/"+info.id
    try{
        const response = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            },
        })
        if(response.ok){
            const token=await response.json();
            console.log("poema recuperado:",token.poem);
            return token.poem;
        }else{
            console.log(response)
            return false;
        }
    }catch(e){
        console.log(e)
    }
}
export async function save(info, token){
    var ftoken = 'JWT ' + token
    try{
        console.log("Sí llegue",info);
        const response = await fetch("https://magic-poems.herokuapp.com/save-poem",{
            method:'POST',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            },
            body: JSON.stringify(info)
        })
        if(response.ok){
            const token=await response.json();
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e)
    }
}