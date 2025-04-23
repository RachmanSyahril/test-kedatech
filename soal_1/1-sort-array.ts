// solve dengan algoritma bubblesort
export const sortDescending = (arr: number[]): number[] => {
  // Buat salinan array untuk menghindari mutasi langsung jika diperlukan
  const result = [...arr];

  // Bubble Sort dari terbesar ke terkecil
  for (let i = 0; i < result.length; i++) {
    for (let ii = 0; ii < result.length - i - 1; ii++) {
      if (result[ii] < result[ii + 1]) {
        // Tukar posisi jika angka sekarang lebih kecil dari angka berikutnya
        const temp = result[ii];
        result[ii] = result[ii + 1];
        result[ii + 1] = temp;
      }
    }
  }

  return result;
}

// Contoh
const input = [1, 2, 4, 3, 5, 3, 2, 1];
const output = sortDescending(input);
console.log(output); // Output: [5, 4, 3, 3, 2, 2, 1, 1]
