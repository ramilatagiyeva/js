 // 1.sual İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)-?

// 2.sual İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını həyata keçirən bir function yazın.
function hesablama() {
    var a = parseFloat(prompt("Birinci ededi daxil edin:"));
    var b = parseFloat(prompt("İkinci ededi daxil edin:"));

    var toplama = a + b;
    var vurma = a * b;

    alert("Toplama: " + toplama + "\nVurma: " + vurma);
}
hesablama();
// 3.sual Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın 
// Məsələn 6776 -- YES
// 8989 -- NO
// 6807 -- NO
// 9009 -- YES
var eded = prompt("Dord reqemli eded daxil edin:");
if (eded.length === 4) {
    if (eded[0] === eded[3] && eded[1] === eded[2]) {
        console.log("YES");
    } else {
        console.log("NO");
    }
} else {
    console.log("Xahis edirik, dord reqemli bir eded daxil edin.");
}
// 4.sual  İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.

function greetUser() {
    var username = prompt("İstifadeci adinizi daxil edin:");
    alert("Salam, " + username + "!");
}
greetUser();
// 5.sual Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. (Console log istifadə etməyin)
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür
// Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən biza bildiriş olaraq "100 və 0 ədələrini daxil edə bilməzsiz" yazısını göstərsin. Şərtləri daxil edərkən tipə görədə yoxlayın.
// ?
