window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.top-wrapper__links-wrapper');
      header.classList.toggle('sticky', window.scrollY > 0)
    })
  })