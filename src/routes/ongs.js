const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('ongs', '/', async (ctx) => {
  const ongs = await ctx.orm.ong.findAll();
  await ctx.render('ongs/index', {
    ongs,
    ongPath: (id) => ctx.router.url('ong', id),
    newOngPath: ctx.router.url('ongs-new'),
  });
});

module.exports = router;
