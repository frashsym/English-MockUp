document.querySelectorAll('.sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar li')
      .forEach(li => li.classList.remove('active'));
    item.classList.add('active');
  });
});
