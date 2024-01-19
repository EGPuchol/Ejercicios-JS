const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  const div$$ = document.createElement("div");
  document.body.appendChild(div$$);
  
  countries.forEach(function (country) {
    const divcountry$$ = document.createElement("divcountry");
    divcountry$$.classList.add('country');
  
    let h4title = document.createElement('h4');
    h4title.textContent = country.title;
  
    let img = document.createElement('img');
    img.setAttribute('src', country.imgUrl);
    img.setAttribute('alt', country.title);
  
    divcountry$$.appendChild(h4title);
    divcountry$$.appendChild(img);
    div$$.appendChild(divcountry$$);
  });

  const button$$ = document.createElement ('button');
  button$$.addEventListener('click', function(){
    // (div$$).lastChild.remove();
    // div$$.removeChild(divcountry$$);
  })

  //PENDIENTE: MISMO PROBLEMA QUE EL ANTERIOR, NO CONSIGO QUE EL BOTÓN HAGA NADA