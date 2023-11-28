console.log("hello");

const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();

    console.log(data);
    
    const name = document.createElement("p");
    name.innerText = data[0].name.common;
    console.log(name);

    const attributes = document.createElement("ul");
    const capital = document.createElement("li");
    capital.innerText = data[0].capital

    attributes.appendChild(capital)

    const langs = document.createElement("li");
    langs.innerText = Object.values(data[0].languages);
    attributes.appendChild(langs);

    const pop = document.createElement("li");
    pop.innerText = data[0].population;
    attributes.appendChild(pop);
    
    

    document.querySelector("body").appendChild(name);
    document.querySelector("body").appendChild(attributes);


}

getCountryByName("sri")

const getAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countryContainer = document.createElement("div");

    data.forEach((country) => {
        const countryInfo = document.createElement("p");
        countryInfo.innerText = JSON.stringify(country, null, 2);
        countryContainer.appendChild(countryInfo);
    })

    document.querySelector("body").appendChild(countryContainer);
}

getAllCountries();