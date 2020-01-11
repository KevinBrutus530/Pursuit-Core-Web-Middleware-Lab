document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("button")
    let userInput = document.querySelector("input")

    const checkAnimal = async() => {
        try{
            let res = await axios.get(`http://localhost:3000/animals/${userInput.value}`)
            let answer = document.createElement("p")
            let ul = document.querySelector("ul")
            answer.innerText = `{status: ${res.data.status}, message: ${res.data.message}}`
            ul.appendChild(answer)
            userInput.innerHTML = ""
        }catch(err){
            console.log(err)
        }
    }

    btn.addEventListener("click", checkAnimal)
})