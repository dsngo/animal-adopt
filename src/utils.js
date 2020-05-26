function utils(fn, time, type = "throttle", ...args) {
  let id;
  const mode = type.toLowerCase();

  return () => {
    if (id) {
      if (mode === "throttle") {
        return;
      }

      clearTimeout(id);
    }

    if (mode === "throttle") {
      fn.apply(this, args);
    }

    id = setTimeout(() => {
      if (mode === "debounce") {
        id = fn.apply(this, args);
      }

      id = null;
    }, time);
  };
}
