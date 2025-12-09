// Very small in-memory service to simulate data + id generation
let nextId = 201;
let products = [
  { id: 101, name: "Mouse", price: 499, qty: 10 },
  { id: 102, name: "Keyboard", price: 1499, qty: 5 },
  { id: 103, name: "Chargers", price: 2500, qty: 15 }
];

function clone() {
  return products.map((p) => ({ ...p }));
}

export default {
  getAllSync() {
    return clone();
  },
  create(prod) {
    const newP = { ...prod, id: nextId++ };
    products.push(newP);
    return newP;
  },
  remove(id) {
    products = products.filter((p) => p.id !== id);
  }
};
