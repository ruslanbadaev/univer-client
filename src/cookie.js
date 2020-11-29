class Cookie {
  setCookie (name, value, options = {}) {
    options = {
      path: '/',
      'max-age': 24 * 60 * 60,
      ...options
    }
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString()
    }
    let updateCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (const optionKey in options) {
      updateCookie += '; ' + optionKey
      const optionValue = options[optionKey]
      if (optionValue !== true) {
        updateCookie += '=' + optionValue
      }
    }
    document.cookie = updateCookie
  }

  deleteCookie (name) {
    this.setCookie(name, '', { 'max-age': -1 })
  }

  getCookie (name) {
    const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    if (matches) {
      const decodeCookie = JSON.parse(decodeURIComponent(matches[1]))
      return decodeCookie
    } else {
      return undefined
    }
  }
}

export default new Cookie()
