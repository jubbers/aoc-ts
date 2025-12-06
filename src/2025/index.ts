import { find_dial_password_continuous, find_dial_password_simple } from "./day_01";
import { find_invalid_ids, find_repeated_invalid_ids } from "./day_02";

export default (day: number, input: string[]) => {
  switch (day) {
    case 1: {
      // find_dial_password_simple(input);
      find_dial_password_continuous(input);
      break;
    }

    case 2: {
      // find_invalid_ids(input);
      find_repeated_invalid_ids(input);
      break;
    }

    default:
      throw new Error(`Day ${day} not set up for 2025`);
  }
}