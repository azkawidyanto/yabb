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
  
  // this is the first API CALL
  const calcAvgAge = (students) => {
    return new Promise((resolve, reject) => {
      console.log("calculation start");
      const total = students.reduce((acc, student) => acc + student.age, 0);
      // wait 5s before resolved
      setTimeout(() => {
        console.log("calculation finished");
        const average = total / students.length;
        resolve(average);
      }, 5000);
    });
  };
  
  //every call request will return a PROMISE that
  //will be resolved after n second
  const secondApiCall = () => {
    // this function return a promise
    return new Promise((resolve, reject) => {
      console.log("Second api call");
      // wait 2s before resolved
      setTimeout(() => {
        console.log("second finished");
        resolve();
      }, 2000);
    });
  };
  
  const thirdApiCall = () => {
    return new Promise((resolve, reject) => {
      console.log("third api call");
      setTimeout(() => {
        console.log("third finished");
        resolve();
      }, 5000);
    });
  };
  
  // callback function when button clicked
  // v2 using .then
  const handleClick = async () => {
    calcAvgAge(students).then((result) => {
      console.log(result);
      document.getElementById("avg").innerHTML = result;
    });
    await secondApiCall();
    //third call must wait second call to finished so we add `await` for second call
    thirdApiCall();
  };
  
  //V1 using await
  // const handleClick = async () => {
  //   const avg = calcAvgAge(students);
  //   await secondApiCall();
  //   thirdApiCall();
  //   document.getElementById("avg").innerHTML = await avg;
  // };
  
  // console.log(
  //   new Promise((res, rej) => {
  //     setTimeout(() => {
  //       console.log("third finished");
  //       res();
  //     }, 5000);
  //   })
  // );
  
  // add onclick listener
  document.getElementById("calcButton").addEventListener("click", handleClick);
  