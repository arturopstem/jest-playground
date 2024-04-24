import { cbFetchData, failFetchData, fetchData } from './fetch-data';

describe('Promises', () => {
  test('01 - the data is peanut butter', () =>
    fetchData().then((data) => {
      expect(data).toBe('peanut butter');
    }));
});

describe('Async/Await', () => {
  test('02 - the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });

  test('03 - the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await failFetchData();
    } catch (error) {
      expect(error.message).toMatch('error');
    }
  });
});

describe('Combine async & await with .resolves &.rejects', () => {
  test('04 - the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });

  test('05 - the fetch fails with an error', async () => {
    await expect(failFetchData()).rejects.toThrow('error');
  });

  test('06 - the fetch fails with an error', () => {
    expect.assertions(1);
    return failFetchData().catch((error) =>
      expect(error.message).toMatch('error'),
    );
  });
});

describe('Callbacks', () => {
  test('07 - the data is peanut butter', () => {
    // expect.assertions(1);
    function callback(error, data) {
      if (error) {
        throw error;
      }
      expect(data).toBe('peanut butter');
    }
    cbFetchData(callback);
  });

  test('08 - the data is peanut butter', (done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (_error) {
        done(_error);
      }
    }
    cbFetchData(callback);
  });
});

describe('.resolves / .rejects', () => {
  test('09 - the data is peanut butter ', () =>
    expect(fetchData()).resolves.toBe('peanut butter'));

  test('10 - the fetch fails with an error', () =>
    expect(failFetchData()).rejects.toThrow('error'));
});
