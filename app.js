import {home} from './home.js'
import {user} from './user.js'
import {event} from './event.js'

const app = Sammy('body', function(){
    this.use('Handlebars', 'hbs')

    this.get('#/', home.home)

    this.get('/', home.home2)

    this.get('#/gallery', home.gallery)

    this.get('#/login', user.login)

    this.post('#/login', user.postLogin)

    this.get('#/register', user.register)

    this.post('#/register', user.postRegister)

    this.get('#/logout', user.logout)

    this.get('#/events', event.events)

    this.get('#/create', event.create)

    this.post('#/create', event.postCreate)

    this.get('#/details/:id', event.details)

    this.get('#/edit/:id', event.edit)

    this.post('#/edit/:id', event.postEdit)

    this.get('#/delete/:id', event.delete)

    this.get('#/about', event.about)

    this.get
})
app.run()