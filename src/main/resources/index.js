let billeter = [];
let ut = "";


function lagreBillet() {

    const billet = {
        film: document.getElementById("select").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefon: document.getElementById("telefon").value,
        epost: document.getElementById("epost").value

    }

    const feil = sjekk();
    if (!feil) {
        billeter.push(billet)
        document.getElementById("select").selectedIndex = 0;
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefon").value = "";
        document.getElementById("epost").value = "";
        visBilleter();
    }
}

function visBilleter() {

    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th> <th>Etternavn</th><th>Telefon</th> <th>Epost</th>" +
        "</tr>";
    for (let enkelBillet of billeter) {
        ut += "<tr>";
        ut += "<td>" + enkelBillet.film + "</td><td>" + enkelBillet.antall + "</td><td>" + enkelBillet.fornavn + "</td><td>" +
            enkelBillet.etternavn + "</td><td>" + enkelBillet.telefon + "</td><td>" + enkelBillet.epost + "</td><td>" + "</tr>";

    }
    document.getElementById("billetListe").innerHTML = ut + "\n";


}

function slett() {
    ut = "";
    billeter = [];
    visBilleter();
}

function sjekk() {
    const strengFilm = document.getElementById("select").value;
    const strengAntall = document.getElementById("antall").value;
    const strengFornavn = document.getElementById("fornavn").value;
    const strengEtternavn = document.getElementById("etternavn").value;
    const strengTelefon = document.getElementById("telefon").value;
    const strengEpost = document.getElementById("epost").value;

    let feil = false;

    if (strengFilm.selectedIndex === 0) {
        document.getElementById("feilmelding").innerHTML = " ** Må skrives noe antallet";
        feil = true;
    }

    if (strengAntall === "") {
        document.getElementById("feilmelding").innerHTML = " ** Må skrives noe antallet";
        feil = true;
    }
    if (strengFornavn === "") {
        document.getElementById("feilfornavn").innerHTML = " ** Må skrives noe antallet";

        feil = true;
    }
    if (strengEtternavn === "") {
        document.getElementById("feiletternavn").innerHTML = " ** Må skrives noe i etternavnet";

        feil = true;
    }
    if (strengTelefon === "") {
        document.getElementById("feiltelefon").innerHTML = " ** Må skrives noe i telefon";
        feil = true;
    }
    if (strengEpost === "") {
        document.getElementById("feilepost").innerHTML = " ** Må skrives noe i epøst";
        feil = true;
    }


    return feil;
}