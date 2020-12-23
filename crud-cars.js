const cars = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model 3",
    year: 2017,
    color: "Black",
    price: 60000,
  },
  {
    id: 2,
    brand: "Tesla",
    model: "Model S",
    year: 2012,
    color: "Red",
    price: 40000,
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model X",
    year: 2015,
    color: "white",
    price: 40000,
  },
  {
    id: 4,
    brand: "Tesla",
    model: "Model Y",
    year: 2020,
    color: "gray",
    price: 80000,
  },
];

function printCars() {
  let html = "";
  cars.forEach((element) => {
    html += `<tr>
              <td>${element.brand}</td>
              <td>${element.model}</td>
              <td>${element.year}</td>
              <td>${element.color}</td>
              <td>${element.price}</td>  
               <td><i class="fas fa-trash rotate-out-center" onclick="deleteCar(${element.id})"></i></td>
               <td><i class="far fa-edit" onclick="updateCars(${element.id})"></i></td>               
            </tr>`;
  });
  document.getElementById("container-details").innerHTML = html;
}

function deleteCar(id) {
  const index = cars.findIndex((element) => element.id == id);
  cars.splice(index, 1);
  printCars();
}

function addCar() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const price = document.getElementById("price").value;
  const id = cars[cars.length - 1].id + 1;

  const newCar = {
    id,
    brand,
    model,
    year,
    color,
    price,
  };
  cars.push(newCar);

  document.getElementById("form-cars").reset();
  printCars();
}

printCars();
