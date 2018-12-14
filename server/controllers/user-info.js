async function getLoginUserInfo (ctx, next) {
    ctx.body = 'getUserInfo.json'
    next()
}

module.exports = {
    getLoginUserInfo
};
