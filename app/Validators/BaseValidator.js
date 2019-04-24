const Formatter = use('App/Validators/Formatter');

class BaseValidator {
  get validateAll() {
    return true;
  }

  get formatter() {
    return Formatter;
  }
}

module.exports = BaseValidator;
