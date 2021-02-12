


const buildElement = function (element, style, content2, idName) {
    
    const newElement = document.createElement(element);
    newElement.textContent = content2
    newElement.id = idName;
    newElement.classList.add(style)

    return newElement
}
const content = document.getElementById("content")

const buildButton = function() {


  const button = buildElement("button", "buttonStyle", "submit", "buttonId")
  const inputBox = buildElement("input", "inputStyle", null, "inputId")
  content.appendChild(button)
  content.appendChild(inputBox)

}

const buildList = function() {
   
    const listItem = buildElement("li", "navStyle", "submit","listId")
   

    const container = buildElement("ul", "navConStyle", null, "navId")

    const attachedlist = content.appendChild(container)
    
    attachedlist.appendChild(listItem)

}




export { buildButton, buildList }




