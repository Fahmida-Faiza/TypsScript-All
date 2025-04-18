"use strict";
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector(".form");
const main_container = document.querySelector(".main-container");
// resuable function
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network not ok -status : ${response.status}`);
    }
    const data = response.json();
    console.log(data);
    return data;
}
// let display the card UI
const showResultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class='card'>
        <img src=${avatar_url} alt=${login}/>
        <hr/>
        <div class="card-footer">
        <img src="${avatar_url}" alt="${login}"/>
        <a href= "${url}">Github</a>
        </div>
        </div>
        `);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
            console.log("login " + singleUser.login);
        }
    });
}
// default fun call page load
fetchUserData("https://api.github.com/users");
