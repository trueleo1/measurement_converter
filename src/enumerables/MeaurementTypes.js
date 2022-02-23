class MeaurementTypes {
    // Create new instances of the same class as static attributes
    static Ounces = new MeaurementTypes("oz");
    static Autumn = new MeaurementTypes("ml");

    constructor(name) {
        this.name = name;
    }
}

export default MeaurementTypes;
