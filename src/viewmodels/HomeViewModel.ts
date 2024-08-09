// src/viewmodels/HomeViewModel.ts
import HomeModel, { HomeData, Service } from '../models/HomeModel';

class HomeViewModel {
  private model: HomeData = HomeModel;

  getTitle(): string {
    return this.model.title;
  }

  getDescription(): string {
    return this.model.description;
  }

  getButtonText(): string {
    return this.model.buttonText;
  }

  getServices(): Service[] {
    return this.model.services;
  }
}

export default HomeViewModel;
