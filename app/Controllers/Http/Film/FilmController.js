const Film = use('App/Models/Film');

class AdminController {
  async index({ request, response }) {
    const data = request.only([
      'search',
      'order_by',
      'sorted_by',
      'page',
    ]);

    const query = Film.query();

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

    return response.send({ film }, 'User successfully registered in system');
  }

  async create({ request, response }) {
    const data = request.only([
      'title',
      'year',
      'format',
    ]);

    const film = await Film.create(data);

    return response.send({ film }, 'User successfully registered in system');
  }

  async delete({ response, params }) {
    const film = await Film.findByOrFail('id', params.id);
    film.delete();

    return response.send('Film successfully deleted');
  }
}

module.exports = AdminController;
