// Create an empty table
const table = document.createElement("table");

const data = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

// Loop through the data
for (let i = 0; i < data.length; i++) {
  // Split the data into separate parts
  let parts = data[i].split(" - ");
  for (let j = 1; j < parts.length; j++) {
    let subparts = parts[j].split(", ");
    console.log(subparts);
    // console.log(parts);
    let id = parts[0];
    console.log(id);

    for (let k = 0; k < subparts.length - 2; k++) {
      let nest = subparts[k].split(" ");
      console.log(nest);
      let name = nest[0];
      console.log(name);
      let surname = nest[1];
      console.log(surname);

      let location = subparts[1];
      console.log(location);
      let role = subparts[2];
      console.log(role);

      // Create a new row
      const row = table.insertRow();
      // Insert the data into the row
      const cell1 = row.insertCell();
      cell1.innerHTML = id;
      const cell2 = row.insertCell();
      cell2.innerHTML = name;
      const cell3 = row.insertCell();
      cell3.innerHTML = surname;
      const cell4 = row.insertCell();
      cell4.innerHTML = location;
      const cell5 = row.insertCell();
      cell5.innerHTML = role;
    }
  }
}
// Append the table to an existing element on the page
document.getElementById("tableContainer").appendChild(table);

// let personels = ['C1234 - John Doe, London, Full-Stack',
// 'C2345 - Jane Doe, London, Data-Science',
// 'C2346 - Mary Ann, Paris, AWS-Devops',
// 'C2347 - Adam Smith, Texas, AWS-Devops',
// 'C2444 - Michael Great, Arizona, Full-Stack',
// 'C2555 - William Cash, Manchester, Data-Science',
// 'C2455 - Patrick Jane, Madrid, Full-Stack']
// let personelList = personels.map(person=>person.replace(" - ", " , ")).map(person=>person.split(","))
// console.log(personelList);
// const table = document.querySelector("table")
// personelList.map(personel=>{
//   // let row = table.insertRow()
//   let row = document.createElement("tr")
//   for (let i=0; i<personel.length; i++) {
//     let cell = document.createElement("td")
//     cell.innerHTML = personel[i]
//     row.appendChild(cell)
//     // row.insertCell()
//   }
//   table.appendChild(row)
// })
