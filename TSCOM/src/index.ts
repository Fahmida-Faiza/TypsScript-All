const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
const main_container = document.querySelector(".main-container") as HTMLElement;


// 
interface UserData{
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string;
}

function fetchUserData(url: string){
    

}

// default fun call page load
fetchUserData("https://api.github.com/users");