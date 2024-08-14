export interface Service {
  title: string;
  imageUrl: string;
  buttonText: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
}

export interface HomeData {
  title: string;
  description: string;
  buttonText: string;
  servicesData: ServicesData;
  portfolioTitle: string;
  portfolioItems: PortfolioItem[];
}

export interface AboutData { 
  title: string;
  description: string;
  buttonText: string;
  chartData: number[];
  chartLabels: string[];
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  description: string;
}

export interface Testimonials {
  title: string;
  testimonials: Testimonial[];
  button: string;
}

export interface Contact {
  title: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  button: string;
}

const HomeModel: HomeData = {
  title: "Welcome to Our Website",
  description: "We provide the best services to help you achieve your goals.",
  buttonText: "Get Started",
  servicesData: {
    title: "Our Services",
    services: [
      {
        title: "Service One",
        imageUrl: "https://placehold.co/600x400",
        buttonText: "Learn More",
      },
      {
        title: "Service Two",
        imageUrl: "https://placehold.co/600x400",
        buttonText: "Learn More",
      },
      {
        title: "Service Three",
        imageUrl: "https://placehold.co/600x400",
        buttonText: "Learn More",
      },
      {
        title: "Service Four",
        imageUrl: "https://placehold.co/600x400",
        buttonText: "Learn More",
      },
    ],
  },
  portfolioTitle: "Our Portfolio",
  portfolioItems: [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 2',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 3',
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 4',
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 5',
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 6',
    },
    {
      id: 7,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 7',
    },
    {
      id: 8,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'Projeto 8',
    },
  ],
};

const AboutModel: AboutData = {  
  title: "About Us",
  description: "We are dedicated to providing the best services and solutions for our clients. Our team is committed to excellence and innovation, ensuring that we meet and exceed your expectations.",
  buttonText: "Contact Us on WhatsApp",
  chartData: [12, 19, 3, 5, 2, 3],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  ctaLink: "https://wa.me/1234567890?text=Hello%20there!%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
};

const TestimonialsModel: Testimonials = {
  title: "What Our Clients Say",
  testimonials: [
    {
      id: '1',
      name: 'Jane Doe',
      description: '"The services provided were exceptional! The team was professional and attentive to all our needs. Highly recommend!"',
    },
    {
      id: '2',
      name: 'John Smith',
      description: '"A fantastic experience from start to finish. The attention to detail and customer service were top-notch."',
    },
    {
      id: '3',
      name: 'Emily Johnson',
      description: '"Very satisfied with the outcome. The team\'s expertise and dedication made all the difference."',
    }
  ],
  button: 'Fale Conosco'
};

const ContactModel: Contact = {
  title: 'Contact Us',
  description: 'If you have any questions or need further information, please reach out to us through the form below.',
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  subject: 'Subject',
  message: 'Message',
  button: 'Send'
};

export default HomeModel;
export { AboutModel, TestimonialsModel, ContactModel };