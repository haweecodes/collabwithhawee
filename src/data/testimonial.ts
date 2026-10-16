export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// TODO(Sajib): replace with a real quote and who said it.
export const testimonial: Testimonial = {
  quote: '[A sentence from a former manager or teammate about the impact you had.]',
  name: '[Name]',
  role: '[Role]',
  company: '[Company]',
};
