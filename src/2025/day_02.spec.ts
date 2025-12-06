import { create_windows, id_is_valid, id_is_valid_repeated } from "./day_02"

describe('day_02', () => {
  describe('id_is_valid ', () => {
    it.each([22, 11, 123123, 99919991])('%s should be invalid', (n) => {
      expect(id_is_valid(n.toString())).toBe(false)
    })
    
    it.each([21, 123, 12121, 999999999991, 9999999999991])('%s should be valid', (n) => {
      expect(id_is_valid(n.toString())).toBe(true)
    })
  })

  describe('create_windows', () => {
    it.each([
      [['1','2','3','4'], 1, [['1'],['2'],['3'],['4']]],
      [['1','2','3','4'], 2, [['1','2'], ['3','4']]],
      [['1','2','3','4'], 4, [['1','2','3','4']]],
    ])('Arr %s split into size %s frames should look like %s', (base_arr, size, result) => {
      expect(create_windows(base_arr, size)).toStrictEqual(result);
    })
  })

  describe('id_is_valid_repeated', () => {
    it.each([
      ['111111', false],
      ['111112', true],
      ['232323', false],
      ['234234', false],
    ])('ID %s should return %s', (id, expected) => {
      expect(id_is_valid_repeated(id)).toBe(expected)
    })
  })
})