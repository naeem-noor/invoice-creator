let services = []
const servicesBtn = document.getElementById("services")
const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const tasks = document.getElementById("tasks")
const footTotal = document.getElementById("foot-total")
const task2 = document.getElementById("task2")

function render(){
    if(washCar){
        washCar.addEventListener("click", function() {
        services.push(
            {
                name: "Wash Car",
                price: 10
            }
        )
        // Button will disabled after one click
        const button = document.getElementById("wash-car")
        button.disabled = true
        renderservices()
        })
    }
   if(mowLawn){
        mowLawn.addEventListener("click", function() {
        services.push(
            {
                 name: "Mow Lawn",
                 price: 20
            }
        )
        // Button will disabled after one click        
        const button = document.getElementById("mow-lawn")
        button.disabled = true
        renderservices()
        })
    }
    if(pullWeeds){
        pullWeeds.addEventListener("click", function() {
        services.push(
            {
                 name: "Pull Weeds",
                 price: 30
            }
        )
        // Button will disabled after one click        
        const button = document.getElementById("pull-weeds")
        button.disabled = true
        renderservices()
        })
    }
}
render()

function renderservices(){
    let listItems = ""
for (let i = 0; i < services.length; i++) {
    listItems += `<p id='task-name'> ${services[i]['name']}</p>
                  <p id='task-price'>$${services[i]['price']}</p>
                  `
}
tasks.innerHTML = listItems
// Sum of services from Array
const sumTotal = services =>
services.reduce((sum, { price }) => sum + price, 0)
const data = services;
const total = sumTotal(data)
footTotal.innerHTML = `$${total}`
}
// Reset Button
function resetBtn() {
location.reload()
}