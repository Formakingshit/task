class Formatter {
  constructor() {
    this.errors = [];
  }

  addError(error, field, validation, args) {
    let message = error;

    if (error instanceof Error) {
      validation = 'ENGINE_EXCEPTION';
      message = error.message;
    }

    this.errors.push({
      field, validation, message, args,
    });
  }

  // return null if no errors are present,
  // otherwise validate will be rejected with an empty
  // error
  toJSON() {
    return this.errors.length ? {
      success: false,
      message: 'Validation fails',
      type: 'validation',
      errors: this.errors,
    } : null;
  }
}

module.exports = Formatter;
