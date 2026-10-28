const displaycalculatornum=(content)=>{
result.value+=content
}

const clearallvaleinscreen=()=>{
    result.value=""
}

const clearlastdigit=()=>{
    result.value=result.value.slice(0,-1)

}

const finalresult=()=>{
    try{
    result.value=eval (result.value)
    }catch{
        result.value="invalid input"
    }
}