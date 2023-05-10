// const name = document.querySelector(".name")
// const surname = document.querySelector(".surname")
// const username = document.querySelector(".username")
// const email = document.querySelector(".email")
// const password = document.querySelector(".password")

// class Person {
//         constructor(name,surname,username,email,password){
//             this.name = name;
//             this.surname = surname;
//             this.username = username;
//             this.email = email;
//             this.password = password;
//         }
//     }


//     let Sahib = new Person(name,surname,username,email,password);


//     const registerBtn = document.querySelector('.btn')

//     registerBtn.addEventListener('click',() => {
//         addData()
//     })

// function addData(){
//     // const user = document.getElementById("user").value;
//     // const email = document.getElementById("email").value;
//     // const pass = document.getElementById("pwd").value;

//     const localName = name.value;
//     const localSurname = surname.value;
//     const localUser = username.value;
//     const localEmail = email.value;
//     const localPass = password.value;
    
//     // adding data to localstorage
//     localStorage.setItem("name",localName);
//     localStorage.setItem("surname",localSurname);
//     localStorage.setItem("username",localUser);
//     localStorage.setItem("email",localEmail);
//     localStorage.setItem("password",localPass);
// }




const registerBtn = document.querySelector('.btn')

class Person {
        constructor(name,surname,username,email,password){
            this.name = name;
            this.surname = surname;
            this.username = username;
            this.email = email;
            this.password = password;
        }
    }

    let dataUser = JSON.parse(localStorage.getItem('userData'));

    let data;
    if(dataUser){
        data = dataUser
    }else{
        data = [];
    }


    registerBtn.addEventListener('click',() => {
        const inputName = document.querySelector("#name").value
        const inputSurname = document.querySelector("#surname").value
        const inputUsername = document.querySelector("#username").value
        const inputEmail = document.querySelector("#email").value
        const inputPsw = document.querySelector("#password").value

       let Sahib = new Person(inputName,inputSurname,inputUsername,inputEmail,inputPsw);
       data.push(Sahib);
       inputName.value = "";
       inputSurname.value = "";
       inputUsername.value = "";
       inputEmail.value = "";
       inputPsw.value = "";
       localStorage.setItem('userData',JSON.stringify(data));


    })

