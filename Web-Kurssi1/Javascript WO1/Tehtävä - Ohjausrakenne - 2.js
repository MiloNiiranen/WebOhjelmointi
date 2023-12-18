var nykyinenAika = new Date();
var tunnit = nykyinenAika.getHours();

if (tunnit >= 7 && tunnit <= 11) 
{
    console.log("Hyvää huomenta");
} 

else if (tunnit >= 12 && tunnit <= 18) 
{
    console.log("Hyvää päivää");
} 

else if (tunnit >= 19 && tunnit <= 22) 
{
    console.log("Hyvää iltaa");
} 

else if (tunnit >= 23 || (tunnit >= 0 && tunnit <= 6)) 
{
    console.log("Hyvää yötä");
} 

else 
{
    console.log("Tuntematon aika");
}