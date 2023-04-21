'use strict';

const btn=document.querySelector('.btn-country');
const countriesContainer=document.querySelector('.countries');

//////////////////////////////////////

/*
const getCountryData=function (country) {
  const request=new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${ country }?fullText=true`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText)
    const [...data]=JSON.parse(this.responseText)
    console.log(data);

    const html=`<article class="country">
    <img class="country__img" src="${ data.flags }" />
    <div class="country__data">
      <h3 class="country__name">${ data.name }</h3>
      <h4 class="country__region">${ data.region }</h4>
<div class="paracontainer">
      <div class="para">
      <p class="country__row"><span>👫</span>${ (+data.population/100000).toFixed(1) }</p>
      </div>
 <div class="para">
      <p class="country__row"><span>🗣️</span>${ data.languages }</p>
</div>
 <div class="para">
      <p class="country__row"><span>💰</span>${ data.currencies }</p>
</div>
</div
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity=1;
  })
}
console.log(getCountryData('India'));

console.log('Hi');
*/

// Consuming Promises

// const request=fetch('https://restcountries.com/v3.1/name/India?fullText=true');
// console.log(request)

const renderCountry=function (country, className) {
  const html=`<article class="${ className }">
    <img class="country__img" src="${ country.flags.png }" />
    <div class="country__data">
      <h3 class="country__name">${ country.name }</h3>
      <h4 class="country__region">${ country.region }</h4>
<div class="paracontainer">
      <div class="para">
      <p class="country__row"><span>👫</span>${ (+country.population/100000).toFixed(1) }</p>
      </div>
 <div class="para">
      <p class="country__row"><span>🗣️</span>${ country.languages }</p>
</div>
 <div class="para">
      <p class="country__row"><span>💰</span>${ country.currencies }</p>
</div>
</div
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity=1;
}


// const getCountryData=function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${ country }?fullText=true`)
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0])
//     })

// }

// With Arrow functions
const getCountryData=function (country) {
  fetch(`https://restcountries.com/v3.1/name/${ country }?fullText=true`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
}

getCountryData('India')










