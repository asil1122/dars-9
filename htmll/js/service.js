const url = "http://localhost:3000";

export const getBanner = async () => {
    try {
        const res = await fetch(`${url}/banner`);
        const data = await res.json();

        return data;
    } catch (error) {
        return error.message   
    }
}



export const getProducts = async () => {
    try {
        const res = await fetch(`${url}/products`);
        const data = await res.json();

        return data;
    } catch (error) {
        return error.message   
    }
}


export const getnewProducts = async () => {
    try {
        const res = await fetch(`${url}/newProducts`);
        const data = await res.json();

        return data;
    } catch (error) {
        return error.message   
    }
}



export const getRek = async () => {
    try {
        const res = await fetch(`${url}/rek`);
        const data = await res.json();

        return data;
    } catch (error) {
        return error.message   
    }
}