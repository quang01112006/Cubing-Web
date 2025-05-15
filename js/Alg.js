class Algorithm {
    constructor(name, image, formula) {
      this.name = name;
      this.image = image;
      this.formula = formula;
    }
  
    render() {
      return `
        <div class="alg-item">
          <img src="${this.image}" alt="${this.name}">
          <p><b>${this.name}</b> <br/>
          ${this.formula}</p>
        </div>
      `;
    }
  }
  class AlgorithmCategory {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.algorithms = [];
    }
  
    addAlgorithm(name, image, formula) {
      this.algorithms.push(new Algorithm(name, image, formula));
    }
  
    render() {
      return `
        <p>${this.description}</p>
        <div class="alg-container">
          ${this.algorithms.map(alg => alg.render()).join("")}
        </div>
      `;
    }
}