const targetProxyHandler = {
    get(obj, prop) {
        return prop === 'value' ? obj.checked : obj[prop];
    }
};

const eventProxyHandler = {
    get(obj, prop) {
        return prop === 'target' ? new Proxy(obj.target, targetProxyHandler) : obj[prop];
    }
};


export const eventProxy = (e) => new Proxy(e, eventProxyHandler);
