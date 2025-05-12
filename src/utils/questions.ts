export type Question = {
  text: string;
  options: string[];
  answer: string;
};
export const questions = [
  {
    text: 'Which pattern ensures a class has only one instance and provides a global point of access to it?',
    options: ['Factory', 'Singleton'],
    answer: 'Singleton',
  },
  {
    text: 'Which pattern provides a simplified interface to a complex subsystem?',
    options: ['Facade', 'Decorator'],
    answer: 'Facade',
  },
  {
    text: 'What design pattern allows behavior to be added to an object dynamically?',
    options: ['Observer', 'Decorator'],
    answer: 'Decorator',
  },
  {
    text: 'Which pattern defines a one-to-many dependency so that when one object changes state, all its dependents are notified?',
    options: ['Observer', 'Strategy'],
    answer: 'Observer',
  },
  {
    text: 'Which pattern is used to create objects without specifying the exact class of object that will be created?',
    options: ['Factory', 'Prototype'],
    answer: 'Factory',
  },
  {
    text: 'Which pattern lets you define a family of algorithms and make them interchangeable?',
    options: ['Strategy', 'Mediator'],
    answer: 'Strategy',
  },
  {
    text: 'What pattern avoids the cost of creating complex objects repeatedly by cloning existing ones?',
    options: ['Builder', 'Prototype'],
    answer: 'Prototype',
  },
  {
    text: 'Which pattern encapsulates a request as an object, allowing parameterization and queuing?',
    options: ['Command', 'Adapter'],
    answer: 'Command',
  },
  {
    text: 'Which pattern allows incompatible interfaces to work together?',
    options: ['Adapter', 'Flyweight'],
    answer: 'Adapter',
  },
  {
    text: 'What pattern is useful for sharing common data between many similar objects to reduce memory usage?',
    options: ['Flyweight', 'Bridge'],
    answer: 'Flyweight',
  },
];
