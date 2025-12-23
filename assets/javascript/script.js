function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show-modal');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show-modal');
  }
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove('show-modal');
    }
  });
};

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) header.classList.add("header--scrolled");
  else header.classList.remove("header--scrolled");
});
