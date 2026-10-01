function slots(Q, M1, M2, M3) {
    let Rolls = 0;
    while (Q > 0) {
        Q = Q - 1;
        M1 = M1 + 1;
        Rolls = Rolls + 1;
        if (M1 === 35) {
            Q = Q + 30;
            M1 = 0;
        }
        if (Q <= 0) {
            break;
        }
        Q = Q - 1;
        M2 = M2 + 1;
        Rolls = Rolls + 1;
        if (M2 === 100) {
            Q = Q + 60;
            M2 = 0;
        }
        if (Q <= 0) {
            break;
        }
        Q = Q - 1;
        M3 = M3 + 1;
        Rolls = Rolls + 1;
        if (M3 === 10) {
            Q = Q + 9;
            M3 = 0;
        }
    }
    console.log("Martha plays " + Rolls + " times before going broke.")
    return Rolls;
}

console.log(slots(49, 3, 10, 4))