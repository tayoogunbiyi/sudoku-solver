const CellTypes = {
  DEFAULT: "DEFAULT",
  GENERATED: "GENERATED",
  BLANK: "BLANK"
};

const Boards = [
  [
    [
      { value: 5, cellType: CellTypes.DEFAULT },
      { value: 3, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 6, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 1, cellType: CellTypes.DEFAULT },
      { value: 9, cellType: CellTypes.DEFAULT },
      { value: 5, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 9, cellType: CellTypes.DEFAULT },
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 6, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 6, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 3, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 4, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 3, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 1, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 2, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 6, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 6, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 2, cellType: CellTypes.DEFAULT },
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 4, cellType: CellTypes.DEFAULT },
      { value: 1, cellType: CellTypes.DEFAULT },
      { value: 9, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 5, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 9, cellType: CellTypes.DEFAULT }
    ]
  ],
  [
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 6, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 4, cellType: CellTypes.DEFAULT },
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 6, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 9, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 5, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 2, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 9, cellType: CellTypes.DEFAULT },
      { value: 3, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 8, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 5, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 4, cellType: CellTypes.DEFAULT },
      { value: 3, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 1, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 7, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 5, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 2, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK }
    ],
    [
      { value: 3, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 2, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 8, cellType: CellTypes.DEFAULT }
    ],
    [
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 2, cellType: CellTypes.DEFAULT },
      { value: 3, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 1, cellType: CellTypes.DEFAULT },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK },
      { value: 0, cellType: CellTypes.BLANK }
    ]
  ],
  [
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ]
  ],
  [
    [
      { value: 4, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ]
  ]
];

module.exports = {
  CellTypes,
  Boards
};
