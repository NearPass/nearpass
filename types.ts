export interface Event {
    id: string;
    title: string;
    price: string;
    active: boolean;
    description: string;
    timestamp: string;
    eventType: string;
    venue?: string;
    hostname: string;
    thumbnail: string;
    telegram?: string;
    discord?: string;
    host: Host;
    faq: FAQ;
    question1: string;
    question2: string;
}

export interface FAQ {
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
}

export interface Host {
    name: string;
    address: string;
    email: string;
}
