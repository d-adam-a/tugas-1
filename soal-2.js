const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const function1 = () => console.log([...hewanBuas, ...hewanJinak]);

const function2 = () => {
    let ikan, wortel, cacing;
    [ikan, wortel, cacing] = hewanJinak;
    console.log(ikan, wortel, cacing);
}

function2();

const cetak = new Promise((x) => {
    setTimeout(() => {
        x(function1());
}, 5000);
});