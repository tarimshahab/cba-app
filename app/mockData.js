const debitAccounts = [
  {
    name: "Checking",
    number: "1111 1111 1111 1111",
    balance: 1585000 //in cents
  },
  {
    name: "Savings",
    number: "1111 2222 2222 2222",
    balance: 256125855 //in cents
  }
];

const creditAccounts = [
  {
    name: "American Express",
    number: "9999 9999 9999 9999",
    balance: 38615 //in cents
  },
  {
    name: "Visa",
    number: "9999 9999 9999 8888",
    balance: 98536 //in cents
  }
];

const payees = [
  {
    name: "uOttawa",
    number: 12345
  },
  {
    name: "Hydro Ottawa",
    number: 98761
  },
  {
    name: "Fido",
    number: 85222
  }
];

const frequencies = [
  {
    name: "Weekly",
    value: 7
  },
  {
    name: "Bi-monthly",
    value: 15
  },
  {
    name: "Monthly",
    value: 30
  }
];

const bankBranches = [
  {
    address: "111 Bank Street",
    phone: "(613)-111-1111",
    manager: "Bill Blington"
  },
  {
    address: "222 Bling Ave",
    phone: "(613)-222-2222",
    manager: "Ceri Blington"
  },
  {
    address: "333 Chaching Road",
    phone: "(613)-333-3333",
    manager: "Gary Blington"
  },
  {
    address: "444 Richie Rich Ave",
    phone: "(613)-444-4444",
    manager: "Samantha Blington"
  },
  {
    address: "555 Loaded Boulevard",
    phone: "(613)-555-5555",
    manager: "Rory Blington"
  }
];

export default {
  debitAccounts,
  creditAccounts,
  payees,
  frequencies,
  bankBranches
};
