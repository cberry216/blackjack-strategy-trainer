function bjbs_modal() {
  let bjbs_button = document.querySelector('.welcome__strategy');
  let dim_screen = document.querySelector('.dim');
  let bjbs_modal = document.querySelector('.bjbs');
  bjbs_button.addEventListener('click', () => {
    dim_screen.classList.toggle('dim--open');
    bjbs_modal.classList.toggle('bjbs--open');
  })
}

function run() {

}

window.onload = run