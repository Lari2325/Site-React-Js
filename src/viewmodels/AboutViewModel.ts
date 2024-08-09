import AboutModel from '../models/AboutModel';

class AboutViewModel {
  private model = AboutModel;

  getTitle(): string {
    return this.model.title;
  }

  getDescription(): string {
    return this.model.description;
  }
}

export default AboutViewModel;