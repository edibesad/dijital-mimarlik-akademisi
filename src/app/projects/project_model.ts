export default class ProjectModel {
  title: string;
  length: number;
  path: string;
  constructor(title: string, length: number, path: string) {
    this.title = title;
    this.length = length;
    this.path = path;
  }
}
