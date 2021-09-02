// TODO consider refactoring PIECES into a collection of Model instances
export const PIECES = [
  {
    code: 'I',
    onColor: '#0FF',
    offColor: '#088',
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
  {
    code: 'J',
    onColor: '#F80',
    offColor: '#840',
    matrix: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
  {
    code: 'L',
    onColor: '#0F0',
    offColor: '#080',
    matrix: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
  {
    code: 'O',
    onColor: '#FF0',
    offColor: '#880',
    matrix: [
      [1, 1],
      [1, 1],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
  {
    code: 'S',
    onColor: '#F00',
    offColor: '#800',
    matrix: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
  {
    code: 'T',
    onColor: '#F0F',
    offColor: '#808',
    matrix: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
  {
    code: 'Z',
    onColor: '#0F)',
    offColor: '#080',
    matrix: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    getWidth() {
      return this.matrix[0].length;
    },
  },
];
