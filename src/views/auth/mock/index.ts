import test1 from "../../../assets/images/user1.jpg";
import test2 from "../../../assets/images/user2.jpg";
import test3 from "../../../assets/images/user3.jpg";
import test4 from "../../../assets/images/user4.jpg";
import test5 from "../../../assets/images/user5.jpg";

export const card_mock = [
    { title: "KILO", cost: 500, bonus: 5 },
    { title: "MEGA", cost: 1000, bonus: 10 },
    { title: "GIGA", cost: 5000, bonus: 15 },
    { title: "TERA", cost: 10000, bonus: 20 },
] as Array<CardObject>;

export const testi_mock = [
    {
        image: test1,
        name: "Benson koka",
        content:
            "This is my first crytocurrency investment platform, and am enjoying it so far",
    },
    {
        image: test5,
        name: "Hector Moore",
        content:
            "The support on this platform is the best. When l had little issues, they came up reliable and effective and I am earning greatly now.",
    },
    {
        image: test2,
        name: "Shaw Lukes",
        content:
            "Investing with $500 and getting $4,500 was something I never expected in  2 days of trading. Everyone need to know this",
    },
    {
        image: test3,
        name: "Baker Bruce",
        content:
            "Mi gerente de cuenta me trajo aquí, merece un elogio.  Con $ 1000 en bitcoins, obtuve $ 5000 la primera semana y otros $ 5000 la segunda semana.  Ahora he pagado mis deudas y estoy feliz",
    },
    {
        image: test4,
        name: "Gold Miller",
        content:
            "I have become debt free ever since I started my trade with NOTCHCHAIN and I have made over $43,000 in just less than 2 weeks and more still coming in. I appreciate the fast response from the support, my account manager and the smooth withdrawals also",
    },
] as Array<TestiObject>;
