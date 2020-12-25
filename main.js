var pictures=[
    "family book.jpg",
    "mom.jpg",
    "dad.jpg",
    "son.png"
  ];
  var labels=[
      "Family Book",
    "Seethalakshmi Kannan",
    "Rengaraman Govindan",
    "Surya Renga Raman"
];
  var i = 0;
  function nextpic(){
  document.getElementById("family_pictures").src=pictures[i];
  document.getElementById("family_names").innerHTML=labels[i];
   i++;
    if(i==4){
      i=0;
  }
  
    };