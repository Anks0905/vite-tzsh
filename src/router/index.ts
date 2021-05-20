//现在创建router的方式与vue2.x的版本已经很不同了
import { createRouter, createWebHashHistory } from 'vue-router';
import index from '@/views/index/index.vue'
import hello from '@/views/aChatsCollectifs/index.vue'
import world from '@/views/secondeMort/index.vue'
import my from '@/views/my/index.vue'

const routes = [
    {
        path: "/",
        name: "index",
        component: index,
        children: [
            {
                path: '/hello',
                component: hello
            }, {
                path: '/world',
                component: world
            },
            {
                path: '/my',
                component: my
            }
        ],
    },
];


const router = createRouter({
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes
});

// 全局前置守卫 按照创建顺序调用 守卫是异步执行的
router.beforeEach((to, from, next) => {
    // to 指的是我们即将要到达的路由
    // from 是指正在离开的路由
    // 
    // const { user, token } = store.state
    const user = {
        isLogin: true
    }
    const token = ''
    const { requiredLogin, redirectAlreadyLogin } = to.meta // 读取路由元信息
    if (!user.isLogin) {
        if (token) {
            // axios.defaults.headers.common.Authorization = `Bearer ${token}`
            // store.dispatch('fetchCurrentUser').then(() => {
            //     if (redirectAlreadyLogin) {
            //         next('/')
            //     } else {
            //         next()
            //     }
            // }).catch(e => {
            //     console.error(e)
            //     store.commit('logout')
            //     next('login')
            // })
        } else {
            if (requiredLogin) {
                next('login')
            } else {
                next()
            }
        }
    } else {
        if (redirectAlreadyLogin) {
            next('/')
        } else {
            next()
        }
    }
})
export default router;