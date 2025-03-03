
function inputValueByValue (id) {
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value)
    return convertValue;
    
}

function inputTextByValue (id) {
    const value = document.getElementById(id).innerText;
    const convertText = parseFloat(value);
    return convertText;
}

function setInnerText (id,value) {
    document.getElementById(id).innerText = value;

}

function toggleBox (id,status) {
    document.getElementById(id).style.display = status;
    }
