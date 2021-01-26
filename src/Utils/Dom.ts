export default class Dom {
  public static getElById(id: string): HTMLElement {
    return document.getElementById(id)!;
  }
}
