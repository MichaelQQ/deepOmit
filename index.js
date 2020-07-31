const R = require("ramda");

// deepOmit :: [String] -> Any -> Any
const deepOmit = (target, value) => {
  switch (R.type(value)) {
    case "Array":
      return value.map((elem) => deepOmit(target, elem));
    case "Object":
      return deepObjectOmit(target, value);
    default:
      return value;
  }
};

// deepObjectOmit :: [String] -> {String: *} → {String: *}
const deepObjectOmit = (target, obj) =>
  Object.entries(R.omit(target, obj)).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: deepOmit(target, value) }),
    {}
  );

module.exports = deepOmit;