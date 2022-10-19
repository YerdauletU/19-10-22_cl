// function createPerson(newFullName = "default name", newAge = 1, newEmail = "asd@mail.ru"){
//     return {
//         fullName: newFullName,
//         age: newAge,
//         email: newEmail
//     }
// }

// function showName(obj){
//     console.log(obj.fullName.split(' ')[1]);
// }

// let person2 = createPerson();
// showName(person2);

///////////////////////////////////////////////////////////////////////////////////////////////

let user = {
    login: "Erda",
    passwords: ["asd123", "qwerty"],
    location: {
        city: "Almaty",
        street: "Navoi",
    },
    login_func: function() {
        console.log(`${this.login} logged in`)
    }
}

user.login_func();