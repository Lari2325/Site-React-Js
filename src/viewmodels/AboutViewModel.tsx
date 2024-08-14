import AboutModel, { AboutCardData, MissionVisionValuesData } from '../models/AboutModel';

class AboutViewModel {
  private model = AboutModel;

  getTitle(): string {
    return this.model.title;
  }

  getDifferentials(): string {
    return this.model.differentials;
  }

  getDifferentialsDescricao(): string {
    return this.model.differentialsDescricao;
  }

  getCards(): AboutCardData[] {
    return this.model.cards;
  }

  getMissionVisionValues(): MissionVisionValuesData {
    return this.model.missionVisionValues;
  }

  getWhatsAppLink(): string {
    return this.model.whatsAppLink;
  }
}

export default AboutViewModel;