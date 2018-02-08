'use strict';

QUnit.module('Тестируем функцию inverse', () => {
	QUnit.test('Функция работает с пустым массивом', (assert) => {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', (assert) => {
		assert.deepEqual(inverse([1]), [1]);
		assert.deepEqual(inverse(['a']), ['a']);
		assert.deepEqual(inverse([null]), [null]);
		assert.deepEqual(inverse([false]), [false]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', (assert) => {
		assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
		assert.deepEqual(inverse([null, false, 0, Infinity, '']), ['', Infinity, 0, false, null]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', (assert) => {
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', (assert) => {
		assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5]);
		// Ошибка.
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5], -15), [1, 2, 3, 4, 5]);
	});

	QUnit.test('Функция работает не только с числами', (assert) => {
		assert.deepEqual(inverse(['a', 'b', 'c', 'd']), ['d', 'c', 'b', 'a']);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd'], 0), ['d', 'c', 'b', 'a']);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd'], 1), ['a', 'd', 'c', 'b']);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd'], -2), ['b', 'a', 'c', 'd']);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd'], -1488), ['a', 'b', 'c', 'd']);
		assert.deepEqual(inverse([['a'], ['b', 'c'], 'd']), ['d', ['b', 'c'], ['a']]);
	});

	QUnit.test('Функция не падает на некорректных аргументах', (assert) => {
		assert.deepEqual(inverse([1, 2], 'sfg'), [2, 1]);
		assert.deepEqual(inverse([1, 2], [1, 2]), [2, 1]);
		assert.deepEqual(inverse('aaa'), 'aaa');
	});
});
