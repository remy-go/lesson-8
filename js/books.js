var Books = (function() {

var books = {
"9789955707806": {
"title": "Atmintinė. Microsoft Word 2010",
"author": "Vilija Stankienė",
"isbn": 9789955707806,
"price": 1.26,
"description": "Šioje atmintinėje pateikti dažniausiai naudojamų valdymo komandų trumpi aprašymai ir klavišų deriniai joms įvykdyti bei atsakymai į dažniausiai užduodamus klausimus.",
"image": "cover-1.png" 
},
"9789955707868": {
"title": "Kompiuterizuotas variklių valdymas",
"author": "Steve V. Hatch",
"isbn": 9789955707868,
"price": 25.57,
"description": "Ši knyga jiems padės geriau suprasti, kaip veikia kompiuterinės variklio valdymo sistemos ir kaip surasti jose atsiradusius gedimus.",
"image": "cover-2.png" 
},
"9955707097": {"title": "Maya 7 trimatės animacijos pradmenys",
"author": "Dariush Derakhshani",
"isbn": 9955707097,
"price": 7.89,
"description": "Skaitydami šią knygą jūs susipažinsite su pačiomis įvairiausiomis „Maya“ programos funkcijomis, įrankiais, sužinosite, kaip sukonstruoti, atvaizduoti, animuoti savo sukurtus veikėjus.",
"image": "cover-3.png"

},
"9789955707264": {"title": "PHP, MySQL ir Apache",
"author": "Julie C.  Meloni",
"isbn": 9789955707264,
"price": 17.67,
"description": "Knygoje „PHP MySQL ir Apache“ pristatomos seniai lauktos PHP 5 ir MySQL 5 progaminės įrangos versijos, aptariamos naujos jų ypatybės.",
"image": "cover-1.png"

},
"9789955707295": {"title": "Kaip dirbti kompiuteriu. III Leid.",
"author": "Mindaugas Starkus",
"isbn": 9789955707295,
"price": 5.05,
"description": "Tai knygos „Kompiuteris. Pirmieji žingsniai“ tęsinys, skirtas jau turintiems šiokių tokių darbo kompiuteriu įgūdžių ir norintiems dirbti profesionaliau „MS Windows“ aplinkoje.",
"image": "cover-1.png"

},
"9955707143": {"title": "Duomenų saugos pradmenys",
"author": "Miroslav Lučinskij, Povilas Poderskis, Povilas Tumėnas",
"isbn": 9955707143,
"price": 2.38,
"description": "Šioje knygoje išsamiai aptariamos virtualioje erdvėje plintančios atakos, su kuriomis gali susidurti kiekvienas interneto vartotojas, bei pateikiami pagrindiniai būdai, kaip jų išvengti.",
"image": "cover-1.png"

},
"9789955707547": {"title": "Patarimai kompiuterio naudotojui",
"author": "Kazimieras Brundza",
"isbn": 9789955707547,
"price": 4.74,
"description": "Knygoje aprašyta, kaip pačiam, be specialisto pagalbos ir didesnių pastangų, iš naujo įsidiegti „Windows XP“ arba „Windows Vista“ operacinę sistemą.",
"image": "cover-2.png"

},
"9789955707165": {"title": "Autodesk Architectural Desktop 2006 vadovas",
"author": "Paul F.Aubin",
"isbn": 9789955707165,
"price": 7.90,
"description": "Šiame vadove išsamiai aprašomos „Autodesk Architectural Desktop“ programos priemonės ir komandos, jų pritaikymo galimybės, gausu patarimų, kaip racionaliai ir efektyviai dirbti.",
"image": "cover-1.png"

},
"9789955707417": {"title": "Kompiuterių tinklas",
"author": "Stasys Kirdeikis, Vidmantas Jurka",
"isbn": 9789955707417,
"price": 5.68,
"description": "Šioje knygoje sužinosite, kaip susiprojektuoti tinklą pagal savo poreikius ir galimybes, pasirinkti reikiamą įrangą, sujungti kompiuterius į laidinį ar bevielį tinklą.",
"image": "cover-3.png"

},
"9789955707653": {"title": "Praktiniai Adobe Flash CS4 Professional patarimai",
"author": "Mark Schaeffer",
"isbn": 9789955707653,
"price": 3.27,
"description": "Knygos autorius Markas Šeferis (Mark Schaeffer) aprašo geriausius būdus, kaip „Flash“ programa piešti ir animuoti grafikos elementus bei publikuoti vaizdo įrašus internete.",
"image": "cover-2.png"

},
"9955551755": {"title": "Marketingo karai",
"author": "Al Ries, Jack Trout",
"isbn": 9955551755,
"price": 9.79,
"description": 
"„Marketingo karų“ principai šiandien svarbūs kaip niekada anksčiau. Kompanijos turi išmokti įveikti konkurentus. Atsilaikyti prieš jų jėgą. Pasinaudoti trūkumais.",
"image": "cover-3.png"

},
"9955707046": {"title": "Kaip tapti žinomam",
"author": "Liutauras Ulevičius",
"isbn": 9955707046,
"price": 2.04,
"description": "Knygoje pateikti praktiniam pritaikymui skirti patarimai, kurie padės visuomenei papasakoti apie save.",
"image": "cover-1.png"

},
"9789955707257": {"title": "Adobe Photoshop. Moterų fotografavimo menas",
"author": "Kevin Ames",
"isbn": 9789955707257,
"price": 8.78,
"description": "Knygoje aprašomi procesai, vykstantys skaitmeninėje fotografijoje. Nuosekliai pasakojama, kaip sutvarkyti ir supakuoti savo skaitmeninius negatyvus, kaip platinti nuotraukas internetu, el. paštu, išspausdinti ant tradicinio popieriaus.",
"image": "cover-4.png" 

},
"9955551526": {"title": "Informacinių technologijų pratybos",
"author": "Stasys Kirdeikis",
"isbn": 9955551526,
"price": 0.81,
"description": "Šių pratybų turinys sudarytas atsižvelgiant į pagrindinės mokyklos bendrąsias programas ir išsilavinimo standartus, apima maždaug pirmąją pusę programos turinio.",
"image": "cover-2.png"

},
"9789955707226": {"title": "Atmintinė. Windows Vista",
"author": "Birutė Leonavičienė",
"isbn": 9789955707226,
"price": 0.27,
"description": "Skaitytojai sužinos, kaip dirbti „Windows Vista“ operacinės sistemos aplinkoje, kaip paleisti taikomąsias programas ir jomis naudotis, įdiegti naujas, pašalinti nereikalingas, kaip naudotis kompiuterių tinklo galimybėmis, naršyti po internetą, siųsti el. laiškus.",
"image": "cover-1.png"

},
"97899557074": {"title": "Microsoft Office pradedančiajam",
"author": "Danutė Kaklauskienė",
"isbn": 97899557074,
"price": 6.00,
"description": "Ši knyga – tai darbo su „Windows“ operacine sistema, teksto rengykle „Microsoft Word“, skaičiuokle „Microsoft Excel“ ir pateikčių rengimo programa „PowerPoint“ pradžiamokslis.",
"image": "cover-3.png"

}
};

function pricesToIntegers() {
for (var book in books) {
  books[book].price = Math.round(books[book].price * 100);
  }
}

pricesToIntegers();
return books;

})();
