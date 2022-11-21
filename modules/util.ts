export class NameUtil {
  #name: string;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name.toUpperCase();
  }
}
