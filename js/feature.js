(() => {
  const galleryItems = [
    {
      svg: 'antenna',
      title: 'Внимание к деталям',
      text: 'Идейные соображения, а также начало повседневной работы по формированию позиции.',
    },
    {
      svg: 'clock',
      title: 'Пунктуальность',
      text: 'Задача организации, в особенности же рамки и место обучения кадров влечет за собой.',
    },
    {
      svg: 'diagram',
      title: 'Планирование',
      text: 'Равным образом консультация с широким активом в значительной степени обуславливает.',
    },
    {
      svg: 'astronaut',
      title: 'Современные технологии',
      text: 'Значимость этих проблем настолько очевидна, что реализация плановых заданий.',
    },
  ];


  const featureList = document.querySelector('.feature-list');

  const markup = () => {
    return galleryItems.map(({svg, title, text}) => {
      return `<li class="feature-list__item">
                  <div class="feature-list__block-icon">
                      <svg class="feature-list__icon" width="70" height="70">
                          <use href="./images/icons.svg#${svg}"></use>
                      </svg>
                  </div>
                  <button type="button" data-source="${title}">title</button>
                  <h3 class="feature-list__title">${title}</h3>
                  <p class="feature-list__text">${text}</p>
              </li>`
      }).join("");
  }

  featureList.insertAdjacentHTML("beforeend", markup());

  
  featureList.addEventListener('click', onfeatureContainerclick);

  function onfeatureContainerclick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "BUTTON") {
      return;
    }

    console.log('qwe');
    displaysModal(evt.target.dataset.source);
  };


  function displaysModal(title) {
    const instance = basicLightbox.create(`
        <div class="modal-basic-lightbox">
            <p class="modal-basic-lightbox__title">${title}</p>
            <input class="modal-basic-lightbox__input">
            <button type="button class="modal-basic-lightbox__button"">Close</button>
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('button').onclick = instance.close
        }
    })

    instance.show();
  }
})();