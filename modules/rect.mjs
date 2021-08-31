function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
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
