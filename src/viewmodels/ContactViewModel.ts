import ContactModel from '../models/ContactModel';

class ContactViewModel {
  private model = ContactModel;

 
  getTitle(): string {
    return this.model.title;
  }

  getDescription(): string {
    return this.model.description;
  }
}

export default ContactViewModel;