const addToDb = (id) => {
    let countryCart = {};

    const storedArea = localStorage.getItem('area');
    if (storedArea) {
        countryCart = JSON.parse(storedArea);
    }

    // 
    const quantity = countryCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        countryCart[id] = newQuantity;
    }
    else {
        countryCart[id] = 1;
    }

    localStorage.setItem('area', JSON.stringify(countryCart))

}

const getData = () => {
    let countryCart = {};

    const storedArea = localStorage.getItem('area');
    if (storedArea) {
        countryCart = JSON.parse(storedArea);
    }
    return countryCart;
}

export { addToDb, getData }