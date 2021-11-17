class Shipping {
    public strategy: Strategy | null = null;

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public calculate() {
        return this.strategy ? this.strategy.calculate() : '';
    }
}

const shipping = new Shipping();

console.log(shipping.strategy);

abstract class Strategy {
    // public czoko = 'abc';
    public abstract calculate(): string;
}

class TaxiStrategy extends Strategy {
    public calculate() { return '1zł'; }
}

class BusStrategy extends Strategy {
    public calculate() { return '5zł'; }
}

const taxi = new TaxiStrategy();

shipping.setStrategy(taxi);

console.log('strategy:', shipping.strategy);

console.log(shipping.calculate());