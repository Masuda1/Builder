import { PizzaDirector } from "./director/PizzaDirector";
import { MargheritaPizzaBuilder } from "./builders/MargheritaPizzaBuilder";
import { PepperoniPizzaBuilder } from "./builders/PepperoniPizzaBuilder";

function main(): void {
    // Instância do Diretor com Builder inicial
    const pizzaManager = new PizzaDirector(new MargheritaPizzaBuilder());

    // Preparando a Pizza Margherita
    console.log("Montando a Pizza Margherita:");
    const margherita = pizzaManager.makeMargheritaPizza();
    margherita.display();

    // Alterando para o Builder de Pizza Pepperoni
    pizzaManager.setBuilder(new PepperoniPizzaBuilder());

    // Preparando a Pizza Pepperoni
    console.log("\nMontando a Pizza Pepperoni:");
    const pepperoni = pizzaManager.makePepperoniPizza();
    pepperoni.display();

    // Criando uma Pizza totalmente Personalizada
    console.log("\nMontando uma Pizza Customizada:");
    const customPizzaBuilder = new MargheritaPizzaBuilder();
    const personalizedPizza = customPizzaBuilder
        .reset()
        .setSize("média")
        .setDough("fina")
        .addTopping("Tomate")
        .addTopping("Bacon")
        .addTopping("Cebola")
        .getResult();
    personalizedPizza.display();
}

// Executando a função principal
main();
