/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Film extends Model {
  actorFilms() {
    return this.hasMany('App/Models/ActorFilm', 'id', 'film_id').orderBy('id');
  }
}

module.exports = Film;
