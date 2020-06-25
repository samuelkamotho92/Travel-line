const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Aruba":null,
    "Kenya":null,
    "Zanzibar":null,
    "Hawai":null,
    "california":null,
    "Jamaica":null,
    "France":null,
    "Italy":null,
    "Tanzania":null,
    "Uganda":null,
    "Mauratias":null,
    "England":null,
    "France":null,
    "Germany":null,
    "Los angelas":null,
  }
});
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
indicators:false,
height:500,
transition:500,
interval:6000,
});
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});
const sc = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(sc, {});
//Grab the reffrence of the form
const form = document.querySelector('.Content');
//Saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('travel').add({
 name: form.name.value,
 email: form.email.value
  })
form.name.value = "";
form.email.value = "";
})