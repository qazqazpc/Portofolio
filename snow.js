function random(num) {
  return Math.floor(Math.random() * num);
}

for (let i = 0; i < 50; i++) {
  const div = document.createElement('div');
  div.classList.add('snowflake');
  div.style.cssText = `
    --left: ${random(100)}vw;
    --left-ini: ${random(20) - 10}vw;
    --left-end: ${random(20) - 10}vw;
    --speed: ${5 + random(15)}s;
    --size: ${random(5) * 0.2}vw;
    --delay: -${random(15)}s;   

  `;
  document.body.appendChild(div);
}
