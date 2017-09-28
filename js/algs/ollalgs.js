var olls = {
    alledges:{
        name: "All Edges Oriented",
        first: {
            name: "27 (Sune)",
            algorithm: "R U R' U R U2 R'",
            squares:   [[0,1,0,0,0],
                        [0,0,1,0,1],
                        [0,1,1,1,0],
                        [0,1,1,0,0],
                        [0,0,0,1,0]]
        },
        second: {
            name: "26 (Antisune)",
            algorithm: "R U2 R' U' R U' R'",
            squares:   [[0,0,0,0,0],
                        [1,0,1,1,0],
                        [0,1,1,1,0],
                        [0,0,1,0,1],
                        [0,1,0,0,0]]
        },
        third: {
            name: "21",
            algorithm: "R U2 R' U' R U R' U' R U' R'",
            squares:   [[0,1,0,1,0],
                        [0,0,1,0,0],
                        [0,1,1,1,0],
                        [0,0,1,0,0],
                        [0,1,0,1,0]]
        },
        fourth: {
            name: "22",
            algorithm: "R U2 [R2 U'] [R2 U'] R2 U2 R",
            squares:   [[0,0,0,1,0],
                        [1,0,1,0,0],
                        [0,1,1,1,0],
                        [1,0,1,0,0],
                        [0,0,0,1,0]]
        },
        fifth: {
            name: "23 (Superman)",
            algorithm: "R2 D [R' U2 R] D' [R U2 R']",
            squares:   [[0,0,0,0,0],
                        [0,1,1,1,0],
                        [0,1,1,1,0],
                        [0,0,1,0,0],
                        [0,1,0,1,0]]
        },
        sixth: {
            name: "24",
            algorithm: "x R' U' L U R U' L' U",
            squares:   [[0,0,0,1,0],
                        [0,1,1,0,0],
                        [0,1,1,1,0],
                        [0,1,1,0,0],
                        [0,0,0,1,0]]
        },
        seventh: {
            name: "25",
            algorithm: "x R' U' L' U R U' L U",
            squares:   [[0,0,0,1,0],
                        [0,1,1,0,0],
                        [0,1,1,1,0],
                        [1,0,1,1,0],
                        [0,0,0,0,0]]
        },
        
    },
    noedges:{
        name: "No Edges Oriented",
        first: {
            name: "1",
            algorithm: "R U2 [R2 F R F'] \n U2 [R' F R F']",
            squares:   [[0,0,1,0,0],
                        [1,0,0,0,1],
                        [1,0,1,0,1],
                        [1,0,0,0,1],
                        [0,0,1,0,0]]
        },
        second: {
            name: "2",
            algorithm: "[F R U R' U' F'] \n [f R U R' U' f']",
            squares:   [[0,0,1,1,0],
                        [1,0,0,0,0],
                        [1,0,1,0,1],
                        [1,0,0,0,0],
                        [0,0,1,1,0]]
        },
        third: {
            name: "3",
            algorithm: "[f R U R' U' f'] U' \n [F R U R' U' F']",
            squares:   [[0,1,1,0,0],
                        [0,0,0,0,1],
                        [1,0,1,0,1],
                        [1,0,0,1,0],
                        [0,0,1,0,0]]
        },
        fourth: {
            name: "4",
            algorithm: "[f R U R' U' f'] U \n [F R U R' U' F']",
            squares:   [[0,0,1,0,0],
                        [1,0,0,1,0],
                        [1,0,1,0,1],
                        [0,0,0,0,1],
                        [0,1,1,0,0]]
        },
        fifth: {
            name: "17",
            algorithm: "[R U R' U] [R' F R F'] \n U2 [R' F R F']",
            squares:   [[0,0,1,1,0],
                        [0,1,0,0,1],
                        [1,0,1,0,1],
                        [1,0,0,1,0],
                        [0,0,1,0,0]]
        },
        sixth: {
            name: "20",
            algorithm: "[r' R U R U R' U'] \n M'2 [U R U' r']",
            squares:   [[0,0,1,0,0],
                        [0,1,0,1,0],
                        [1,0,1,0,1],
                        [0,1,0,1,0],
                        [0,0,1,0,0]]
        },
        seventh: {
            name: "18",
            algorithm: "[F R U R' U] y' \n R' U2 [R' F R F']",
            squares:   [[0,1,1,1,0],
                        [0,0,0,0,0],
                        [1,0,1,0,1],
                        [0,1,0,1,0],
                        [0,0,1,0,0]]
        },
        eighth: {
            name: "19",
            algorithm: "[r' R] U R U R' U'] \n r [R2 F R F']",
            squares:   [[0,0,1,0,0],
                        [0,1,0,1,0],
                        [1,0,1,0,1],
                        [1,0,0,0,1],
                        [0,0,1,0,0]]
        }
    },
    cshapes:{
        name: "C Shapes",
        first: {
            name: "46",
            algorithm: "R' U' [R' F R F'] U R",
            squares:   [[0,0,0,0,0],
                        [0,1,1,0,1],
                        [1,0,1,0,1],
                        [0,1,1,0,1],
                        [0,0,0,0,0]]
        },
        second: {
            name: "34",
            algorithm: "R U R2 U' [R' F] \n R U R U' F'",
            squares:   [[0,0,1,0,0],
                        [1,0,0,0,1],
                        [0,1,1,1,0],
                        [0,1,0,1,0],
                        [0,0,1,0,0]]
        }
    },
    Ishapes:{
        name: "Line Shapes",
        first: {
            name: "55",
            algorithm: "R U2 R2 U' R \n U' R' U2 F R F'",
            squares:   [[0,0,0,0,0],
                        [1,0,1,0,1],
                        [1,0,1,0,1],
                        [1,0,1,0,1],
                        [0,0,0,0,0]]
        },
        second: {
            name: "52",
            algorithm: "R U R' U R d' \n R U' R' F'",
            squares:   [[0,1,0,0,0],
                        [0,0,1,0,1],
                        [1,0,1,0,1],
                        [0,0,1,0,1],
                        [0,1,0,0,0]]
        },
        third: {
            name: "51",
            algorithm: "f [R U R' U'] \n [R U R' U'] f'",
            squares:   [[0,0,1,1,0],
                        [1,0,0,0,0],
                        [0,1,1,1,0],
                        [1,0,0,0,0],
                        [0,0,1,1,0]]
        },
        fourth: {
            name: "56",
            algorithm: "[F R U R' U' R] F' \n [r U R' U'] r'",
            squares:   [[0,0,1,0,0],
                        [1,0,0,0,1],
                        [0,1,1,1,0],
                        [1,0,0,0,1],
                        [0,0,1,0,0]]
        }
    },
    smallLshapes:{
        name: "Small L Shapes",
        first: {
            name: "48",
            algorithm: "F [R U R' U'] \n [R U R' U'] F'",
            squares:   [[0,0,0,1,0],
                        [1,0,1,0,0],
                        [0,1,1,0,1],
                        [1,0,0,0,0],
                        [0,0,1,1,0]]
        },
        second: {
            name: "47",
            algorithm: "R' U' [R' F R F'] \n [R' F R F'] U R",
            squares:   [[0,1,0,0,0],
                        [0,0,1,0,1],
                        [1,0,1,1,0],
                        [0,0,0,0,1],
                        [0,1,1,0,0]]
        },
        third: {
            name: "54",
            algorithm: "[r U R' U] [R U' R' U] \n [R U2 r']",
            squares:   [[0,0,0,0,0],
                        [1,0,1,0,1],
                        [1,0,1,1,0],
                        [1,0,0,0,1],
                        [0,0,1,0,0]]
        },
        fourth: {
            name: "53",
            algorithm: "[i' U' L U'] [L' U L U'] \n [L' U2 i]",
            squares:   [[0,0,0,0,0],
                        [1,0,1,0,1],
                        [0,1,1,0,1],
                        [1,0,0,0,1],
                        [0,0,1,0,0]]
        },
        fifth: {
            name: "49",
            algorithm: "r U' r'2 U r2 U r'2 U' r ",
            squares:   [[0,0,0,1,0],
                        [1,0,1,0,0],
                        [1,0,1,1,0],
                        [1,0,0,0,0],
                        [0,0,1,1,0]]
        },
        sixth: {
            name: "50",
            algorithm: "R' F R2 B' R2 F' R2 B R'",
            squares:   [[0,1,0,0,0],
                        [0,0,1,0,1],
                        [0,1,1,0,1],
                        [0,0,0,0,1],
                        [0,1,1,0,0]]
        },
    },
    bigLshapes:{
        name: "Big L Shapes",
        first: {
            name: "13",
            algorithm: "r U' r' U' r U r' \n y' [R' U R]",
            squares:   [[0,1,1,0,0],
                        [0,0,0,0,1],
                        [0,1,1,1,0],
                        [0,1,0,0,0],
                        [0,0,1,1,0]]
        },
        second: {
            name: "14",
            algorithm: "R' F R U R' F' R \n y' [R U' R']",
            squares:   [[0,0,1,1,0],
                        [1,0,0,0,0],
                        [0,1,1,1,0],
                        [0,0,0,1,0],
                        [0,1,1,0,0]]
        },
        third: {
            name: "16",
            algorithm: "[r U r'] [R U R' U'] \n [r U' r']",
            squares:   [[0,0,1,0,0],
                        [1,0,0,1,0],
                        [0,1,1,1,0],
                        [0,0,0,0,1],
                        [0,1,1,0,0]]
        },
        fourth: {
            name: "15",
            algorithm: "[l' U' l] [L' U' L U] [l' U l] TODO BETTER ALG",
            squares:   [[0,0,1,0,0],
                        [0,1,0,0,1],
                        [0,1,1,1,0],
                        [1,0,0,0,0],
                        [0,0,1,1,0]]
        }
    },
    pshapes:{
        name: "P Shapes",
        first: {
            name: "44",
            algorithm: "f [R U R' U'] f'",
            squares:   [[0,0,1,0,0],
                        [1,0,0,1,0],
                        [1,0,1,1,0],
                        [1,0,1,1,0],
                        [0,0,0,0,0]]
        },
        second: {
            name: "43",
            algorithm: "f' [L' U' L U] f",
            squares:   [[0,0,1,0,0],
                        [0,1,0,0,1],
                        [0,1,1,0,1],
                        [0,1,1,0,1],
                        [0,0,0,0,0]]
        },
        third: {
            name: "32",
            algorithm: "R U B' U' R' U R B R'",
            squares:   [[0,1,1,0,0],
                        [0,0,0,1,0],
                        [1,0,1,1,0],
                        [0,0,1,1,0],
                        [0,1,0,0,0]]
        },
        fourth: {
            name: "31",
            algorithm: "[R' U'] F [U R U' R'] F' R",
            squares:   [[0,1,1,0,0],
                        [0,0,0,1,0],
                        [1,0,1,1,0],
                        [0,0,1,1,0],
                        [0,1,1,0,0]]
        },
    },
    tshapes:{
        name: "T Shapes",
        first: {
            name: "45",
            algorithm: "F [R U R' U'] F'",
            squares:   [[0,0,1,0,0],
                        [1,0,0,1,0],
                        [0,1,1,1,0],
                        [1,0,0,1,0],
                        [0,0,1,0,0]]
        },
        second: {
            name: "33",
            algorithm: "[R U R' U'] [R' F R F']",
            squares:   [[0,1,1,0,0],
                        [0,0,0,1,0],
                        [0,1,1,1,0],
                        [0,0,0,1,0],
                        [0,1,1,0,0]]
        }
    },
    wshapes:{
        name: "W Shapes",
        first: {
            name: "38",
            algorithm: "[R U R' U] [R U' R' U'] \n [R' F R F']",
            squares:   [[0,1,0,0,0],
                        [0,0,1,1,0],
                        [0,1,1,0,1],
                        [0,1,0,0,1],
                        [0,0,1,0,0]]
        },
        second: {
            name: "36",
            algorithm: "[R' U' R U'] R' U R U R \n y [R' F' R]",
            squares:   [[0,0,1,0,0],
                        [0,1,0,0,1],
                        [0,1,1,0,1],
                        [0,0,1,1,0],
                        [0,1,0,0,0]]
        }
    },
    weirdshapes:{
        name: "Weird Shapes",
        first: {
            name: "30",
            algorithm: "R2 U R' B' R \n U' R2 U R B R'",
            squares:   [[0,0,1,0,0],
                        [0,1,0,1,0],
                        [1,0,1,1,0],
                        [1,0,1,0,1],
                        [0,0,0,0,0]]
        },
        second: {
            name: "29",
            algorithm: "r' R U [R U R' U'] \n [R' F R F'] M'",
            squares:   [[0,0,1,0,0],
                        [0,1,0,1,0],
                        [0,1,1,0,1],
                        [1,0,1,0,1],
                        [0,0,0,0,0]]
        },
        third: {
            name: "41",
            algorithm: "[R U' R' U2] R U y \n R U' R' U' F'",
            squares:   [[0,0,1,0,0],
                        [0,1,0,1,0],
                        [1,0,1,1,0],
                        [0,0,1,0,0],
                        [0,1,0,1,0]]
        },
        fourth: {
            name: "42",
            algorithm: "R' U2 [R U R' U] R y \n [F R U R' U' F']",
            squares:   [[0,0,0,0,0],
                        [1,0,1,1,0],
                        [0,1,1,0,1],
                        [1,0,0,1,0],
                        [0,0,1,0,0]]
        },
        
    },
    fishshapes:{
        name: "Fish Shapes",
        first: {
            name: "37",
            algorithm: "F R U' R' U' R U R' F'",
            squares:   [[0,0,0,0,0],
                        [0,1,1,0,1],
                        [0,1,1,0,1],
                        [0,0,0,1,0],
                        [0,1,1,0,0]]
        },
        second: {
            name: "35",
            algorithm: "R U2 [R2 F R F'] \n [R U2 R']",
            squares:   [[0,0,1,0,0],
                        [0,1,0,0,1],
                        [1,0,1,1,0],
                        [0,0,1,1,0],
                        [0,1,0,0,0]]
        },
        third: {
            name: "10",
            algorithm: "[R U R' U] [R' F R F'] \n [R U2 R']",
            squares:   [[0,1,1,0,0],
                        [0,0,0,1,0],
                        [0,1,1,0,1],
                        [1,0,1,0,0],
                        [0,0,0,1,0]]
        },
        fourth: {
            name: "9",
            algorithm: "[R U R' U' R' F] \n R2 U R' U' F'",
            squares:   [[0,0,0,1,0],
                        [1,0,1,0,0],
                        [0,1,1,0,1],
                        [0,0,0,1,0],
                        [0,1,1,0,0]]
        },
        
    },
    biglightningbolt:{
        name: "Big Lightning Bolt Shapes",
        first: {
            name: "40",
            algorithm: "[R' F R U R' U' F'] U R",
            squares:   [[0,0,1,1,0],
                        [0,1,0,0,0],
                        [0,1,1,1,0],
                        [1,0,0,1,0],
                        [0,0,1,0,0]]
        },
        second: {
            name: "39",
            algorithm: "[L F' L' U' L U F] U' L' TODO BETTER ALG",
            squares:   [[0,1,1,0,0],
                        [0,0,0,1,0],
                        [0,1,1,1,0],
                        [0,1,0,0,1],
                        [0,0,1,0,0]]
        }
    },
    smalllightningbolt:{
        name: "Small Lightning Bolt Shapes",
        first: {
            name: "8",
            algorithm: "R U2 R' U'2 \n [R' F R F']",
            squares:   [[0,0,0,1,0],
                        [1,0,1,0,0],
                        [1,0,1,1,0],
                        [0,0,0,1,0],
                        [0,1,1,0,0]]
        },
        second: {
            name: "7",
            algorithm: "[r U R' U] [R U2 r']",
            squares:   [[0,1,0,0,0],
                        [0,0,1,0,1],
                        [0,1,1,0,1],
                        [0,1,0,0,0],
                        [0,0,1,1,0]]
        },
        third: {
            name: "12",
            algorithm: "[F R U R' U' F'] U \n [F R U R' U' F']",
            squares:   [[0,0,1,0,0],
                        [1,0,0,1,0],
                        [1,0,1,1,0],
                        [0,0,1,0,1],
                        [0,1,0,0,0]]
        },
        fourth: {
            name: "11",
            algorithm: "[r U R' U] [R' F R F'] \n [R U2 r']",
            squares:   [[0,1,0,0,0],
                        [0,0,1,1,0],
                        [0,1,1,0,1],
                        [1,0,0,0,0],
                        [0,0,1,1,0]]
        }
    },
    squareshapes:{
        name: "Square Shapes",
        first: {
            name: "6",
            algorithm: "r U2' R' U' R U' r'",
            squares:   [[0,0,0,0,0],
                        [1,0,1,1,0],
                        [1,0,1,1,0],
                        [0,0,0,0,1],
                        [0,1,1,0,0]]
        },
        second: {
            name: "5",
            algorithm: "r' U2 R U R' U r ",
            squares:   [[0,1,1,0,0],
                        [0,0,0,0,1],
                        [1,0,1,1,0],
                        [1,0,1,1,0],
                        [0,0,0,0,0]]
        }
    },
    arrowhshapes:{
        name: "Arrow And H Shapes",
        first: {
            name: "28 (Arrow)",
            algorithm: "[r U R' U'] r' \n [R U R U' R']",
            squares:   [[0,0,0,0,0],
                        [0,1,1,1,0],
                        [0,1,1,0,1],
                        [0,1,0,1,0],
                        [0,0,1,0,0]]
        },
        second: {
            name: "57 (H Shape)",
            algorithm: "[R U R' U'] M' [U R U' r']",
            squares:   [[0,0,1,0,0],
                        [0,1,0,1,0],
                        [0,1,1,1,0],
                        [0,1,0,1,0],
                        [0,0,1,0,0]]
        }
    }
};