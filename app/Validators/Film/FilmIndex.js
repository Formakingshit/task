const BaseValidator = use('App/Validators/BaseValidator');

class AdminIndex extends BaseValidator {
  get rules() {
    return {
      search: 'string|max:255',
      date_from: 'date',
      date_to: 'date',
      order_by: 'string|max:255',
      sorted_by: 'string|min:3|max:4',
      page: 'number',
      per_page: 'number',
    };
  }
}

module.exports = AdminIndex;
