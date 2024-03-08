export interface Review {
    comment: string;
    customer: {
      firstName: string;
      lastName: string;
    };
    feedback: "positive" | "negative";
    hotel: string;
    rating: number;
    title: string;
  }
  