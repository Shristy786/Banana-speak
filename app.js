var btnTranslate=document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output");

const serverURL="https://api.funtranslations.com/translate/minion.json";

function  getTranslationUrl(text)
{
    return (serverURL+ "?" + "text =" +text);
}
function errorHandler(error)
{
    console.log("error occured",error);
   
}
function clickHandler() {
   
    var inputText=txtInput.value;
   fetch(getTranslationUrl(inputText))
   
     .then(response => response.json())
   
    
     .then(json => {  
       var translatedText=json.contents.translated;
         outputDiv.innerText=translatedText;
     })
     .catch(errorHandler) 
};

btnTranslate.addEventListener("click", clickHandler)



