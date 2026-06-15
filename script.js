
const images = {
    "Republic Day" : "https://www.beatoflife.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-25-at-15.01.22.jpeg"
}
let data = fetch("https://the-calendar.net/api/holidays/by-country/india/2026.json");
    data.then((val)=>{
        return val.json()
    }).then((dat)=>{
        // console.log(dat.holidays.length);
        let hol = dat.holidays
        for(let i=0;i<dat.holidays.length;i++){
            document.querySelector('#cards').innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${images[hol[i].name]} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${hol[i].name}</h5>
          <h6 class="card-text">Name : ${hol[i].date}</h6>
          <h6 class="card-text">Weekday : ${hol[i].weekday}</h6>
          <h6 class="card-text">Type : ${hol[i].kind}</h6>
          <p class="card-text"><b>Note : </b>${hol[i].note}</p>
          
        </div>
      </div>`
        }
        
    })