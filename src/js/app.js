window.onload = () => {
  const dropdownCaller = document.getElementById('header-dropdown-caller'),
    searchCaller = document.getElementById('header-search-caller'),
    headerDropdown = document.getElementById('header-dropdown'),
    headerSearch = document.getElementById('header-search');

  dropdownCaller.addEventListener('click', (evt) =>
    callerClickHandler(evt, headerDropdown)
  );
  searchCaller.addEventListener('click', (evt) =>
    callerClickHandler(evt, headerSearch)
  );

  function callerClickHandler(evt, el) {
    evt.preventDefault();
    if (!el.classList.contains('open') && !el.classList.contains('close')) {
      el.classList.toggle('open');
      return;
    } else if (el.classList.contains('open')) {
      el.classList.toggle('close');
      setTimeout(() => el.classList.toggle('open'), 300);
    } else if (el.classList.contains('close')) {
      el.classList.toggle('close');
      el.classList.toggle('open');
    } else {
      return;
    }
  }

  // burger
  // let burgerMenu = document.getElementById('.burger-header');
  // let menu = document.getElementById('.nav-header__list');
  // if (burgerMenu != null) {
  //   burgerMenu.addEventListener('click', function (e) {
  //     if (!burgerMenu.classList.contains('_active')) {
  //       burgerMenu.classList.toggle('_active');
  //       menu.classList.toggle('_active');
  //       return;
  //     } else {
  //       burgerMenu.classList.toggle('_active');
  //       menu.classList.toggle('_active');
  //     }
  //   });
  // }
};
