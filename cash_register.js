function checkCashRegister(price, cash, cid) {

    var status = ["OPEN", "CLOSED", "INSUFFICIENT_FUNDS"];

    var bills = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100],
    ];

    var cid_total = 0;
    var requiredChange = cash - price;
    for (var i = 0; i < bills.length; i++) {
        cid_total += cid[i][1];
    }
    if (requiredChange == cid_total) {
        return {
            'status': status[1],
            'change': cid
        };
    }

    var change = [];
    for (var i = 0; i < bills.length; i++) {
        change.push(0);
    }
    for (var i = bills.length - 1; i >= 0; i--) {
        var billValue = bills[i][1];
        while (requiredChange >= billValue && cid[i][1] > 0) {
            requiredChange -= billValue;
            change[i] += billValue;
            cid[i][1] -= billValue;
            requiredChange = Math.round((requiredChange + Number.EPSILON) * 100) / 100;
        }
    }

    if (requiredChange == 0) {
        var return_change = [];
        for (var i = bills.length; i >= 0; i--) {
            if (change[i] > 0) {
                return_change.push([bills[i][0], change[i]]);
            }
        }
        return {
            'status': status[0],
            'change': return_change
        };
    } else if (requiredChange > 0) {
        return {
            'status': status[2],
            'change': []
        };
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);