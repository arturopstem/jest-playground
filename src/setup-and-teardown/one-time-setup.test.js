/* One-Time Setup Asynchronous */
describe('One-Time Setup Asynchronous', () => {
  const database = { cities: [] };

  function initializeCityDatabase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        database.cities.push('Viena');
        database.cities.push('San Juan');
        resolve('City database initialized');
      }, 42);
    });
  }

  function clearCityDatabase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        database.cities = [];
        resolve('City database cleared');
      }, 69);
    });
  }

  function isCity(city) {
    return database.cities.includes(city);
  }

  beforeAll(() => initializeCityDatabase());
  afterAll(() => clearCityDatabase());

  test('city database has Viena', () => {
    expect(isCity('Viena')).toBeTruthy();
  });

  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
});

/* One-Time Setup Callback */
describe('One-Time Setup Callback', () => {
  const database = { cities: [] };

  function initializeCityDatabase(callback) {
    setTimeout(() => {
      database.cities.push('Viena');
      database.cities.push('San Juan');
      callback(null, 'City database initialized');
    }, 24);
  }

  function clearCityDatabase(callback) {
    setTimeout(() => {
      database.cities = [];
      callback(null, 'City database cleared');
    }, 96);
  }

  function isCity(city) {
    return database.cities.includes(city);
  }

  beforeAll((done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      data.toString();
      done();
    }
    initializeCityDatabase(callback);
  });

  afterAll((done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      data.toString();
      done();
    }
    clearCityDatabase(callback);
  });

  test('city database has Viena', () => {
    expect(isCity('Viena')).toBeTruthy();
  });

  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
});
