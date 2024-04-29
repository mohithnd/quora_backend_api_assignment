class BaseError extends Error {
  constructor(name, statusCode, desc, details) {
    super(desc);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
  }
}

module.exports = BaseError;
