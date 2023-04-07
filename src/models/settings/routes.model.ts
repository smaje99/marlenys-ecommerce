export interface Route {
    readonly path: string;
    readonly name: string;
}

export const Routes = Object.freeze({
    HOME: Object.freeze<Route>({ path: '/', name: 'Inicio' }),
    PROFILE: Object.freeze<Route>({ path: '/profile', name: 'Perfil' }),
    SHOPPING_CART: Object.freeze<Route>({ path: '/cart', name: 'Carrito' }),
    WISH_LIST: Object.freeze<Route>({ path: '/wishlist', name: 'Favoritos' }),
});