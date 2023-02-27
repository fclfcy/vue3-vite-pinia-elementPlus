import router from '@/router';
import { useUserStore } from '@/store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // get token from cookie

NProgress.configure( { showSpinner: false } ); // NProgress Configuration

const whiteList = [ '/login' ]; // no redirect whitelist

router.beforeEach(( to, from, next ) => {
    
    NProgress.start();
    // 鉴定token
    const hasToken = getToken();
    if (to.path === '/login' || to.path === '/404') {
        next();
    } else if (hasToken) {
        useUserStore().getUserInfo()
            .then(async res => {
                // await store.dispatch('permission/generateRoutes', res.data);
                next();
            } );
        NProgress.done();
    }  else {
        /* has no token*/
        if ( whiteList.indexOf( to.path ) !== -1 ) {
            next();
        } else {
            next( `/login?redirect=${to.path}` );
            NProgress.done();
        }
    }
});

router.afterEach( () => {
    // finish progress bar
    NProgress.done();
});