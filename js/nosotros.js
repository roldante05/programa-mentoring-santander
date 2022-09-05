
const alumnos = [{
    nombre:"Aaron Montivero",
    descripcion: "Estudiante de Desarrollo Web Full Stack  | HTML | CSS | JS | C",
    url:"https://www.linkedin.com/in/aaron-luciano-montivero/",
    imagen:"aaron.jpg"
  },{
    nombre:"Uriel Milgron",
    descripcion: "Desarrollador frontend | Frontend | HTML | CSS | Javascript | ReactJS",
    url:"https://www.linkedin.com/in/urielmilgron/'",
    imagen:"uriel.jfif"
  },{
    nombre:"Angeles Maldonado",
    descripcion: "Tutora de Desarollo Web| HTML | CSS | JS | Bootstrap | SASS | GIT",
    url:"https://www.linkedin.com/in/maria-de-los-angeles-maldonado/",
    imagen:"angeles.jpeg"
  },{
    nombre:"Leonel Montiel",
    descripcion: "Desarrollador Web FullStack - HTML | CSS | JS | Bootstrap | SASS | Node.js | MySQL | Java",
    url:"https://www.linkedin.com/in/leonel-montiel/",
    imagen:"leonel.jfif"
  },{
    nombre:"Dante Roldan",
    descripcion: "Estudiante de Desarrollo Web Full Stack | PHP | HTML | CSS | Javascript | Bootstrap",
    url:"'https://www.linkedin.com/in/danteroldan/",
    imagen:"dante.jfif"
  },{
    nombre:"Romina Gonzalez",
    descripcion: "Desarrolladora Web Full Stack HTML | CSS | Bootstrap | JavaScript | React | NodeJS",
    url:"https://www.linkedin.com/in/romina-solange-gonzalez-/",
    imagen:"romina.jpeg"
  },{
    nombre:"Lucas Paz",
    descripcion: "Estudiante de Desarrollo Web Full Stack",
    url:"https://www.linkedin.com/in/lucas-paz-4a9a26234/",
    imagen:"lucas.jfif"
  },{
    nombre:"Nicolas Pini",
    descripcion: "Estudiante de Programación Web FullStack",
    url:"https://www.linkedin.com/in/nicol%C3%A1s-pini-a0b8b120a/",
    imagen:"nicolas.jfif"
  },{
    nombre:"Gabriel Velasco",
    descripcion: "Desarrollador Web Full Stack  HTML | CSS | JS | Bootstrap",
    url:"https://www.linkedin.com/in/gabriel-ale-velasco/",
    imagen:"gabriel.jfif"
  },
    
  ];
  
  
  
  for (i = 0; i < alumnos.length; i++) {
    document.querySelector(
      "#carta"
    ).innerHTML += `<div class='ejem col col-sm-4 mb-4' ><div class='card shadow'  ><img src=media/${alumnos[i].imagen} class='card-img-top' alt='...'><div class='card-body'> <h5 class='card-title'>${alumnos[i].nombre} </h5><p class='card-text'>${alumnos[i].descripcion} </p><a target='_blank' href='${alumnos[i].url} ' class='btn btn-primary'>Linkedin</a></div></div></div>`;
  }
  
  