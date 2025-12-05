import { find_dial_password_continuous, find_dial_password_simple } from "./day_01";

export default (day: number, input: string[]) => {
  switch (day) {
    case 1: {
      // find_dial_password_simple(input);
      find_dial_password_continuous(input);
      break;
    }

    default:
      throw new Error(`Day ${day} not set up for 2025`);
  }
}