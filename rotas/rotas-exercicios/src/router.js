import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio'
import Menu from './components/template/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'


Vue.use(Router)

// carregar o elemento de forma tadia
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router =  new Router({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        // checa se tem algum seletor salvo em cache
        if(savedPosition){
            return savedPosition;
        }
        if(to.hash) {
            return {selector: to.hash}
        }
        return { x:0, y:0 }
    },
    routes: [{
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter(to, from, next) {
                    console.log('antes da rota usuario-detalhe')
                    next()
                }},
            { path: ':id/editar', component: UsuarioEditar, props: true, 
                name: 'editarUsuario'},
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    } , {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas - global')
    next()
})

export default router