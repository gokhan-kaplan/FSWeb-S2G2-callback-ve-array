const { fifaData } = require("./fifa.js");

/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)

const gorev1a = fifaData.filter(
  (match) => match.Year === 2014 && match.Stage === "Final"
);

if (gorev1a.length > 0) {
  const homeTeamName2014 = gorev1a.map((match) => match["Home Team Name"]);
  console.log("2014 FIFA Dünya Kupası Finali Ev Sahibi:", homeTeamName2014);
} else {
  console.log("404");
}

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)

const gorev1b = fifaData.filter(
  (match) => match.Year === 2014 && match.Stage === "Final"
);

if (gorev1b.length > 0) {
  const awayTeamName2014 = gorev1b.map((match) => match["Away Team Name"]);
  console.log(
    "2014 FIFA Dünya Kupası Deplasmanda Olan Takım:",
    awayTeamName2014
  );
} else {
  console.log("404");
}

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)

const gorev1c = fifaData.filter(
  (match) => match.Year === 2014 && match.Stage === "Final"
);

if (gorev1c.length > 0) {
  const homeTeamGoals2014 = gorev1c.map((match) => match["Home Team Goals"]);
  console.log(
    "2014 Dünya kupası finali Ev sahibi takım golleri:",
    homeTeamGoals2014
  );
} else {
  console.log("404");
}

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)

const gorev1d = fifaData.filter(
  (match) => match.Year === 2014 && match.Stage === "Final"
);

if (gorev1d.length > 0) {
  const awayTeamGoals2014 = gorev1d.map((match) => match["Away Team Goals"]);
  console.log(
    "2014 Dünya kupası finali Deplasman takım golleri:",
    awayTeamGoals2014
  );
} else {
  console.log("404");
}

//(e) 2014 Dünya kupası finali kazananı*/

const gorev1e = fifaData.filter(
  (match) => match.Year === 2014 && match.Stage === "Final"
);

const awayTeamGoals2014s1e = gorev1e.map((match) => match["Away Team Goals"]);
const homeTeamGoals2014s1e = gorev1e.map((match) => match["Home Team Goals"]);

const totalAwayGoals2014s1e = awayTeamGoals2014s1e.reduce(
  (acc, goals) => acc + goals,
  0
);
const totalHomeGoals2014s1e = homeTeamGoals2014s1e.reduce(
  (acc, goals) => acc + goals,
  0
);

if (totalHomeGoals2014s1e > totalAwayGoals2014s1e) {
  console.log(`${gorev1e[0]["Home Team Name"]} kazandı.`);
} else if (totalHomeGoals2014s1e < totalAwayGoals2014s1e) {
  console.log(`${gorev1e[0]["Away Team Name"]} kazandı.`);
} else {
  console.log("Berabere sonuçlandı.");
}

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(fifaData) {
  const finalMatches = fifaData.filter((match) => match.Stage === "Final");
  return finalMatches;
}
const finalMatchesData = Finaller(fifaData);
console.log(finalMatchesData);

/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(fifaData, Finaller) {
  const finalMatches = Finaller(fifaData);
  const years = [...new Set(finalMatches.map((match) => match.Year))];
  return years;
}

const finalYears = Yillar(fifaData, Finaller);
console.log(finalYears);

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */

function Kazananlar(fifaData, Finaller) {
  const finalMatches = Finaller(fifaData);

  // Kazanan ülkeleri tutmak için bir dizi oluştur
  const kazananlar = [];
  finalMatches.forEach((match) => {
    const homeTeamGoals = parseInt(match["Home Team Goals"], 10);
    const awayTeamGoals = parseInt(match["Away Team Goals"], 10);

    if (homeTeamGoals > awayTeamGoals) {
      kazananlar.push(match["Home Team Name"]);
    } else if (homeTeamGoals < awayTeamGoals) {
      kazananlar.push(match["Away Team Name"]);
    }
  });

  return kazananlar;
}

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(
  fifaData,
  FinallerCallback,
  YillarCallback,
  KazananlarCallback
) {
  const finalMatches = FinallerCallback(fifaData);
  const finalYears = YillarCallback(fifaData, FinallerCallback);
  const kazananlar = KazananlarCallback(fifaData, FinallerCallback);
  const yilBazindaKazananlar = finalYears.map((year, index) => {
    return `${year} yılında, ${kazananlar[index]} dünya kupasını kazandı!`;
  });
  return yilBazindaKazananlar;
}

/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(/* kodlar buraya */) {
  /* kodlar buraya */
}

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  Finaller,
  Yillar,
  Kazananlar,
  YillaraGoreKazananlar,
  OrtalamaGolSayisi,
};
