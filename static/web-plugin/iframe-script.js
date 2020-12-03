function createIframeWidget(x, y, height, width) {
  console.log("create sticker");
  miro.board.widgets.create({
    type: "IFRAME",
    height: height,
    width: width,
    x: x,
    y: y,
  });
}

//createIframeWidget(0, 0, 100, 100);
