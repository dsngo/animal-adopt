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

    id = setTimeout(() => {
      id = fn.apply(this, args);
      id = null;
    }, time);
  };
}
