(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    if (refs.modal.classList.contains("is-hidden")) {
      refs.modal.classList.remove("is-hidden");
      refs.body.classList.add("no-scroll");
    } else {
      refs.modal.classList.add("is-hidden");
      refs.body.classList.remove("no-scroll");
    }
  }
})();
