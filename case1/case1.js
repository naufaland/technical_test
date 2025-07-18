const fruit = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)
function getFruitNames() {
  const seen = new Set();
  return fruit
    .filter((fruit) => {
      const name = fruit.fruitName.toLowerCase();
      if (seen.has(name)) return false;
      seen.add(name);
      return true;
    })
    .map((fruit) => fruit.fruitName);
}

console.log("1. Buah yang dimiliki:  ", getFruitNames());

// 2. Jumlah wadah berdasarkan tipe buah dan isinya?
function getFruitsByType(data) {
  const result = {};
  data.forEach((item) => {
    const type = item.fruitType;
    if (!result[item.fruitType]) {
      result[item.fruitType] = [];
    }
    result[item.fruitType].push(item.fruitName);
  });
  return result;
}
console.log("2. Jumlah buah berdasarkan tipe: ", getFruitsByType(fruit));

// 3. Berapa total stock buah yang ada di masing-masing wadah?
function getTotalStockByType(data) {
  const result = {};
  data.forEach((item) => {
    const type = item.fruitType;
    if (!result[type]) {
      result[type] = 0;
    }
    result[type] += item.stock;
  });
  return result;
}
console.log("3. Total buah per wadah: ", getTotalStockByType(fruit));

//4. masalah pada kasus
console.log("4. masalah pada data dari kasus:");
console.log(
  "- fruitId 5 digunakan untuk 3 buah berbeda (Jeruk Bali, KURMA, Salak)"
);
console.log("- 'Apel' dan 'apel' adalah buah yang sama tapi berbeda case");
console.log("- 'Kurma' dan 'KURMA' adalah buah yang sama tapi berbeda case");
console.log(
  "- Sebaiknya gunakan fruitId yang unik dan konsisten dalam penulisan nama buah"
);
