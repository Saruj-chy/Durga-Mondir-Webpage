


window.onload = () =>{
  loadTableDataJAN(January);
 
}

let sortDirection = false;

let January = [
  { serial:1, name:"অয়ন দত্ত",amount:"১০০০০", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:2, name:"রুপেশ দত্ত",amount:"৩০০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:3, name:"বিপ্লব দত্ত",amount:"১০০০", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:4, name:"যুবরাজ দত্ত",amount:"১০০০" , number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:5, name:"সুপ্লব দত্ত",amount:"৫০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},

  { serial:6, name:"রাজিব দত্ত",amount:"৫০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:7, name:"সুজল দত্ত",amount:"৫০০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:8, name:"লিটন দত্ত",amount:"৫০০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:9, name:"শীতল দত্ত",amount:"৫০০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:10, name:"সুকান্ত দত্ত",amount:"১০০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  
  { serial:11, name:"বিকাশ দত্ত",amount:"৫০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  { serial:12, name:"যিশু দত্ত",amount:"৫০০ ", number:"01516******", date:"কেঁয়াগড় মধ্যমপাড়া"},
  
];
function loadTableDataJAN(January){
    const tableBodyJAN = document.getElementById("tableBodyJAN");
    let dataJAN = "";

    for(let jan of January){
      dataJAN += `<tr><td>${jan.serial}</td><td>${jan.name}</td><td>${jan.amount}</td><td>${jan.number}</td><td>${jan.date}</td></tr>`
    }
    console.log(dataJAN);

    tableBodyJAN.innerHTML = dataJAN ;

}

