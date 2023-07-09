import { Destination } from "./Destination"

const destination = new Destination()
console.log(destination)

const createDiv = () =>{
    const div = document.createElement('div')
    const content = document.createTextNode('Cargo Tracking App')
    div.append(content)
    document.body.appendChild(div)
}

createDiv()