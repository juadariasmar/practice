'use strict'

//*******************************
//*** Getting data with Fetch

let button = document.getElementById('button');
let container = document.getElementById('container');
let posts = null;

button.addEventListener('click', function() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            posts = data;
            showData(posts)

        })
})

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