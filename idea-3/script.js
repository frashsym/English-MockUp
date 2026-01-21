const menu = document.querySelectorAll('.navbar li');
const pages = document.querySelectorAll('.page');

menu.forEach(item => {
  item.addEventListener('click', () => {
    menu.forEach(m => m.classList.remove('active'));
    item.classList.add('active');

    const target = item.getAttribute('data-page');
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === target) {
        page.classList.add('active');
      }
    });
  });
});
