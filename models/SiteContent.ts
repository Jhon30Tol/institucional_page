export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string; // Material symbol name or path
}

export interface Founder {
    id: string;
    name: string;
    role: string;
    story: string;
    image?: string;
}

export interface Testimonial {
    id: string;
    author: string;
    company: string;
    content: string;
}

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
}
