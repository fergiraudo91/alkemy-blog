import Swal from "sweetalert2";
import { fectchLogin } from "../helpers/fetch"
import { types } from "../types/types";


export const startLogin = (email, password) => {
    return async (dispatch) => {
        const info = await fectchLogin({ email, password });
        console.log(info);
        if (info.ok) {
            const data = await info.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', email);
            dispatch(login(email));
        }
        else {
            Swal.fire('Error', info.statusText, 'error');
        }
    }
}

export const login = (user) => ({
    type: types.authLogin,
    payload: { user, logged: true }
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.authLogout
})