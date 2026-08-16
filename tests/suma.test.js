const suma = require('../src/suma');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(99); // 👈 valor incorrecto a propósito
});

test('suma -1 + 1 debe ser 0', () => {
  expect(suma(-1, 1)).toBe(0);
});