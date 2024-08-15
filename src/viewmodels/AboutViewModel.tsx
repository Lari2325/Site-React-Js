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

  getMissionVisionSectionTitle(): string {
    return this.model.missionVisionSectionTitle; // Método adicionado
  }

  getCardTitles(): { // Método adicionado
    mission: string;
    vision: string;
    values: string;
  } {
    return this.model.cardTitles;
  }

  getWhatsAppLink(): string {
    return this.model.whatsAppLink;
  }

  getButtonMissionVisionSection(): string {
    return this.model.button;
  }
}

export default AboutViewModel;