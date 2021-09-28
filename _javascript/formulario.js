function validaFormulario() {
    console.log("Executando")
    var inputName = document.getElementById("name") 
    if (inputName.value.length<10 || inputName.value.length>80)
    {   
        console.log("Erro Nome")
        return false
    }      

    var inputNickName = document.getElementById("nickname") 
    if (inputNickName.value.length<2 || inputNickName.value.length>20)
    {
        console.log("Erro Nick")
        return false
    }      

    var inputDay = document.getElementById("day") 
    if ((inputDay.value.length<1 || inputDay.value.length>2) && (inputDay.value<1 || inputDay.value>31))
    {
        console.log("Erro day")
        return false
    }      
    
    var inputMonth = document.getElementById("month") 
    if ((inputMonth.value.length<1 || inputMonth.value.length>2) && (inputMonth.value<1 || inputMonth.value>12))
    {
        console.log("Erro month")
        return false
    }     
    
    var inputYear = document.getElementById("year") 
    if ((inputYear.value.length<1 || inputYear.value.length>4) && (inputYear.value<1900 || inputYear.value>2021))
    {
        console.log("Erro year")
        return false
    } 
    
    var inputCpf = document.getElementById("cpf") 
    if ((inputCpf.value.length==14) && !(inputCpf.value.match(/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/)))

    {
        console.log("Erro cpf")
        return false
    }      

    var inputTeam = document.getElementById("team_id")
    //if (inputTeam.value)
    console.log(inputTeam.value)

    var inputSport = document.querySelectorAll("input[name=sport]")
    
    var inputok = false
    for(var input of inputSport){
        if(input.checked){
        inputok = true
        }
    }
    if (inputok == false){
        console.log("Erro Checkbox")
        return false
    
    }
    return true
    }

    function retornaJson(){
        var Json = {}
        var inputName = document.getElementById("name") 
        Json["name"] = inputName.value
        
        var inputNickName = document.getElementById("nickname") 
        Json["nickname"] = inputNickName.value

        var inputDay = document.getElementById("day") 
      
        var inputMonth = document.getElementById("month") 
        
        var inputYear = document.getElementById("year") 

        Json["birth_date"] = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`

      
        var inputCpf = document.getElementById("cpf") 
        Json["cpf"] = inputCpf.value

        var inputTeam = document.getElementById("team_id") 
        Json["team_id"] = inputTeam.value

        var inputSport = document.querySelectorAll("input[name=sport]")

        var sports = []

        for(var input of inputSport){
            if(input.checked){
            sports .push(input.id)
            }
        }
        Json["sports"] = sports
        console .log(Json)
        return Json
    }
var botaoEnviar = document.getElementById("enviar")
//botaoEnviar.addEventListener("click", validaFormulario)
botaoEnviar.addEventListener("click", retornaJson)
