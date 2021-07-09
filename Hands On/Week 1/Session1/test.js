const students = [
  {
    name: "Alice",
    age: 20
  },
  {
    name: "Bob",
    age: 21
  },
  {
    name: "Jane",
    age: 20
  }
];

const renderTable = () => {
  students.forEach(({ name, age }) => {
    const table = document
      .getElementById("data")
      .getElementsByTagName("tbody")[0];

    //stackoverflow
    table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
  });
};

//run render table
renderTable();


const calcAvgAge = (students) => {
    const total = students.reduce((acc, student) => acc + student.age, 0);
    return total/student.length;
};

document.getElementById("calcButton").addEventListener("click", handleClick);
