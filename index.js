const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = [
  "Olivia",

  "Ethan",

  "Sophia",

  "Jackson",

  "Isabella",

  "Aiden",

  "Mia",

  "Lucas",

  "Ava",

  "Mason",

  "Harper",

  "Elijah",

  "Amelia",

  "Noah",

  "Lily",

  "Liam",

  "Charlotte",

  "Benjamin",

  "Eric",

  "James",
];

const occupation = [
  "Programmer",

  "Doctor",

  "Teacher",

  "Graphic Designer",

  "Mechanical Engineer",

  "Nurse",

  "Architect",

  "Data Scientist",

  "Chef",

  "Lawyer",

  "Accountant",

  "Electrician",

  "Pharmacist",

  "Photographer",

  "Journalist",

  "Dentist",

  "Pilot",

  "Marketing Manager",

  "Civil Engineer",

  "Veterinarian",
];

function render() {
  const freelancerList = document.querySelector("#freelancer-list");

  const freelancerElements = freelancers.map((freelancer) => {
    const list = document.createElement("ul");

    const element = document.createElement("li");
    element.textContent = `${freelancer.name}, ${freelancer.occupation}, ${freelancer.price}`;

    list.appendChild(element);
    return list;
  });
  freelancer-items.replaceChildren(...freelancerElements);

  const averagePriceElement = document.querySelector("#average-price");
  const averagePrice = calculateaveragePrice();
  averagePriceElement.textContent = `Average Price: $${averagePrice}`;
}

function calculateaveragePrice() {
  const totalPrice = freelancers.reduce(
    (total, freelancer) => total + freelancer.price,
    0
  );
  return (totalPrice / freelancers.length).toFixed(2);
}

function addFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupation[Math.floor(Math.random() * occupation.length)];
  const randomPrice = Math.floor(Math.random() * 101);

  freelancers.push({
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  });

  render();
}
render();

let count = 0;

const maxCount = 20; // Set this to the number of times you want the interval to run

const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();

  count++;

  if (count >= maxCount) {
    clearInterval(addFreelancerIntervalId);
  }
}, 3000);
