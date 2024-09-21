
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.getElementsByClassName("loader").classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};