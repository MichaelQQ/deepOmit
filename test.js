const test = require("ava");
const deepOmit = require("./");

test("array", (t) => {
  const srcArray = [1, 2, 3, 4, 5, 6]
  const expect = [1, 2, 3, 4, 5, 6]

  t.deepEqual(deepOmit(["tbo1", "tbo2"], srcArray), expect);
});

test("object", (t) => {
  const srcObject = {
    tbo1: 1,
    a: 2,
    b: {
      tbo1: 1,
      a: 2,
      b: {
        tbo1: 1,
        a: 2,
        b: {
          tbo1: 1,
          a: 2,
          b: 3,
          c: 4,
          tbo2: 5,
        },
        c: 4,
        tbo2: 5,
      },
      c: 4,
      tbo2: 5,
    },
    c: 4,
    tbo2: 5,
  };
  const expect = {
    a: 2,
    b: {
      a: 2,
      b: {
        a: 2,
        b: {
          a: 2,
          b: 3,
          c: 4,
        },
        c: 4,
      },
      c: 4,
    },
    c: 4,
  };

  t.deepEqual(deepOmit(["tbo1", "tbo2"], srcObject), expect);
});

test("object array", (t) => {
  const objectArray = [
    {
      tbo1: 1,
      a: 2,
      b: 3,
      c: 4,
      tbo2: 5,
    },
    {
      tbo1: 1,
      a: 2,
      b: {
        tbo1: 1,
        a: 2,
        b: {
          tbo1: 1,
          a: 2,
          b: {
            tbo1: 1,
            a: 2,
            b: 3,
            c: 4,
            tbo2: 5,
          },
          c: 4,
          tbo2: 5,
        },
        c: 4,
        tbo2: 5,
      },
      c: 4,
      tbo2: 5,
    },
    {
      tbo1: 1,
      a: 2,
      b: 3,
      c: 4,
      tbo2: 5,
    },
  ];
  const expect = [
    {
      a: 2,
      b: 3,
      c: 4,
    },
    {
      a: 2,
      b: {
        a: 2,
        b: {
          a: 2,
          b: {
            a: 2,
            b: 3,
            c: 4,
          },
          c: 4,
        },
        c: 4,
      },
      c: 4,
    },
    {
      a: 2,
      b: 3,
      c: 4,
    },
  ];

  t.deepEqual(deepOmit(["tbo1", "tbo2"], objectArray), expect);
});
