const menuItems = document.querySelectorAll('.sidebar li');
const pages = document.querySelectorAll('.page');

menuItems.forEach(item => {
  item.addEventListener('click', () => {

    // active menu
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // show page
    const target = item.getAttribute('data-page');
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === target) {
        page.classList.add('active');
      }
    });

  });
});
