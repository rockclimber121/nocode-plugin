let icon =
  '<rect width="20" height="20" style="fill:rgb(0,0,0);stroke-width:3;stroke:rgb(0,0,0)" />';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "Build you plugin",
        svgIcon: icon,
        onClick: async () => {
          miro.board.ui.openLeftSidebar("plugin-setup.html", {
            title: "Plugin setup",
          });
        },
      },
    },
  });
});
