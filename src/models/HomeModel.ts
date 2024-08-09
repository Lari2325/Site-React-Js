// src/models/HomeModel.ts

export interface HomeData {
    title: string;
    description: string;
    buttonText: string;
    services: Service[];
  }
  
  export interface Service {
    title: string;
    imageUrl: string;
    buttonText: string;
  }
  
  const HomeModel: HomeData = {
    title: "Welcome to Our Website",
    description: "We provide the best services to help you achieve your goals.",
    buttonText: "Get Started",
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
  };
  
  export default HomeModel;  