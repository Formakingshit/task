/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ActorSchema extends Schema {
  up() {
    this.create('actors', (table) => {
      table.increments();
      table.string('name', 50).notNullable();
      table.string('surname', 50).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('actors');
  }
}

module.exports = ActorSchema;
