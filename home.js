import { partials, getUserInfo } from './helper.js'

export const home = {
    home: function (ctx) {
        getUserInfo(ctx)
        ctx.loadPartials(partials)
            .partial('./templates/home/home.hbs')
        ctx.redirect("/#")

    },
    home2: function (ctx) {
        getUserInfo(ctx)
        ctx.loadPartials(partials)
            .partial('./templates/home/home.hbs')
        ctx.redirect("/#")

    },
    gallery: function (ctx) {
        getUserInfo(ctx)
        if (ctx.loggedIn) {
            ctx.loadPartials(partials)
                .partial('./templates/gallery/gallery.hbs')
        } else {
            ctx.loadPartials(partials)
                .partial('./templates/home/notlogged.hbs')
        }

    }
}