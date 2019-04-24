/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ActorFilm extends Model {
  actors() {
    return this.hasOne('App/Models/Actor', 'actor_id', 'id').orderBy('id');
  }

  films() {
    return this.hasOne('App/Models/Film', 'film_id', 'id').orderBy('id');
  }
}

module.exports = ActorFilm;
