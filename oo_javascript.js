class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    acelerar() {
      throw new Error("Método acelerar precisa ser implementado.");
    }
  }
  
  class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
      super(marca, modelo);
      this.cor = cor;
    }
  
    acelerar() {
      console.log(`O carro ${this.marca} ${this.modelo} está acelerando.`);
    }
  }

  class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    acelerar() {
      console.log(`A moto ${this.marca} ${this.modelo} está acelerando.`);
    }
  }
  

  const carro1 = new Carro("Toyota", "Corolla", "Prata");
  const moto1 = new Moto("Honda", "CBR600RR", "600cc");
  const carro2 = new Carro("Ford", "Fiesta", "Preto");

  carro1.acelerar();
  moto1.acelerar();
  carro2.acelerar();
  