const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "NotFound",
      404,
      `The Requested Resource: ${resourceName} With Value ${resourceValue}`,
      {
        resourceName,
        resourceValue,
      }
    );
  }
}

module.exports = NotFound;
