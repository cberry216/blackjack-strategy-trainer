function bjbs_modal() {
  let bjbs_button = document.querySelector('.welcome__strategy');
  if (!(bjbs_button)) bjbs_button = document.querySelector('.table__bjbs');
  let bjbs_close = document.querySelector('.bjbs__close');
  let dim_screen = document.querySelector('.dim');
  let bjbs_modal = document.querySelector('.bjbs');

  bjbs_button.addEventListener('click', () => {
    dim_screen.classList.toggle('dim--open');
    bjbs_modal.classList.toggle('bjbs--open');
  })
  bjbs_close.addEventListener('click', (e) => {
    // Stop Event Bubbling (inner on-click event firing outter on-click event).
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    
    dim_screen.classList.toggle('dim--open');
    bjbs_modal.classList.toggle('bjbs--open');
  })
  bjbs_modal.addEventListener('click', () => {
    dim_screen.classList.toggle('dim--open');
    bjbs_modal.classList.toggle('bjbs--open');
  })


}

function run() {
  bjbs_modal();
}

window.onload = run