
import Login from './login'
import Register from './register'
import HomePage from '../home/homePage'
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
    { 
        path : '/homePage', 
        name : '账单',
        component : HomePage
    },
]