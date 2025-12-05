import { clamp_pos_and_count_clicks } from "./day_01";

describe('day_01', () => {
  describe('clamp_pos_and_count_clicks', () => {
    it('returns 0 and passed pos for 0 -> 99', () => {
      for(let i=0; i<100; i++) {
        const [new_pos, clicks_counted] = clamp_pos_and_count_clicks(i);
        expect(new_pos).toBe(i);
        expect(clicks_counted).toBe(0);
      }
    })

    it.each([
      [0, 0, 0],
      [100, 0, 1],
      [110, 10, 1],
      [200, 0, 2],
      [999, 99, 9],
      [9999, 99, 99],
    ]) ('%s clamps to %s with %s clicks', (dial_pos, expected_pos, expected_clicks) => {
        const [new_pos, clicks_counted] = clamp_pos_and_count_clicks(dial_pos);
        console.log(new_pos, clicks_counted)
        expect(new_pos).toBe(expected_pos);
        expect(clicks_counted).toBe(expected_clicks);
    })

    it.each([
      [0, 0, 0],
      [-150, 50, 2],
      [-99, 1, 1],
      [-100, 0, 1],
      [-101, 99, 2],
      [-201, 99, 3],
    ]) ('%s clamps to %s with %s negative clicks', (dial_pos, expected_pos, expected_clicks) => {
        const [new_pos, clicks_counted] = clamp_pos_and_count_clicks(dial_pos);
        console.log(new_pos, clicks_counted)
        expect(new_pos).toBe(expected_pos);
        expect(clicks_counted).toBe(expected_clicks);
    })

    it('counts zero-passes correctly for a rotation from start=50 left 150 (usage case)', () => {
      // Simulate how find_dial_password_continuous calls the helper:
      // start = 50, rotation L150 -> target passed into helper = start - 150 = -100
      const start = 50;
      const amount = 150;
      const target = start - amount; // -100

      const [new_pos, clicks_counted] = clamp_pos_and_count_clicks(start, -amount);

      // Expected: new_pos should be 0 and the dial passes 0 twice during the rotation
      expect(new_pos).toBe(0);
      expect(clicks_counted).toBe(2);
    })
  });
});