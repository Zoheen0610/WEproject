<<<<<<< HEAD
export const fetchUser= () => {
    const userInfo = 
        localStorage.getItem('user') !=="undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    return userInfo;

};

export const fetchCart= () => {
    const cartInfo = 
        localStorage.getItem('cartItems') !=="undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();

    return cartInfo ? cartInfo :[] ;

};
=======
export const fetchUser= () => {
    const userInfo = 
        localStorage.getItem('user') !=="undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    return userInfo;

};

export const fetchCart= () => {
    const cartInfo = 
        localStorage.getItem('cartItems') !=="undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();

    return cartInfo ? cartInfo :[] ;

};
>>>>>>> 8147932 (Initial commit with all project files)
