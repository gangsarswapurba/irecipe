import nlbr from 'nl2br';

/**
 * iniResep Class
 */
class IniResep extends HTMLElement {

    set resep(resep) {
      this._resep = resep;
      this.render(this._resep);
    }

    render() {
      this.className += 'col col-md-6 col-lg-4 mb-4';
      this.className += ' ';
      this.className += this._resep.strCategory.toLowerCase();
      this.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-header py-4">
          <a class="receipe-link" target="_blank" href="${this._resep.strSource}"><h3>${this._resep.strMeal}</h3></a>
          <span class="badge badge-pill badge-dark shadow-sm">${this._resep.strArea}</span>
        </div>
        <a target="_blank" href="${this._resep.strSource}"><img class="card-img-top" src="${this._resep.strMealThumb}" 
          alt="${this._resep.alt}" /></a>
          <div class="card-body">
            <h5 class="card-title">Instructions</h5>
            <p class="card-text">${nlbr(this._resep.strInstructions)}</p>
            <a target="_blank" href="${this._resep.strSource}" class="btn btn-block btn-secondary shadow-sm">Source <i class="fa fa-external-link"></i></a>
          </div>
      </div>
      `;
    }

}
customElements.define('ini-resep', IniResep);
