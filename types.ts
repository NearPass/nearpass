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
    image: string;
    telegram?: string;
    discord?: string;
    host: Host;
}
export interface Host {
    name: string;
    address: string;
    email: string;
}
