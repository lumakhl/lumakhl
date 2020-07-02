const items = [
    {
        id: 0,
        name: "Escova",
        image: "toothbrush.png",
        price: 100,
        quantity: 0,
        minTotalToVisible: 0,
        minTotalToAvaible: 100,
        pointsToIncrement: 1,
        available: false,
        visible: true
    },
    {
        id: 1,
        name: "Enxaguante",
        image: "mouthwash.png",
        price: 500,
        quantity: 0,
        minTotalToVisible: 100,
        minTotalToAvaible: 500,
        pointsToIncrement: 2,
        available: false,
        visible: false
    },
    {
        id: 2,
        name: "Escova Elétrica",
        image: "electric-toothbrush.png",
        price: 2500,
        quantity: 0,
        minTotalToVisible: 500,
        minTotalToAvaible: 2500,
        pointsToIncrement: 4,
        available: false,
        visible: false
    },
    {
        id: 3,
        name: "Pasta de dente",
        image: "toothpaste.png",
        price: 10000,
        quantity: 0,
        minTotalToVisible: 2500,
        minTotalToAvaible: 10000,
        pointsToIncrement: 6,
        available: false,
        visible: false
    }
];

export default items;
