import "dotenv/config.js"
import '../../config/database.js'
import Avion from "../Avion.js"

let aviones = [
    {
      brand: "Boeing",
      model: "737-800",
      year: 2015,
      color: "White",
      price: 80000000,
      image: "https://example.com/boeing-737.jpg",
      tank: 20000,
      passengers: 160,
      capacity: 20000,
      manufacturer: "Boeing"
    },
    {
      brand: "Airbus",
      model: "A320-200",
      year: 2018,
      color: "Blue",
      price: 90000000,
      image: "https://example.com/airbus-a320.jpg",
      tank: 22000,
      passengers: 180,
      capacity: 22000,
      manufacturer: "Airbus"
    },
    {
      brand: "Bombardier",
      model: "CRJ-900",
      year: 2012,
      color: "Gray",
      price: 40000000,
      image: "https://example.com/bombardier-crj.jpg",
      tank: 15000,
      passengers: 90,
      capacity: 15000,
      manufacturer: "Bombardier"
    },
    {
      brand: "Embraer",
      model: "ERJ-195",
      year: 2016,
      color: "Red",
      price: 50000000,
      image: "https://example.com/embraer-erj.jpg",
      tank: 18000,
      passengers: 120,
      capacity: 18000,
      manufacturer: "Embraer"
    },
    {
      brand: "Cessna",
      model: "Citation X+",
      year: 2014,
      color: "Silver",
      price: 20000000,
      image: "https://example.com/cessna-citation.jpg",
      tank: 10000,
      passengers: 8,
      capacity: 10000,
      manufacturer: "Cessna"
    },
    {
      brand: "Gulfstream",
      model: "G650ER",
      year: 2017,
      color: "Black",
      price: 60000000,
      image: "https://example.com/gulfstream-g650.jpg",
      tank: 20000,
      passengers: 19,
      capacity: 20000,
      manufacturer: "Gulfstream"
    },
    {
      brand: "Dassault",
      model: "Falcon 8X",
      year: 2013,
      color: "White",
      price: 50000000,
      image: "https://example.com/dassault-falcon.jpg",
      tank: 15000,
      passengers: 16,
      capacity: 15000,
      manufacturer: "Dassault"
    },
    {
      brand: "Hawker",
      model: "900XP",
      year: 2019,
      color: "Gray",
      price: 30000000,
      image: "https://example.com/hawker-900.jpg",
      tank: 12000,
      passengers: 8,
      capacity: 12000,
      manufacturer: "Hawker"
    },
    {
      brand: "Learjet",
      model: "75",
      year: 2016,
      color: "Red",
      price: 20000000,
      image: "https://example.com/learjet-75.jpg",
      tank: 10000,
      passengers: 8,
      capacity: 10000,
      manufacturer: "Learjet"
    },
    {
      brand: "Pilatus",
      model: "PC-12 NG",
      year: 2018,
      color: "Blue",
      price: 4000000,
      image: "https://example.com/pilatus-pc12.jpg",
      tank: 8000,
      passengers: 9,
      capacity: 8000,
      manufacturer: "Pilatus"
    }
  ];

Avion.insertMany(aviones)
