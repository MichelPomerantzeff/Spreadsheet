const url = 'data.json'

const content = document.getElementById('content')
const btnSearch = document.getElementById('search')
const n1 = document.getElementById('minInput')
const n2 = document.getElementById('maxInput')
const total = document.getElementById('total')

fetch(url)
    .then(res => res.json()) // Returns Promise
    .then(x => renderSpreadsheet(x))

const renderSpreadsheet = x => { // function renders all the elements

    for (let i = 0; i < x.length; i++) {
        var sId = document.createElement("span");
        var sName = document.createElement("span");
        var sEmail = document.createElement("span");
        var sGender = document.createElement("span");
        var sAge = document.createElement("span");

        sId.innerHTML = x[i].id
        sName.innerHTML = x[i].name
        sEmail.innerHTML = x[i].email
        sGender.innerHTML = x[i].gender
        sAge.innerHTML = x[i].age

        sId.className = "sId";
        sName.className = "sName";
        sEmail.className = "sEmail";
        sGender.className = "sGender";
        sAge.className = "sAge";

        var div = document.createElement("div");

        div.appendChild(sId)
        div.appendChild(sName)
        div.appendChild(sEmail)
        div.appendChild(sGender)
        div.appendChild(sAge)

        content.appendChild(div)

        div.className = "conteudao"
        total.innerHTML = `Total = ${i+1}`
    }
}

const filterByAge = () => { // function filters elements by age and returns a new array

    content.innerHTML = ""
    var count = 0

    fetch(url)
        .then(res => res.json())
        .then(x => {
            for (let i = 0; i < x.length; i++) {
                if (x[i].age > n1.value && x[i].age < n2.value) {

                    count ++
                    total.innerHTML = `Total = ${count}`

                    var sId = document.createElement("span");
                    var sName = document.createElement("span");
                    var sEmail = document.createElement("span");
                    var sGender = document.createElement("span");
                    var sAge = document.createElement("span");

                    sId.innerHTML = x[i].id
                    sName.innerHTML = x[i].name
                    sEmail.innerHTML = x[i].email
                    sGender.innerHTML = x[i].gender
                    sAge.innerHTML = x[i].age

                    sId.className = "sId";
                    sName.className = "sName";
                    sEmail.className = "sEmail";
                    sGender.className = "sGender";
                    sAge.className = "sAge";

                    var div = document.createElement("div");

                    div.appendChild(sId)
                    div.appendChild(sName)
                    div.appendChild(sEmail)
                    div.appendChild(sGender)
                    div.appendChild(sAge)

                    content.appendChild(div)

                    div.className = "conteudao"

                    

                } else if (n1.value == "" || n2.value == "") { // only search for a new array if both the inputs are filled with numbers
                    alert("The boxes must be filled with numbers from 1 to 100")
                    n1 = ""
                    n2 = ""
                }
            }
        })
}

btnSearch.addEventListener('click', filterByAge)