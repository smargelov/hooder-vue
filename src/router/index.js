import VueRouter from 'vue-router';
import MainCatalog from '@/components/MainCatalog';
import Cart from '@/components/Cart';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        }
    ]
})