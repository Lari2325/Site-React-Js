import HomeModel, { HomeData, Service, AboutData, AboutModel, PortfolioItem, TestimonialsModel, Testimonials, Testimonial, Contact, ContactModel } from '../models/HomeModel';

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

class TestimonialsViewModel {
  private model: Testimonials = TestimonialsModel;

  getTitle(): string {
    return this.model.title;
  }

  getTestimonials(): Testimonial[] {
    return this.model.testimonials;
  }

  getButton(): string {
    return this.model.button;
  }
}

class ContactViewModel {
  private model: Contact = ContactModel;

  getTitle(): string {
    return this.model.title;
  }

  getDescription(): string {
    return this.model.description;
  }

  getNameLabel(): string {
    return this.model.name;
  }

  getEmailLabel(): string {
    return this.model.email;
  }

  getPhoneLabel(): string {
    return this.model.phone;
  }

  getSubjectLabel(): string {
    return this.model.subject;
  }

  getMessageLabel(): string {
    return this.model.message;
  }
}

export default HomeViewModel;
export { AboutViewModel, PortfolioViewModel, TestimonialsViewModel, ContactViewModel };