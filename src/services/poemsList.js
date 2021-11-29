export async function pList(id, token){
    var ftoken = 'JWT ' + token
    var url= "https://magic-poems.herokuapp.com/list-poem-admin/"+id
    try{
        const msg = await fetch(url,{
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': ftoken
            }
        })
        if(msg.ok){
            const jsond = await msg.json();
            return jsond.data;
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}

export async function delPoem(id, token){
    var ftoken = 'JWT ' + token
    var url= "https://magic-poems.herokuapp.com/deletePoemAdmin/"+id
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