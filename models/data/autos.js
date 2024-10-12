import "dotenv/config.js";
import "../../config/database.js";
import Auto from "../Auto.js";

let autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2015,
    color: "Blanco",
    precio: 15000,
    img: "https://example.com/toyota-corolla.jpg",
  },
  {
    marca: "Honda",
    modelo: "Civic",
    anio: 2018,
    color: "Negro",
    precio: 20000,
    img: "https://example.com/honda-civic.jpg",
  },
  {
    marca: "Ford",
    modelo: "Fusion",
    anio: 2012,
    color: "Gris",
    precio: 12000,
    img: "https://example.com/ford-fusion.jpg",
  },
  {
    marca: "Nissan",
    modelo: "Altima",
    anio: 2016,
    color: "Azul",
    precio: 18000,
    img: "https://example.com/nissan-altima.jpg",
  },
  {
    marca: "Chevrolet",
    modelo: "Cruze",
    anio: 2014,
    color: "Rojo",
    precio: 14000,
    img: "https://example.com/chevrolet-cruze.jpg",
  },
  {
    marca: "Kia",
    modelo: "Optima",
    anio: 2017,
    color: "Verde",
    precio: 22000,
    img: "https://example.com/kia-optima.jpg",
  },
  {
    marca: "Hyundai",
    modelo: "Elantra",
    anio: 2013,
    color: "Plata",
    precio: 11000,
    img: "https://example.com/hyundai-elantra.jpg",
  },
  {
    marca: "Mazda",
    modelo: "3",
    anio: 2019,
    color: "Negro",
    precio: 25000,
    img: "https://example.com/mazda-3.jpg",
  },
  {
    marca: "Subaru",
    modelo: "Impreza",
    anio: 2016,
    color: "Blanco",
    precio: 19000,
    img: "https://example.com/subaru-impreza.jpg",
  },
  {
    marca: "Volkswagen",
    modelo: "Golf",
    anio: 2018,
    color: "Gris",
    precio: 21000,
    img: "https://example.com/volkswagen-golf.jpg",
  },
];

Auto.insertMany(autos);
