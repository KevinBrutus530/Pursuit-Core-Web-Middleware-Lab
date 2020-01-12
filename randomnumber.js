document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("button")
  let userInput1 = document.querySelector("#n1")
  let userInput2 = document.querySelector("#n2")
  const spread = async() => {
      try{
          let res = await axios.get(`http://localhost:3000/random/${userInput1.value}/${userInput2.value}`)
          debugger
          let answer = document.createElement("p");
          answer.innerText = `{ status: "success", range: [${userInput1.value}, ${userInput2.value}], randPick: ${res.data}}`
          document.body.appendChild(answer)

          
      }catch(err){
          console.log(err)
      }
  }

  btn.addEventListener("click", spread)
})