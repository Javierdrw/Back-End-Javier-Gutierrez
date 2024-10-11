import "dotenv/config.js"
import "../../config/database.js"
import Moto from "../Moto.js"

let motos = [
    {
      brand: "Harley-Davidson",
      model: "Electra Glide",
      year: 2015,
      color: "Black",
      price: 25000,
      image: "https://example.com/harley-electra.jpg",
      tank: 6,
      consumption: 40,
      weight: 550,
      cylinder: 1584
    },
    {
      brand: "Yamaha",
      model: "YZ450F",
      year: 2018,
      color: "Blue",
      price: 6000,
      image: "https://example.com/yamaha-yz450.jpg",
      tank: 3,
      consumption: 35,
      weight: 120,
      cylinder: 449
    },
    {
      brand: "Honda",
      model: "CB1000R",
      year: 2012,
      color: "Red",
      price: 10000,
      image: "https://example.com/honda-cb1000.jpg",
      tank: 4,
      consumption: 40,
      weight: 250,
      cylinder: 998
    },
    {
      brand: "Ducati",
      model: "Monster 1200",
      year: 2016,
      color: "Gray",
      price: 30000,
      image: "https://example.com/ducati-monster.jpg",
      tank: 5,
      consumption: 35,
      weight: 200,
      cylinder: 1198
    },
    {
      brand: "BMW",
      model: "K 1600 GTL",
      year: 2014,
      color: "Silver",
      price: 22000,
      image: "https://example.com/bmw-k1600.jpg",
      tank: 7,
      consumption: 45,
      weight: 350,
      cylinder: 1560
    },
    {
      brand: "Suzuki",
      model: "GSX-R1000",
      year: 2017,
      color: "Black",
      price: 15000,
      image: "https://example.com/suzuki-gsxr.jpg",
      tank: 4,
      consumption: 30,
      weight: 210,
      cylinder: 999
    },
    {
      brand: "Kawasaki",
      model: "Ninja H2R",
      year: 2013,
      color: "Green",
      price: 40000,
      image: "https://example.com/kawasaki-ninja.jpg",
      tank: 4,
      consumption: 35,
      weight: 200,
      cylinder: 998
    },
    {
      brand: "Triumph",
      model: "Tiger 800",
      year: 2019,
      color: "Red",
      price: 12000,
      image: "https://example.com/triumph-tiger.jpg",
      tank: 4,
      consumption: 40,
      weight: 220,
      cylinder: 799
    },
    {
      brand: "Aprilia",
      model: "RSV4 RF",
      year: 2016,
      color: "Blue",
      price: 25000,
      image: "https://example.com/aprilia-rsv4.jpg",
      tank: 4,
      consumption: 35,
      weight: 200,
      cylinder: 999
    },
    {
      brand: "Honda",
      model: "CBR1000RR",
      year: 2018,
      color: "Gray",
      price: 18000,
      image: "https://example.com/honda-cbr1000.jpg",
      tank: 4,
      consumption: 40,
      weight: 200,
      cylinder: 999
    }
  ]
Moto.insertMany(motos)