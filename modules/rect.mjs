function draw(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

  return {
    x: x,
    y: y,
    w: w,
    h: h,
    color: color
  };
}

function getPerimeter(length, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} perimeter is ${length * 4}px.`

  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

export { draw, getPerimeter };
