function startCelebration() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.getElementById('music').play();

  const balloonsContainer = document.getElementById('balloons');
  const flowersContainer = document.getElementById('flowers');

  for (let i = 0; i < 20; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    b.style.left = (Math.random() * 100) + '%';
    b.style.animationDuration = (5 + Math.random() * 5) + 's';
    balloonsContainer.appendChild(b);
  }

  for (let i = 0; i < 10; i++) {
    const f = document.createElement('div');
    f.className = 'flower';
    f.style.left = (Math.random() * 90 + 5) + '%';
    f.style.top = (Math.random() * 80 + 10) + '%';
    flowersContainer.appendChild(f);
  }
}
