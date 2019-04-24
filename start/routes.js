/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');


Route.group(() => {
  // Film

  Route.post('film', 'FilmController.create').validator('Film/FilmCreate');
  Route.delete('film/:id', 'FilmController.delete');
  Route.get('film/:id', 'FilmController.show');
  Route.get('film', 'FilmController.index').validator('Film/FilmIndex');
}).namespace('Film');
