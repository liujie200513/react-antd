
import Login from './login'
import Register from './register'
export const routesConfig = [
    { 
        path : '/', 
        name : '登陆',
        component : Login
    },
    { 
        path : '/register', 
        name : '注册',
        component : Register
    },
]