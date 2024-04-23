let userData = [
    {id:1,name:'Ali',family:'Mohammady'},
    {id:2,name:'Melika',family:'Hossini'},
    {id:3,name:'Mersad',family:'Mohammad Hossini'},
    {id:4,name:'Sanaz',family:'Firozbakht'},
    {id:5,name:'Amir hosin',family:'Deghani'},

    {id:6,name:'Hossin',family:'Resheri'},
    {id:7,name:'Fateme',family:'Deghani'},
    {id:8,name:'Reza',family:'Mansori'},
    {id:9,name:'shyan',family:'Safari'},
    {id:10,name:'Ali reza',family:'Hossini'},

    {id:11,name:'Mohammad',family:'Khabar'},
    {id:12,name:'Sahar',family:'Dolati'},
    {id:13,name:'Azar',family:'Najafi'},
    {id:14,name:'Hadi',family:'Najafi'},
    {id:15,name:'Mehdi',family:'Najafi'},

    {id:16,name:'Kobra',family:'Kamily'},
    {id:17,name:'Sobhan',family:'Mohammady'},
]

const userListContainer = document.getElementById("list")
const paginationContainer = document.getElementById("pagination")

let currentPage = 1
let rowCount  = 5


function displayUsersList(allUserArry, userContainer, rowsCount, currentPage) {
    userContainer.innerHTML = ""

    let end = rowsCount * currentPage // 1 * 5 = 5 end index is 5
    let start = end - rowCount // 5 - 5 start index is 0

    let paginatedUsers = allUserArry.slice(start, end)

    paginatedUsers.forEach(user => {
        let userElement = document.createElement("div")
        userElement.classList.add("item")
        userElement.innerHTML = `${user.name} ${user.family}`

        userContainer.append(userElement)
    });
}

function setUpPagenation(allUserArry, pagesContainer, rowsCount) {
    pagesContainer.innerHTML = ""
    let pageCount = Math.ceil(allUserArry.length / rowsCount)

    for(let i = 1; i < pageCount + 1; i++) {
        let btn = buttonGenerator(i, allUserArry)
        pagesContainer.append(btn)
    }
}

function buttonGenerator(page, allUserArry) {
    let button = document.createElement("button")
    button.innerHTML = page

    if(page === currentPage) {
        button.classList.add("active")
    }

    button.addEventListener("click" , () => {
        currentPage = page
        displayUsersList(allUserArry, userListContainer, rowCount, currentPage)

        let prevPage = document.querySelector("button.active")
        prevPage.classList.remove("active")

        button.classList.add("active")
    })
    
    return button
}

displayUsersList(userData, userListContainer, rowCount, currentPage)
setUpPagenation(userData, paginationContainer, rowCount)