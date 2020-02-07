import { partials, sessionInfo, getUserInfo} from './helper.js'
import { put, post, get, del } from './requester.js'

export const event = {
    events: async function (ctx) {
        getUserInfo(ctx)
        if (ctx.loggedIn) {
            await get('appdata', 'events')
                .then(data => {
                    ctx.data = data
                    ctx.loadPartials(partials)
                        .partial('./templates/events/events.hbs')
                    ctx.redirect("#/events")
                })
        } else {
            ctx.loadPartials(partials)
                .partial('./templates/home/notlogged.hbs')
        }

    },
    about: function (ctx) {
        getUserInfo(ctx)
        this.loadPartials(partials)
            .partial('./templates/about/about.hbs')
    },
    create: function (ctx) {
        getUserInfo(ctx)
        this.loadPartials(partials)
            .partial('./templates/events/create.hbs')
    },
    postCreate: function (ctx) {
        getUserInfo(ctx)
        const { eventname, date, description, imgURL } = ctx.params
        post('appdata', 'events', {
            eventname,
            date,
            description,
            organizer: ctx.name,
            imgURL
        })
        ctx.redirect('#/events')
    },
    details: async function (ctx) {
        getUserInfo(ctx)
        await get('appdata', `events/${ctx.params.id}`)
            .then(data => {
                ctx.data = data
                ctx.loadPartials(partials)
                    .partial('./templates/events/details.hbs')
            })

    },
    delete: async function (ctx) {
        await del('appdata', `events/${ctx.params.id}`)
            .then(() => {
                ctx.redirect('#/events')
            })
    },
    edit: async function (ctx) {
        await get('appdata', `events/${ctx.params.id}`)
            .then(data => {
                ctx.data = data
                ctx.loadPartials(partials)
                    .partial('./templates/events/edit.hbs')
            })
    },
    postEdit: function (ctx) {
        const { eventname, date, description, imgURL } = ctx.params
        put('appdata', `events/${ctx.params.id}`, {
            eventname,
            date,
            description,
            organizer: ctx.name,
            imgURL
        })
        ctx.redirect(`#/details/${ctx.params.id}`)
    }
}