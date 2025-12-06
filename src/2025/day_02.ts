export const find_invalid_ids = (ids: string[]) => {
  const id_is_valid = (id: string): boolean => {
    const as_arr = id.split('');
    const half_length = as_arr.length / 2;
    return as_arr.slice(0, half_length).join('') !== as_arr.slice(half_length).join('');;
  } 

  let sum = 0;
  const id_ranges: number[][] = ids[0].split(',').map((s) => s.split('-').map(s => parseInt(s)))
  for (const [min, max] of id_ranges) {
    for (let i=min; i<=max; i++) {
      if (!id_is_valid(i.toString())) {
        sum += i;
        console.log(`Invalid ID Found: ${i.toString().padStart(10)}   New Sum: ${sum.toString().padStart(11)}`)
      }
    }
  }

  console.log(sum);
}

export const find_repeated_invalid_ids = (ids: string[]) => {
  let sum = 0;
  const id_ranges: string[][] = ids[0].split(',').map((s) => s.split('-'))
  for (const [min, max] of id_ranges) {
    for (let i=parseInt(min); i<=parseInt(max); i++) {
      // console.log(`Checking ${i.toString()} for repetitions`);
      if (!id_is_valid_repeated(i.toString())) {
        sum += i;
        console.log(`Invalid ID Found: ${i.toString().padStart(10)}   New Sum: ${sum.toString().padStart(11)}`)
      }
    }
  }

  console.log(sum);
}

export const id_is_valid_repeated = (id: string): boolean => {
  const as_arr = id.split('');
  const half_length = as_arr.length / 2;
  for (let window_size=1; window_size<=half_length; window_size++) {
    // Check for if this is number can be evenly repeated n times
    if (as_arr.length % window_size !== 0) continue;

    const reference = as_arr.slice(0, window_size).join('');
    if (create_windows([...as_arr], window_size).every(window => window.join('') === reference)) {
      return false;
    }
  }

  return true;
}

// Helper function to create "windows" of a given size for comparison
export const create_windows = (unsplit: string[], size: number): string[][] => {
  const out = []
  while (unsplit.length > 0) {
    let current = [];
    for (let i=0; i<size; i++) current.push(unsplit.pop());
    out.push(current.toReversed());
  }
  return out.toReversed();
}