export const find_dial_password_simple = (input: string[]) => {
  let dial_pos = 50;
  let password = 0;

  const clamp_dial = (n: number): number => n >= 0 ? n % 100 : 100 - Math.abs(n);

  for (const line of input) {
    const amount = parseInt(line.slice(1)) % 100;
    switch (line.split('')[0]) {
      case 'L': dial_pos = clamp_dial(dial_pos - amount); break;
      case 'R': dial_pos = clamp_dial(dial_pos + amount); break;
    }
    if (dial_pos === 0) password += 1;
  }

  console.log('Password: ', password);
}

// Adjust the dial position for over- and under-flows
type DialInfo = [new_pos: number, clicks_counted: number]
export const find_dial_password_continuous = (input: string[]) => {
  let dial_pos = 50;
  let password = 0;


  for (const line of input) {
    const amount = parseInt(line.slice(1));
    if (amount === 0) continue;
    const [new_pos, clicks_counted] = clamp_pos_and_count_clicks(line.split('')[0] === 'L' ?  dial_pos - amount : dial_pos + amount);

    password += clicks_counted;
    dial_pos = new_pos;
    console.log('Parsing line:', line.padEnd(4), '  Dial:', dial_pos.toString().padStart(2, '0'), '  Password:', password)
  }

  console.log('Password: ', password);
}

export const clamp_pos_and_count_clicks = (dial_pos: number): DialInfo => {
  if (dial_pos >= 0 && dial_pos < 100) return [dial_pos, 0];
  if (dial_pos >= 100) return [dial_pos % 100, Math.floor(dial_pos / 100)]
  if (Math.abs(dial_pos) <= 100) return [100 - Math.abs(dial_pos), 1]
  return [100 - (Math.abs(dial_pos) % 100), 1 + Math.floor(Math.abs(dial_pos) / 100)]
}

  