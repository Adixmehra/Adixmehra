const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu && links) {

  menu.addEventListener('click', () => {

    const open = links.classList.toggle('active');

    menu.setAttribute(
      'aria-expanded',
      String(open)
    );

    menu.textContent = open ? '✕' : '☰';

  });


  document.querySelectorAll('.nav-links a').forEach((link) => {

    link.addEventListener('click', () => {

      links.classList.remove('active');

      menu.setAttribute(
        'aria-expanded',
        'false'
      );

      menu.textContent = '☰';

    });

  });

}