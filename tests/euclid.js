'use strict';

QUnit.module('Тестируем функцию euclid', function () {
    QUnit.test('Функция возвращает undefined, если на входе нет чисел', function (assert) {
        assert.strictEqual(euclid(), undefined, 'euclid() === undefined');
    });

    QUnit.test('На входе некоторые из чисел не являются натуральным', function (assert) {
        assert.strictEqual(euclid(4, 0, 6), undefined, 'euclid(4, 0, 6) === undefined');
		assert.strictEqual(euclid(0), undefined, 'euclid(0) === undefined');
		assert.strictEqual(euclid(0, 42, 85, -1, -5), undefined, 'euclid(0, 42, 85, 0, 0) === undefined');
    });

    QUnit.test('Функция не меняет знаечения аргументов', function (assert) {
    	let obj = 5;
        assert.strictEqual(euclid(obj, 15), 5, 'euclid(obj, 15) === 5');
        assert.strictEqual(euclid(obj), 5, 'euclid(obj) === 5');

    });

	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
		assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
	});
});
