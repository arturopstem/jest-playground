function fetchData() {
  return Promise.resolve('peanut butter');
}

function failFetchData() {
  return Promise.reject(new Error('error and errors'));
}

function cbFetchData(callback) {
  setTimeout(() => {
    callback(null, 'peanut butter');
  }, 1000);
}

export { fetchData, failFetchData, cbFetchData };
