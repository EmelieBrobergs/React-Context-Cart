export interface ProductData {
    id: number;
    url: string;
    name: string;
    category: string;
    description: string;
    price: number;
    manafacturer: string;
    rating?: number;
    inStock: boolean;
}

export const products: ProductData[] = [{
    id: 1,
    url: 'https://inetimg2.se/img/1600x900/1966737_1.jpg',
    name: 'Apple iPhone 12 (64GB) 5G Lila',
    category: 'Mobiltelefon',
    description: 'Upplev iPhone 12 och en helt ny design. Tunnare, mindre och lättare i fem olika finishar. Utrustad med en 6,1-tums Super Retina XDR Display levererar den dubbelt så många pixlar, djupare svart för maximal skärpa och miljoner färger för detaljrikedom. iPhone 12 tål skvätt, stänk och damm ännu bättre. Dubbelt kamerasystem med både vidvinkel och ultravidvinkel som nu båda har nattläge vilket innebär att du kan ta de mest fantastiska bilderna även i svagt ljus.',
    price: 8290,
    manafacturer: 'Apple',
    rating: 5,
    inStock: true
}, {
    id: 2,
    url: 'https://inetimg3.se/img/1600x900/6302417_0.jpg',
    name: '1MORE ColorBuds Guld',
    category: 'Sound / Picture',
    description: '1More ColorBuds är ett par eleganta true wireless hörlurar med en kompakt design som laddas lätt i medföljande etui. Dem har en batteritid på upp till 22 timmar och stöd för snabbuppladdning. ColorBuds har en ergonomisk design och en lätt vikt vilket ger en långvarig komfort. De fyra mikrofonerna erbjuder kristallklart ljud vid samtal.',
    price: 549,
    manafacturer: '1MORE',
    rating: 1,
    inStock: true
}, {
    id: 3,
    url: 'https://inetimg2.se/img/688x386/6610253_0.jpg',
    name: 'Bang & Olufsen Beoplay Portal Svart',
    category: 'Gaming­headset',
    description: 'Högkvalitativt gamingheadset för Xbox och PC Beoplay Portal är Bang & Olufsen´s första gaming-headsetet och det är fullmatat med exklusiva och innovativa lösningar. Ljud, design, finish och komfort är i absoluta toppklassen och dessutom har den sedvanliga mikrofonarmen ersatts av högpresterande riktade mikrofoner i kåporna. Med ANC stänger du ute allt störande ljud.Beoplay Portal kopplas simpelt via Xbox Wireless till ditt Xbox eller med dongel/bluetooth till din PC. Spela trådlöst med perfekt synk i ljud och bild utan fördröjningar.',
    price: 5199,
    manafacturer: 'Bang & Olufsen',
    rating: 5,
    inStock: true
}, {
    id: 4,
    url: 'https://inetimg2.se/img/688x386/1511034_11.jpg',
    name: 'Taurus Gaming RTX 3060 - 3600',
    category: 'Gaming/Speldator',
    description: 'Kraften från ett överklockat RTX 3060 kombinerat med AMDs Ryzen 5 3600 gör att datorn har en god prestanda i de senaste spelen.',
    price: 15999,
    manafacturer: 'Taurus',
    inStock: true
}, {
    id: 5,
    url:'https://inetimg3.se/img/688x386/1966269_0.jpg',
    name: 'Acer Predator Helios 300 - 17,3" | i7 | 16GB | 1TB | RTX 3070 | 165Hz | QHD',
    category: 'Bärbar dator',
    description: 'Spela med stil Predator Helios 300 har en given plats vid din sida dagarna i ända. Utrustad med elfte generationens Core i7-processor och kraftfulla GeForce RTX 3070, har denna bärbara gamingdator tillverkats för att maxa dina spel. Denna dator är dessutom utrustad med en snabb QHD-skärm på 165Hz med 100% DCI-P3 för en perfekt visuell upplevelse. Förbättra din kreativitet och inspirera avund från både vänner och familj.',
    price: 20990,
    manafacturer: 'Acer',
    rating: 4,
    inStock: true
}]