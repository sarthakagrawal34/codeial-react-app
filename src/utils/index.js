// We can export named constants using * operator but this can't be used for default exports
export * from './constants';

export const setItemInLocalStorage = (key, value) => {
    if (!key || !value) {
        return console.error('Can not store in LS');
    }

    const valueToStore =
        typeof value !== 'string' ? JSON.stringify(value) : value;

    localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Can not get value from LS');
  }
  
  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Can not remove value from LS');
  }

  localStorage.removeItem(key);
};

export const getFormBody = (params) => {
    let formBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property);    // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]);  // sarthak 123 => sarthak%2020123

        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&'); // 'username=sarthak&password=123213'
}