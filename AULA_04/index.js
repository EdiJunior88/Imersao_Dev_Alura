var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/6/62/Arrival_%28filme%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}