import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import NProgress from 'nprogress';

// use
Vue.use(Router);

// create
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '.Bram()',
            component: Home,
            meta: {
                title: 'G.Bram',
                bodyClass: 'page-home',
                metaTags: [
                    {
                        name: 'description',
                        content: 'I am a Software developer, designer and Sandwich and this is my portfolio'
                    },
                ]
            }
        },
        {
            path: '/about',
            name: '.about()',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                title: 'Bram.about',
                bodyClass: 'page-about',
                metaTags: [
                    {
                        name: 'description',
                        content: 'I am a Software developer, designer and Sandwich and this is my resume'
                    },
                ]
            }
        },
        {
            path: '/work',
            name: '.work()',
            component: () => import(/* webpackChunkName: "work" */ './views/Work.vue'),
            meta: {
                title: 'Bram.work',
                bodyClass: 'page-work',
                metaTags: [
                    {
                        name: 'description',
                        content: 'My selected works'
                    },
                ]
            },
        },
        {
            path: '*',
            name: `.err(404)`,
            component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
            meta: {
                title: `bram.err(404)`,
                bodyClass: 'page-err404',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Ops! Page not found'
                    },
                ]
            },
        },
    ],
    scrollBehavior () {
        // reset scroll
        return { x: 0, y: 0 }
    }
});

// NProgress
// NProgress.configure({
//     easing: 'ease-out',
//     speed: 500,
//     trickleSpeed: 100,
//     showSpinner: false,
// });

// beforeEach
router.beforeEach((to, from, next) => {

    // 01. lock scroll
    document.body.classList.add('locked');
    // 02. start loader
    // NProgress.start();

    // 04. Update meta tags
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement('meta');
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });
            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');
            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    // 05. continue
    next();
});

export default router;
