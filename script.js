document.addEventListener('DOMContentLoaded', function () {
  const cart = [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const courseId = this.getAttribute('data-course-id');
      cart.push(courseId);
      alert('Added to cart! Course ID: ' + courseId);
    });
  });
});
