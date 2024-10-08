const privateData = new WeakMap();

export default class Currency {

  constructor(code, name) {
    privateData.set(this, {
      validateCode(code) {
        if (typeof code !== 'string') {
          throw new TypeError('Code must be a string');
        }
      },
      validateName(name) {
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        }
      },
    });

    privateData.get(this).validateCode(code);
    privateData.get(this).validateName(name);

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    privateData.get(this).validateCode(value);
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    privateData.get(this).validateName(value);
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
