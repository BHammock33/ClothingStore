import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
//mock Db for now

export const users = [
 
  {
    _id: uuid(),
    firstName: "Bennett",
    lastName: "Hammock",
    email: "Bennetthammock@gmail.com",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Bennett Hammock",
        street: "555 Fake Street",
        city: "Coding Ville",
        state: "North Carolina",
        zipcode: '22255',
        country: 'United States',
        mobile: '4075950745',
    },
    ]
  },
];