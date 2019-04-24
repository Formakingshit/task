const BaseValidator = use('App/Validators/BaseValidator');

class AdminCreate extends BaseValidator {
  get rules() {
    return {
      title: 'required|string|max:254',
      year: 'date',
      format: 'string|max:50',
    };
  }
}

module.exports = AdminCreate;
