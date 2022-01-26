let apiUrl
// Be sure to put a "homepage" in package.json

const apiUrls = {
  // TODO: change production url after launch party

  production: 'https://thawing-meadow-43090.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
