const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((progressBar) => {
  const level = progressBar.getAttribute('data-level');
  const color = progressBar.getAttribute('data-color');

  progressBar.style.width = `${level}%`;
  progressBar.style.backgroundColor = color;
});
