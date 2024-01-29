class Pankki 
{
    constructor(tilinumero) 
    {
        this.tilinumero = tilinumero;
        this.saldo = 0;
        this.historia = [];
        this.luottoraja = 0;
    }

    talleta(summa) 
    {
        this.saldo += summa;
        this.lisääHistoriaan("Talletus", summa);
    }

    nosta(summa) 
    {
        if (this.saldo >= summa) 
        {
            this.saldo -= summa;
            this.lisääHistoriaan("Nosto", summa);
            return true;
        } 

        else 
        {
            console.log("Saldo ei riitä nostoon.");
            return false;
        }
    }

    lisääKorko(korkoprosentti) 
    {
        const korko = this.saldo * (korkoprosentti / 100);
        this.saldo += korko;
        this.lisääHistoriaan("Korko", korko);
    }

    tarkistaLuotto(nettoTulot) 
    {
        const maksimiLuottoraja = nettoTulot * 0.25;
        console.log(`Maksimi luottoraja: ${maksimiLuottoraja}`);
        
        if (this.luottoraja < maksimiLuottoraja) 
        {
            console.log("Voit saada lisää luottoa!");
        } 
        else 
        {
            console.log("Luottoraja on täynnä, et voi saada enempää luottoa.");
        }
    }

    näytäTiedot() 
    {
        console.log(`Tilinumero: ${this.tilinumero}`);
        console.log(`Saldo: ${this.saldo}`);
        console.log(`Luottoraja: ${this.luottoraja}`);
        this.näytäHistoria();
    }

    näytäHistoria() 
    {
        console.log("Historia:");
        this.historia.forEach(tapahtuma => 
        {
            console.log(`- ${tapahtuma.päivämäärä.toLocaleString()}: ${tapahtuma.tapahtuma} ${tapahtuma.summa} (${tapahtuma.saldoEnnen})`);
        });
    }

    lisääHistoriaan(tapahtuma, summa) 
    {
        const historiaTapahtuma = 
        {
            päivämäärä: new Date(),
            tapahtuma: tapahtuma,
            summa: summa,
            saldoEnnen: this.saldo
        };

        this.historia.push(historiaTapahtuma);
    }
}


const pankkitili = new Pankki("FI123456789");

pankkitili.talleta(1780);
pankkitili.nosta(531);
pankkitili.lisääKorko(5); 
pankkitili.näytäTiedot();


const nettotulot = prompt("Syötä nettotulosi:");
pankkitili.tarkistaLuotto(parseFloat(nettotulot));
