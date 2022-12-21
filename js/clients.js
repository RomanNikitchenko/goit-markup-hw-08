(() => {
  const listClients = document.querySelector('.list-clients');

  const logos = ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5', 'Logo6'];

  const markup = () => {
    return logos.map((logo) => {
      return `<li class="item-clients item-clients--end">
                  <a class="item-clients__link" href="">
                      <svg class="item-clients__icon" width="106" height="60">
                          <use href="./images/icons.svg#${logo}"></use> 
                      </svg>
                  </a>
              </li>`
      }).join("");
  }

  listClients.insertAdjacentHTML("beforeend", markup());
})();