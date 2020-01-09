const CellTypes = {
  DEFAULT: "DEFAULT",
  GENERATED: "GENERATED",
  BLANK: "BLANK"
};

const Boards = [
  [
    [
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" }
    ]
  ],
  [
    [
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
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
      { value: 1, cellType: "DEFAULT" }
    ]
  ],
  [
    [
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" }
    ],
    [
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" }
    ],
    [
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ]
  ],
  [
    [
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" }
    ],
    [
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" }
    ],
    [
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 1, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" }
    ],
    [
      { value: 9, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ]
  ],
  [
    [
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 8, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" }
    ],
    [
      { value: 6, cellType: "DEFAULT" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 9, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 6, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ]
  ],
  [
    [
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 7, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 5, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 8, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" }
    ],
    [
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 6, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 9, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 3, cellType: "DEFAULT" },
      { value: 5, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 5, cellType: "DEFAULT" },
      { value: 8, cellType: "DEFAULT" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 4, cellType: "DEFAULT" },
      { value: 3, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" }
    ],
    [
      { value: 4, cellType: "DEFAULT" },
      { value: 7, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 1, cellType: "DEFAULT" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 0, cellType: "BLANK" },
      { value: 2, cellType: "DEFAULT" },
      { value: 9, cellType: "DEFAULT" }
    ]
  ]
];

module.exports = {
  CellTypes,
  Boards
};
