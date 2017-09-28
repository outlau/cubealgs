var plls = {
    uperm:{
        name: "U Perm",
        ua: {
            name: "Ua",
            algorithm: "R2 U [R U R' U'] \n [R' U'] [R' U R']",
            connections:   [[4,6],
                            [8,4],
                            [6,8]]
        },
        ub: {
            name: "Ub",
            algorithm: "[R U'] [R U] [R U] \n [R U'] R' U R2",
            
            connections:   [[6,4],
                            [4,8],
                            [8,6]]
        }
    },
    aperm:{
        name: "A Perm",
        aa: {
            name: "Aa",
            algorithm: "x [R' U R'] D2 \n [R U' R'] D2 R2",
            connections:   [[1,3],
                            [3,7],
                            [7,1]]
        },
        ab: {
            name: "Ab",
            algorithm: "TO DO",
            connections:   [[1,3],
                            [7,1],
                            [2,4],
                            [6,2],
                            [3,7]]
        }
    },
    hperm:{
        name: "H Perm",
        h: {
            name: "H Perm",
            algorithm: "M'2 U' M'2 U'2 M'2 U' M'2",
            connections:   [[2,8],
                            [4,6],
                            [8,2],
                            [6,4]]
        }
    },
    zperm:{
        name: "Z Perm",
        z: {
            name: "Z Perm",
            algorithm: "M' U' M'2 U' M'2 U' M' U'2 M'2 U",
            connections:   [[4,2],
                            [8,6],
                            [2,4],
                            [6,8]]
        }
    },
    tperm:{
        name: "T Perm",
        t: {
            name: "T Perm",
            algorithm: "[R U R' U'] [R' F] \n [R2 U' R'] U' [R U R' F']",
            connections:   [[9,3],
                            [3,9],
                            [4,6],
                            [6,4]]
        }
    },
    yperm:{
        name: "Y Perm",
        y: {
            name: "Y Perm",
            algorithm: "F R U' R' U' [R U R' F'] \n [R U R' U'] [R' F R F']",
            connections:   [[1,9],
                            [9,1],
                            [2,4],
                            [4,2]]
                            
        }
    },
    
    jperm:{
        name: "J Perm",
        ja: {
            name: "Ja",
            algorithm: "[L' U' L F] [L' U' L U] \n [L F'] [L2 U L] U",
            connections:   [[1,7],
                            [7,1],
                            [4,8],
                            [8,4]]
        },
        jb: {
            name: "Jb",
            algorithm: "[R' U R' F'] [R U R' U'] \n [R' F] [R2 U' R'] U'",
            connections:   [[3,9],
                            [9,3],
                            [4,6],
                            [6,4]]
        }
    },
    rperm:{
        name: "R Perm",
        ra: {
            name: "Ra",
            algorithm: "[R U' R' U'] \n [R U R D R' U'] \n [R D' R'] [U2 R'] U'",
            connections:   [[3,9],
                            [9,3],
                            [4,2],
                            [2,4]]
                            
        },
        rb: {
            name: "Rb",
            algorithm: "[R' U2 R U2] [R' F] \n [R U R' U'] [R' F'] R2 U'",
            connections:   [[1,3],
                            [3,1],
                            [8,6],
                            [6,8]]
        }
    },
    vperm:{
        name: "V Perm",
        v: {
            name: "V Perm",
            algorithm: "[R' U' R d'] [R' F'] \n [R2 U' R' U] [R' F R F]",
            connections:   [[2,6],
                            [6,2],
                            [1,7],
                            [7,1]]
                            
        }
    },
    eperm:{
        name: "E Perm",
        e: {
            name: "E Perm",
            algorithm: "x' [R U' R'] D \n [R U R'] D' [R U R'] \n D [R U' R'] D'",
            connections:   [[1,7],
                            [7,1],
                            [3,9],
                            [9,3]]
                            
        }
    },
    fperm:{
        name: "F Perm",
        f: {
            name: "F Perm",
            algorithm: "R' U' F' [R U R' U'] \n [R' F] [R2 U' R' U'] \n [R U R'] U R",
            connections:   [[2,8],
                            [8,2],
                            [3,9],
                            [9,3]]
                            
        }
    },
    nperm:{
        name: "N Perm",
        na: {
            name: "Na",
            algorithm: "z [U R' D] R2 U' \n [R {U D'}] R' D \n R2 U' [R D'] R'",
            connections:   [[1,9],
                            [9,1],
                            [2,8],
                            [8,2]]
                            
        },
        nb: {
            name: "Nb",
            algorithm: "R' U R' F R F' \n R U' R' F' U \n F R U R' U' R",
            connections:   [[3,7],
                            [7,3],
                            [2,8],
                            [8,2]]
        }
    },
    gperm:{
        name: "G Perm",
        ga: {
            name: "Ga",
            algorithm: "R2 U R' U R' U' R U' \n R2 {D U'} R' U [R D']",
            connections:   [[1,3],
                            [7,1],
                            [2,4],
                            [6,2],
                            [3,7],
                            [4,6]]
                            
        },
        gb: {
            name: "Gb",
            algorithm: "[R' U' R] {U D'} R2 U \n R' U R U' R U' R2 D",
            connections:   [[1,7],
                            [4,2],
                            [8,4],
                            [9,1],
                            [7,9],
                            [2,8]]
                            
        },
        gc: {
            name: "Gc",
            algorithm: "R2 U' R U' R U R' \n U R2 {D' U} R U' R' D",
            connections:   [[1,7],
                            [8,4],
                            [9,1],
                            [4,6],
                            [7,9],
                            [6,8]]
                            
        },
        gd: {
            name: "Gd",
            algorithm: "[R U R'] {U' D} R2 U' \n R  U' R' U R' U R2 D'",
            connections:   [[7,1],
                            [1,3],
                            [8,2],
                            [2,4],
                            [4,8],
                            [3,7]]
                            
        }
    }
    
    
    
    
};
