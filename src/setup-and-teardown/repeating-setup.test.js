/* Repeating Setup Synchronous */
describe('Repeating Setup Synchronous', () => {
  function initializeCityDatabase() {
    return 'City database initialized';
  }

  function clearCityDatabase() {
    return 'City database cleared';
  }

  function isCity(city) {
    return city === 'Viena' || city === 'San Juan';
  }

  beforeEach(() => {
    initializeCityDatabase();
  });

  afterEach(() => {
    clearCityDatabase();
  });

  test('city database has Viena', () => {
    expect(isCity('Viena')).toBeTruthy();
  });

  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
});

/* Repeating Setup Asynchronous */
describe('Repeating Setup Asynchronous', () => {
  function initializeCityDatabase() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('City database initialized'), 42);
    });
  }

  function clearCityDatabase() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('City database cleared'), 24);
    });
  }

  function isCity(city) {
    return city === 'Viena' || city === 'San Juan';
  }

  beforeEach(() => initializeCityDatabase());

  afterEach(() => clearCityDatabase());

  test('city database has Viena', () => {
    expect(isCity('Viena')).toBeTruthy();
  });

  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
});

/* Repeating Setup Callback */
describe('Repeating Setup Callback', () => {
  function initializeCityDatabase(callback) {
    setTimeout(() => {
      callback(null, 'City database initialized');
    }, 69);
  }

  function clearCityDatabase(callback) {
    setTimeout(() => {
      callback(null, 'City database cleared');
    }, 96);
  }

  function isCity(city) {
    return city === 'Viena' || city === 'San Juan';
  }

  beforeEach((done) => {
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

  afterEach((done) => {
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
