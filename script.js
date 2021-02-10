function _load() {
  const object1 = {
    a: "somestring",
    b: 42,
    c: false,
    d: [1, "array is", true],
    e: { key1: "value1", key2: "value2" },
  };

  /*   let values = Object.values(object1);
  for (i = 0; i < values.length; i++) {
    console.log(values[i]);
  } */

  /*   for (const [key, value] of Object.entries(object1)) {
    if (typeof value === "object")
      console.log(`This is an object: ${key}: ${value}`);
  } */

  for (const [key, value] of Object.entries(object1)) {
    switch (typeof value) {
      case "number":
        console.log(`This is a number: ${key}: ${value}`);
        break;
      case "boolean":
        console.log(`This is a boolean: ${key}: ${value}`);
        break;
      case "object":
        console.log(`This is an object: ${key}: ${value}`);
        break;
      default:
        console.log(`This is a string: ${key}: ${value}`);
    }
  }
}
window.addEventListener("load", _load);
