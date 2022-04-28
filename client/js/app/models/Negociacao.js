class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); // Programação defensiva para não alterar a data pelo construtor
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); // tornar o objeto imutável
    }
    get data() {
        return new Date(this._data.getTime()); // Programação defensiva para não alterar a data pelo método
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}