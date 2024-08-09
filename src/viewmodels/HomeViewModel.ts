// src/viewmodels/HomeViewModel.ts
import HomeModel, { HomeData, Service, AboutData, AboutModel, PortfolioItem } from '../models/HomeModel';

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

  getServicesTitle(): string {
    return this.model.servicesData.title;
  }

  getServices(): Service[] {
    return this.model.servicesData.services;
  }

  getPortfolioTitle(): string {
    return this.model.portfolioTitle;
  }

  getPortfolioItems(): PortfolioItem[] {
    return this.model.portfolioItems;
  }
}

class AboutViewModel { 
  private model: AboutData = AboutModel;

  getTitle(): string {
    return this.model.title;
  }

  getDescription(): string {
    return this.model.description;
  }

  getButtonText(): string {
    return this.model.buttonText;
  }

  getChartData(): number[] {
    return this.model.chartData;
  }

  getChartLabels(): string[] {
    return this.model.chartLabels;
  }

  getCtaLink(): string {
    return this.model.ctaLink;
  }
}

class PortfolioViewModel { 
  private model: HomeData = HomeModel;

  getPortfolioTitle(): string {
    return this.model.portfolioTitle;
  }

  getPortfolioItems(): PortfolioItem[] {
    return this.model.portfolioItems;
  }
}

export default HomeViewModel;
export { AboutViewModel, PortfolioViewModel };