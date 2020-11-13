function scrolling() {
  while (true) {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect()
      .bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100)
      break;
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p id="test_scroll"> Новый блок </p>`
    );
  }
}

window.addEventListener("scroll", scrolling);

scrolling();
