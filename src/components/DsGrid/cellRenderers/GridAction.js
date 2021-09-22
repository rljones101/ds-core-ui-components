export const GridAction = {
  create: ({ icon, toolTip, actionEvent, showCallback, handlerCallback }) => {
    return {
      icon: icon || null,
      toolTip: toolTip || '',
      actionEvent: actionEvent || null,
      show: () => showCallback || true,
      handler: handlerCallback
    }
  }
}
