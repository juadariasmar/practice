'use strict'

//*******************************
//*** working with promises 

let button = document.getElementById('button');
let messages = document.getElementById('messages')
let container = document.getElementById('container');
let countFlags = document.getElementById('flags');

button.addEventListener('click', function() {

    getPosts()
        .then(data => data.json())
        .then(posts => {
            showData(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            showFlags(countries);
        })
        .catch(error => {
            messages.classList.toggle('hide');
            messages.innerHTML = error;
            setTimeout(() => messages.classList.toggle('hide'), 3000);
        })

});

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    return fetch('https://restcountries.com/v3.1/all');
}

function showFlags(countries) {
    countFlags.innerHTML = '';
    countries.map((country, i) => {
        let flag = document.createElement('img');
        flag.src = country.flag;
        flag.width = '20';
        flag.height = '20';

        countFlags.appendChild(flag);
    })
}

function showData(posts) {
    posts.map((post, i) => {
        let title = document.createElement('h1');
        let content = document.createElement('p');

        title.innerHTML = (i + 1) + " - " + post.title;
        content.innerHTML = post.body;

        container.appendChild(title);
        container.appendChild(content);
    })
}