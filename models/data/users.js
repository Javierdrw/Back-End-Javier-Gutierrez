import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

let users = [
  {
    name: "Juan",
    email: "juan@example.com",
    password: "password123",
    photo: "https://example.com/juan.jpg",
    role: 1,
  },
  {
    name: "María",
    email: "maria@example.com",
    password: "password456",
    photo: "https://example.com/maria.jpg",
    role: 2,
  },
  {
    name: "Pedro",
    email: "pedro@example.com",
    password: "password789",
    photo: "https://example.com/pedro.jpg",
    role: 1,
  },
  {
    name: "Ana",
    email: "ana@example.com",
    password: "password012",
    photo: "https://example.com/ana.jpg",
    role: 2,
  },
  {
    name: "Luis",
    email: "luis@example.com",
    password: "password345",
    photo: "https://example.com/luis.jpg",
    role: 1,
  },
  {
    name: "Sofía",
    email: "sofia@example.com",
    password: "password678",
    photo: "https://example.com/sofia.jpg",
    role: 2,
  },
  {
    name: "Carlos",
    email: "carlos@example.com",
    password: "password901",
    photo: "https://example.com/carlos.jpg",
    role: 1,
  },
  {
    name: "Isabel",
    email: "isabel@example.com",
    password: "password234",
    photo: "https://example.com/isabel.jpg",
    role: 2,
  },
  {
    name: "Miguel",
    email: "miguel@example.com",
    password: "password567",
    photo: "https://example.com/miguel.jpg",
    role: 1,
  },
  {
    name: "Elena",
    email: "elena@example.com",
    password: "password890",
    photo: "https://example.com/elena.jpg",
    role: 2,
  },
];

User.insertMany(users);
