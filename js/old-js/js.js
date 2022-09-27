"use strict"
import users from "./data.js";
import { filter, find } from "./filters.js"

function generateCard(users) {
    // 1. Generar el código html que voy a poner en la página
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código
    let html = '';
    for(let i = 0; i < users.length; i++) {
        html += `<tr>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].age}</td>
                </tr>`;
    }
    const container = document.getElementById('users-container');
    container.innerHTML = html;
}


function condition(user) {
    const input = document.getElementById('name');
    const userNameLowerCase = user.name.toLowerCase();
    const inputLowerCase = input.value.toLowerCase();
    return userNameLowerCase.includes(inputLowerCase);
}

function filterByName() {
    const filteredUsers = filter(users, condition);
    generateCard(filteredUsers);
}

generateCard(users);


window.filterByName = filterByName;




