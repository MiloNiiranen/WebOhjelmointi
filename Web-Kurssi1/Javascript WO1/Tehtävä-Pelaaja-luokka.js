class Pelaaja 
{
    constructor(nimi) 
    {
        this.nimi = nimi;
        this.pisteet = 0;
        this.elämät = 3;
        this.taso = 1;
        this.kokemuspisteet = 0;
    }

    pelaa(arvo) 
    {
        this.pisteet += arvo;
        this.kokemuspisteet += arvo / 10;
        this.tarkistaTaso();
    }

    häviä() 
    {
        this.elämät--;
        if (this.elämät < 0) 
        {
            this.elämät = 0;
        }
    }

    nouseTasolle() 
    {
        if (this.kokemuspisteet >= this.taso * 100) 
        {
            this.taso++;
            console.log(`${this.nimi} nousi tasolle ${this.taso}!`);
            this.kokemuspisteet = 0;
        }
    }

    näytäTiedot() 
    {
        console.log(`Nimi: ${this.nimi}`);
        console.log(`Pisteet: ${this.pisteet}`);
        console.log(`Elämät: ${this.elämät}`);
        console.log(`Taso: ${this.taso}`);
        console.log(`Kokemuspisteet: ${this.kokemuspisteet}`);
    }

    tarkistaTaso() 
    {
        while (this.kokemuspisteet >= this.taso * 100) 
        {
            this.taso++;
            console.log(`${this.nimi} nousi tasolle ${this.taso}!`);
            this.kokemuspisteet = 0;
        }
    }
}

const pelaaja1 = new Pelaaja("Milo");

pelaaja1.pelaa(50);
pelaaja1.häviä();
pelaaja1.näytäTiedot();

pelaaja1.pelaa(120);
pelaaja1.nouseTasolle();
pelaaja1.näytäTiedot();
