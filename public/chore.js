const backButton = () => {
  const button = document.createElement('button');
  button.innerText = 'Back';
  button.style.position = 'absolute';
  button.style.top = '4px';
  button.style.left = '4px';
  button.addEventListener('click', () => {
    window.history.back();
  });

  return button;
};

window.onload = () => {
  if (location.pathname === '/') {
    return;
  }
  document.body.appendChild(backButton());
};
