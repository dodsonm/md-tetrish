function create(id, host, width, height) {
  let divWrapper = document.createElement('div');
  let canvasElem = document.createElement('canvas');
  host.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  let ctx = canvasElem.getContext('2d');

  return {
    ctx: ctx,
    id: id
  };
}

export { create };
