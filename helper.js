export const partials = {
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'

}

export function sessionInfo(data) {
    sessionStorage.setItem('id', data._id)
    sessionStorage.setItem('name', data.username);
    sessionStorage.setItem('authtoken', data._kmd.authtoken);
}

export function getUserInfo(ctx) {
    ctx.name = sessionStorage.getItem('name')
    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
    ctx.id = sessionStorage.getItem('id')
}
