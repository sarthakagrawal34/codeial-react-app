// We can export named constants using * operator but this can't be used for default exports
export * from './constants';

export const getFormBody = (params) => {
    let formBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property);    // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]);  // sarthak 123 => sarthak%2020123

        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&'); // 'username=sarthak&password=123213'
}