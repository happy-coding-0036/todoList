


const buildElement = function (element, style, content2, idName) {
    
    const newElement = document.createElement(element);
    newElement.textContent = content2
    newElement.id = idName;
    newElement.classList.add(style)

    return newElement
}

const button = buildElement("button", "buttonStyle", "submit", "buttonId")

const content = document.getElementById("content")

const inputBox = document.createElement("input")



inputBox.setAttribute("id", "inputId");

inputBox.classList.add("inputStyle")

content.appendChild(button)
content.appendChild(inputBox)



const buildList = function(event) {
   
    const newElement = document.createElement("input");
  
    newElement.type = "checkbox"
   var description = document.createTextNode(inputBox.value);
    newElement.value = "pair";   
    newElement.classList.add("listStyle")
    
    const container = buildElement("div", "navConStyle", null, "navId")
    const attachedlist = content.appendChild(container)
    attachedlist.appendChild(newElement)
   attachedlist.appendChild(description)
  inputBox.value = ""

}




export { buildList }




