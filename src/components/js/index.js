document.addEventListener('DOMContentLoaded', function () {
  /*** Mettre le background à la bonne hauteur... ***/
  const body = document.querySelector('.finisher-header');
  let bodyHeight = body.offsetHeight - 10;

  const canva = document.querySelector('#finisher-canvas');
  canva.style.height = `${bodyHeight}px`;
  console.log('test');

  /*** Hover Nos Valeurs ***/
  const cards = document.querySelectorAll('.ourValuesCard');

  cards.forEach((card) => {
    let box = wichBox(card);

    card.addEventListener('mouseover', () => {
      showBox(box);
    });
    card.addEventListener('mouseout', () => {
      hideBox(box);
    });
  });

  function wichBox(card) {
    if (card.classList.contains('card-1')) {
      box = document.querySelector('.box-1');
    } else if (card.classList.contains('card-2')) {
      box = document.querySelector('.box-2');
    } else if (card.classList.contains('card-3')) {
      box = document.querySelector('.box-3');
    } else if (card.classList.contains('card-4')) {
      box = document.querySelector('.box-4');
    } else {
      box = document.querySelector('.box-5');
    }

    return box;
  }

  function showBox(box) {
    box.classList.remove('hidden');
    box.classList.add('show');
  }

  function hideBox(box) {
    box.classList.remove('show');
    box.classList.add('hidden');
  }
});
