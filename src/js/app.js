window.onload = () => {
  // работа с вызовом dropdown  и поисковой стоки

  const dropdownCaller = document.getElementById('header-dropdown-caller'),
    searchCaller = document.getElementById('header-search-caller'),
    headerDropdown = document.getElementById('header-dropdown'),
    headerSearch = document.getElementById('header-search'),
    headerDropdownMini = document.getElementById('header-dropdown-mini'),
    burgerMenu = document.getElementById('burger-menu'),
    menu = document.getElementById('nav-menu');

  dropdownCaller.addEventListener('click', (evt) => {
    if (menu.classList.contains('active')) {
      callerClickHandler(evt, headerDropdownMini);
      return;
    }
    callerClickHandler(evt, headerDropdown);
  });
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

  // переключение контанта в блоке "Мы всегда достигаем обещанного результата"

  const qualities = [
    `Quasi eaque, fugiat repellendus eveniet reprehenderit nesciunt error, placeat exercitationem soluta repudiandae, aperiam cumque alias quis deserunt.`,
    `Даём юридические финансовые гарантии выполнения своих обязательств.
    Более 60 высококвалифицированных специалистов в штате - мы обладаем ресурсами и
    технологиями для решения любой задачи точно в срок.`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nobis aliquam eius blanditiis ipsam nostrum omnis maxime, dolorem, neque deserunt laborum distinctio modi amet vero dolorum culpa quaerat quae est.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum neque molestias soluta ut tenetur minima voluptatibus nulla assumenda nobis nesciunt!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, deserunt?`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nam earum asperiores modi dolor eum.`,
  ];

  const navigation = [
    ...document.querySelectorAll('.slider-qualities__qualitie'),
  ];

  navigation.map((el, idx) => {
    el.addEventListener('click', () => changeContent(el, idx));
  });

  function changeContent(el, idx) {
    navigation.map((el) => el.classList.remove('active'));
    el.classList.toggle('active');
    document.querySelector('.slider-qualities__slide').textContent =
      qualities[idx];
  }

  // burger

  if (burgerMenu != null) {
    burgerMenu.addEventListener('click', function (e) {
      if (!burgerMenu.classList.contains('active')) {
        burgerMenu.classList.toggle('active');
        menu.style.display = 'flex';
        setTimeout(() => menu.classList.toggle('active'), 100);
        return;
      } else {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
      }
    });
  }
};
