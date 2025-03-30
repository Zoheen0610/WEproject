<<<<<<< HEAD
import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();


export const initialState={
    user:userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
};
=======
import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();


export const initialState={
    user:userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
};
>>>>>>> 8147932 (Initial commit with all project files)
