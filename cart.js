// Cross Spurs Co. — cart kept in this browser only (localStorage). Holds shirts only, never personal info.
window.Cart = (function(){
  const KEY = "csc_cart_v1";
  let mem = [];
  const read = () => { try { const v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return mem; } };
  const write = (v) => { mem = v; try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} badge(); };
  const clamp = q => Math.max(1, Math.min(10, q));
  function badge(){
    const n = read().reduce((s, l) => s + l.qty, 0);
    document.querySelectorAll(".cart-count").forEach(el => { el.textContent = n; el.hidden = n === 0; });
  }
  return {
    get: read,
    count: () => read().reduce((s, l) => s + l.qty, 0),
    add(item, size, qty){
      const v = read(); const f = v.find(l => l.item === item && l.size === size);
      if (f) f.qty = clamp(f.qty + qty); else v.push({ item, size, qty: clamp(qty) });
      write(v);
    },
    setQty(i, q){ const v = read(); if (!v[i]) return; if (q < 1) v.splice(i, 1); else v[i].qty = clamp(q); write(v); },
    remove(i){ const v = read(); v.splice(i, 1); write(v); },
    clear(){ write([]); },
    badge
  };
})();
document.addEventListener("DOMContentLoaded", () => window.Cart.badge());
