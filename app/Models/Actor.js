/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Actor extends Model {
  actorFilms() {
    return this.hasMany('App/Models/ActorFilm', 'id', 'actor_id').orderBy('id');
  }
}

module.exports = Actor;
