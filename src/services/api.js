const API_ROOT = 'https://api.coinbase.com/v2/prices/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }


      return json;

    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )

}

export default callApi;
