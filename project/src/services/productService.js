let nextId = 103;
let products = [
  { id: 101, name: "Wireless Mouse", price: 599, qty: 25 },
  { id: 102, name: "Mechanical Keyboard", price: 2999, qty: 10 }
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function clone() {
  return products.map(p => ({ ...p }));
}

export default {
  async getAll() {
    await delay(500);
    return clone();
  },
  getAllSync() {
    return clone();
  },
  create(prod) {
    const newP = { ...prod, id: nextId++ };
    products.push(newP);
    return newP;
  },
  update(updated) {
    products = products.map((p) => (p.id === updated.id ? updated : p));
    return updated;
  },
  remove(id) {
    products = products.filter((p) => p.id !== id);
  }
};
