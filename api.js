fetch('https://www.themealdb.com/api/json/v1/1/random.php')  
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en respuesta ' + response.statusText);
    }
    return response.json();  
  })
  .then(data => {
    //data.meals[0]
    const imagenUrl = data.meals[0].strMealThumb;  // Acceder a la URL de la imagen en la respuesta JSON
    const tituloapi = data.meals[0].strMeal;
    const imgElemento = document.getElementById('imgdinamica');
    const titElemento = document.getElementById('titulo-comida');
    imgElemento.src = imagenUrl;
    titElemento.textContent =  tituloapi;
  })
  .catch(error => {
    console.error('Error en el fetch:', error);
  });