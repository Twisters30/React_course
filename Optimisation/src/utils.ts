type TStore = {
	key: string;
	value: object;
}

const store = new Map();

export const cache = ({ key, value }: TStore) => {
    if (store.has(key)) return store.get(key);
    store.set(key,value)
    return value;
}