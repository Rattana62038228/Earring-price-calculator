function earing(Earingcount) {
    console.log(Earingcount)
    if (Earingcount >= 1000) {
        result = Earingcount * 9;
    }
    else if (Earingcount >= 500) {
        result = Earingcount * 9.5;
    }
    else if (Earingcount >= 12) {
        result = Earingcount * 10;
    }
    else {
        result = Earingcount * 30;
    } return result;
}
function Gib(Gibcount) {
    console.log(Gibcount)
    if (Gibcount >= 1500) {
        result = Gibcount * 8;
    }
    else if (Gibcount >= 1000) {
        result = Gibcount * 9;
    }
    else if (Gibcount >= 500) {
        result = Gibcount * 9.5;
    }
    else if (Gibcount >= 12) {
        result = Gibcount * 10;
    }
    else {
        result = Gibcount * 30;
    } return result;
}

function discountTatal(Total) {
    console.log(Total)
    if (Total >= 10000) {
        result = Total - (Total * 0.05);
    }
    else {
        result = Total;
    }
    return result;
}


function onBtnCalClick() {
    var Earingcount = $("#txtEaring").val();
    $("#txtEaringtotalprice").val(earing(Earingcount));
    var Gibcount = $("#txtGib").val();
    $("#txtGibtotalprice").val(Gib(Gibcount));
    
    var EaringTotalprice = $("#txtEaringtotalprice").val();
    var GibTotalprice = $("#txtGibtotalprice").val();
    var Total = parseFloat(EaringTotalprice) + parseFloat(GibTotalprice);
    $("#txtEaringGibtotalprice").val(Total);
    console.log(Total);
    var Total = $("#txtEaringGibtotalprice").val();
    $("#discount").val(discountTatal(Total));
}

function onBtnCalClick_() {
    var Earingcount = $("#txtEaring").val();
    var Gibcount = $("#txtGib").val();    
    var EaringTotalprice = earing(Earingcount);
    var GibTotalprice = Gib(Gibcount);
    $("#txtEaringtotalprice").val(EaringTotalprice);
    $("#txtGibtotalprice").val(GibTotalprice);

    var Total = parseFloat(EaringTotalprice) + parseFloat(GibTotalprice);
    $("#txtEaringGibtotalprice").val(Total);
    console.log(Total);
    var Total = $("#txtEaringGibtotalprice").val();
    $("#discount").val(discountTatal(Total));
}