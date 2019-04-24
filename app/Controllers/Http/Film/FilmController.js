const Film = use('App/Models/Film');
const ActorFilm = use('App/Models/ActorFilm');
const Actor = use('App/Models/Actor');

class AdminController {
  async index({ request, response }) {
    const data = request.only([
      'search',
      'order_by',
      'sorted_by',
      'page',
    ]);

    const query = Film.query().with('actorFilms.actors');

    if (data.order_by) {
      query.orderBy(data.order_by, data.sorted_by);
    }

    if (data.search) {
      query.where('title', 'ilike', `%${data.search}%`);
    }

    const films = await query.paginate(request.input('page', 1), request.input('per_page'));

    return response.send(films, 'Users list');
  }

  async show({ response, params }) {
    const film = await Film.findByOrFail('id', params.id);
    await film.load('actorFilms.actors');

    return response.send({ film }, 'User successfully registered in system');
  }

  async create({ request, response }) {
    const data = request.only([
      'title',
      'year',
      'format',
    ]);

    const film = await Film.create(data);


    const dataActors = request.only('actors');

    // TODO (I made it at 5 a.m)
    for (let i = 0; i < dataActors.actors.length; i += 1) {
      dataActors.actors[i] = dataActors.actors[i].split(' ');

      const actor = (
        await Actor.findOrCreate(
          { name: dataActors.actors[i][0], surname: dataActors.actors[i][1] },
          { name: dataActors.actors[i][0], surname: dataActors.actors[i][1] },
        )
      ).toJSON();

      const actorFilm = {};
      actorFilm.film_id = film.id;
      actorFilm.actor_id = actor.id;
      await ActorFilm.create(actorFilm);
    }

    await film.load('actorFilms.actors');
    return response.send({ film }, 'Fild successfully added to system');
  }

  async delete({ response, params }) {
    const film = await Film.findByOrFail('id', params.id);
    film.delete();

    return response.send('Film successfully deleted');
  }
}

module.exports = AdminController;
