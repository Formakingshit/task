/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class FilmSchema extends Schema {
  up() {
    this.create('films', (table) => {
      table.increments();
      table.string('title', 254).notNullable();
      table.dateTime('year');
      table.string('format', 50).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('films');
  }
}

module.exports = FilmSchema;
