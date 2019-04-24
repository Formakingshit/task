/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ActorFilmSchema extends Schema {
  up() {
    this.create('actor_films', (table) => {
      table.increments();
      table.integer('film_id').unsigned().references('id').inTable('films')
        .onDelete('cascade');
      table.integer('actor_id').unsigned().references('id').inTable('actors')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('actor_films');
  }
}

module.exports = ActorFilmSchema;
