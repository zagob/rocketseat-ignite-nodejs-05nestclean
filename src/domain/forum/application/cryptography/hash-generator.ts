export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>;
}

// SOLID

// Single Responsability
// Open Closed Principle
// Liskov
// Interface Segregation
// Dependency inversion
