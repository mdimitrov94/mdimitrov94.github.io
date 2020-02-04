import {partials, sessionInfo} from './helper.js'
import {put, post, get, del} from './requester.js'

export const user = {

    login: function () {
        this.loadPartials(partials)
        .partial('./templates/auth/login.hbs')
    },  

    postLogin: function (ctx) {
        const { username, password } = ctx.params
        post('user', 'login', { username, password }, 'Basic')
            .then(data => {
                sessionInfo(data)
                ctx.loadPartials(partials)
                .partial('./templates/home/home.hbs')
                ctx.redirect('#/')
            })
            .catch(console.error);
    },  

    register: function () {
        this.loadPartials(partials)
        .partial('./templates/auth/register.hbs')
    },

    postRegister: function (ctx) {
        const {username, password, rePassword} = ctx.params
        post('user', '', {username, password, rePassword}, 'Basic')
        .then(data=>{
            sessionInfo(data)
            ctx.redirect('#/')  
        })
        .catch(console.error);
    },

    logout: function (ctx) {
        post('user', '_logout', {}, 'Kinvey')
            .then(() => {
                sessionStorage.clear();
                ctx.redirect('#/');
            })
            .catch(console.error);
    }
}