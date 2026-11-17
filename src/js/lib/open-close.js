// close open <details> when clicking elsewhere
document.addEventListener('click', e => {

  const details = e.target.closest('details');

  Array.from( document.querySelectorAll('details[open]') )
    .forEach( d => d !== details && d.removeAttribute('open') );

});
