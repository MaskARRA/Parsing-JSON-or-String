const myData = [
    {
        name: "Zoren Agan",
        age: "30",
        live: "Cagayan de Oro City",
        born: 1991,
        likes: ["Coding" , "Watching Anime", "Playing Games"]
    }

];
const petData = [
   
    {
        petName: "Claudio",
        petSpecie: "Dog",
        born: 2020,
    },
    {
        petName: "Maldita",
        petSpecie: "Cat",
        born: 2021,
    }

];

function yearage(born) {
    let bornAge = new Date().getFullYear() - born;
    if (bornAge == 1) {
        return "1 year old";
    } else if (bornAge == 0) {
        return "Baby";
    } else {
        return `${bornAge} years old`;
    }
}

function mylike(likes) {
    return `
    <ul>
    ${likes.map(like => `<li>${like}</li>`).join("")}
    </ul>
    `;
}

function petDetail(detail) {
    return `
        <div>
        <h2>${detail.petName} <span>(${detail.petSpecie})</span></h2>
        <p><strong>Age: ${yearage(detail.born)}</p></strong>
        </div>  
    `
}

function myDetail(detail1) {
    return `
        <div>
        <h2>${detail1.name}</h2>
        <p><strong>Age: ${yearage(detail1.born)}</p></strong>
        <p><strong>Likes: ${mylike(detail1.likes)}</p></strong>

        </div>  
    `
}

document.getElementById("app").innerHTML = `
    ${myData.map(myDetail).join("")}
    ${petData.map(petDetail).join("")}
  
`;