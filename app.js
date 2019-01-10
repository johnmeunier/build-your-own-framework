console.log('0.1')

// ### Conf

const conf = {
  "routes": [{
      "title": "Accueil",
      "path": "/",
      "content": "index"
    },
    {
      "title": "Connexion",
      "path": "/login",
      "content": "login"
    }
  ]
}

// ### Routing

// const {
//   routes
// } = conf;

// const {
//   pathname
// } = document.location;
// console.log(pathname);
// const page = routes.find(route => route.path === pathname).content;

// fetch(`./pages/${page}.html`)
//   .then(res => res.text())
//   .then(html => {
//     document.querySelector('body').outerHTML = html;
//   })


// ### Templating
document.querySelectorAll('body > *').forEach(el => { // Loop each element of the page
  if (Object.keys(el.dataset).length !== 0) { // check if the element is templating
    fetch(`./tpl/${el.dataset.name}.html`)
      .then(res => res.text())
      .then(html => {
        el.outerHTML = html;
      });
  }
})

// ### Data binding