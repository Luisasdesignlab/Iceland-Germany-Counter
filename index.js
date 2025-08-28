const scoreLeft  = document.getElementById('score-left');
const scoreRight = document.getElementById('score-right');

const state = { left: 0, right: 0 };

function render() {
  scoreLeft.textContent  = state.left;
  scoreRight.textContent = state.right;
}

function addPoints(team, pts) {
  const n = Number(pts) || 0;
  if (!(team in state)) return;
  state[team] += n;
  render();
}

// Delegation: klick auf alle Buttons mit .ctrl
document.addEventListener('click', (ev) => {
  const btn = ev.target.closest('.ctrl');
  if (!btn) return;
  addPoints(btn.dataset.team, btn.dataset.points);
});

render();
