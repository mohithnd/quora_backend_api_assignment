const BaseError = require("./base.error");

class BadRequest extends BaseError {
  constructor(missingResource) {
    super(
      "BadRequest",
      400,
      `The Requested Resource Is Not Present: ${missingResource}`,
      {
        missingResource,
      }
    );
  }
}

module.exports = BadRequest;
