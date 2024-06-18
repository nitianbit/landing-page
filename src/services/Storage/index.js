
export const getValue = (key) => localStorage.getItem(key);
export const setValue = (key, value) => localStorage.setItem(key, value);
export const removeValue = (key) => localStorage.removeItem(key);


export const STORAGE_KEYS = {
    TOKEN: 'TOKEN'
}

export const LOGIN_DETAILS = [
    {
        username: "Demo1",
        password: "1010",
        baseUrl: "inventory/"
    },
    {
        username: "Demo2",
        password: "2020",
        baseUrl: "inventory_2/"
    },
    {
        username: "Demo3",
        password: "3030",
        baseUrl: "inventory_3/"
    },
    {
        username: "Demo4",
        password: "4040",
        baseUrl: "inventory_4/"
    },
    {
        username: "Demo5",
        password: "5050",
        baseUrl: "inventory_5/"
    }
]
