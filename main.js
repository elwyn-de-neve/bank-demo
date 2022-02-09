/*
Casus
Wij zijn een bank en we hebben meerdere klanten die graag een bedrag van hun account willen opnemen.
Elke individuele klant wordt vastgelegd in een object en alle klanten gezamenlijk (alle objecten) in een array.

Om geld op te kunnen nemen, moet de combinatie rekeningnummer en pincode overeenkomen (valideren)

Input:
- Bankrekening nummer
- Pincode
- Opname bedrag

Output:
- Resterende saldo

Stappenplan:
1. Variabelen declareren voor ingevulde pincode en rekeningnummer en bedrag van opname
2. Klantgegevens ophalen opv variabelen
3. Valideren van pincode met rekeningnummer
4. Bedrag opnemen en saldo bijwerken
5. Tonen van succesbericht en nieuwe saldo
*/

const bankAccounts = [
    {
        id: 1,
        name: 'Axel',
        accountNr: 'NL23INGB0325264330',
        pin: 5722,
        saldo: 1000,
    },
    {
        id: 2,
        name: 'Barend',
        accountNr: 'NL23INGB0456355891',
        pin: 8316,
        saldo: 700,
    },
    {
        id: 3,
        name: 'Charlotte',
        accountNr: 'NL23INGB0163292325',
        pin: 1430,
        saldo: 100,
    },
]

const providedAccountNr = 'NL23INGB0456355891';
const providedPin = 8316;
const withDrawel = 50;

for ( let i = 0; i < bankAccounts.length; i++ ) {
    // Hier komt de code die we herhaaldelijk gaan uitvoeren

    // console.log(bankAccounts[i]);
    const currentAccount = bankAccounts[i];

    if ( providedAccountNr === currentAccount.accountNr ) {
        // Rekeningnummer komt overeen
        console.log( `Welkom ${currentAccount.name} uw bankrekeningnummer is ${currentAccount.accountNr}` )

        if (providedPin === currentAccount.pin) {
            console.log(`Uw saldo was: ${currentAccount.saldo}`);
            currentAccount.saldo = currentAccount.saldo - withDrawel;
            console.log(`Uw nieuwe saldo is: ${currentAccount.saldo}`)
        } else {
            console.log(`Uw pincode ${providedPin} is onjuist`)
        }
    } else {
        // Rekeningnummer komt niet overeen
        // console.log(`Dit is niet uw rekeningnummer: ${currentAccount.accountNr}`)
    }

/*    if ( providedAccountNr === currentAccount.accountNr && providedPin === currentAccount.pin ) {
        // Rekeningnummer komt overeen
        console.log( `Welkom ${ currentAccount.name } uw bankrekeningnummer is ${ currentAccount.accountNr }` )
        console.log( `Uw saldo was: ${ currentAccount.saldo }` );
        currentAccount.saldo = currentAccount.saldo - withDrawel;
        console.log( `Uw nieuwe saldo is: ${ currentAccount.saldo }` )
    } else {
        // Rekeningnummer komt niet overeen
        // console.log(`Dit is niet uw rekeningnummer: ${currentAccount.accountNr}`)
    }*/
}

