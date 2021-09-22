const CellRenderHelper = {

  renderer(templateFn, params) {
    if (templateFn && typeof templateFn === 'function' && params.data) {
      const item = params.data
      return templateFn(item)
    }
    return params.value
  },

  render({ params, templateFn }) {
    if (params && templateFn && typeof templateFn === 'function') {
      const item = params.data
      return templateFn(item)
    }

    return params
  }
}

export { CellRenderHelper }
