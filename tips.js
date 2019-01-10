// ### Templating
document.querySelectorAll('empty').forEach(el => { // Loop each templatable element of the page
  fetch(`./tpl/${el.dataset.name}.html`)
    .then(res => res.text())
    .then(html => {
      el.innerHTML = html;
    });
}
})