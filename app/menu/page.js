"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import BreakfastBuffetSection from "../components/BreakfastBuffet";



const MENU_SECTIONS = [
  { id: "appetizers", title: "المقبلات | Appetizers" },
  { id: "salads", title: "السلطات | Salads" },
  { id: "pasta", title: "الباستا | Pasta" },
  { id: "meals", title: "الوجبات | Meals" },
  { id: "softdrinks", title: "المشروبات الغازية | Soft Drinks" },
  { id: "juices", title: "العصائر | Juices" },
  { id: "milkshake", title: "ميلك شيك | Milkshake" },
  { id: "cocktail", title: "الكوكتيل | Cocktail" },
  { id: "desserts", title: "الحلويات | Desserts" },
  { id: "colddrinks", title: "المشروبات الباردة | Cold Drinks" },
  { id: "hotdrinks", title: "المشروبات الساخنة | Hot Drinks" },
  { id: "icecream", title: "البوظة | Ice Cream" },
  { id: "shisha", title: "الاراجيل | Shisha" },
];

const initialItems = {
  appetizers: [
    { nameAr: "بطاطا مقلية", nameEn: "French Fries", price: "1.25 JD" },
    { nameAr: "بطاطا ودجز", nameEn: "Widgets Potatoes", price: "1.75 JD" },
    { nameAr: "بطاطا كيرلي", nameEn: "Curly potatoes", price: "1.75 JD" },
    { nameAr: "بطاطا مكس", nameEn: "mix potatoes", price: "1.75 JD" },
    { nameAr: "اجنحة دجاج", nameEn: "Chicken Wings", price: "1.5 JD" },
  ],
  salads: [
    { nameAr: "سيزر", nameEn: "Caesar", price: "2.50 JOD" },
    { nameAr: "سيزر مع دجاج", nameEn: "Caesar with Chicken", price: "3.00 JOD" },
    { nameAr: "سلطة جرجير", nameEn: "Rocca", price: "2.50 JOD" },
    { nameAr: "سلطة 100", nameEn: "Salad 100", price: "3.50 JOD" },
  ],

  pasta: [
    { nameAr: "فوتشيني", nameEn: "Fettuccine", price: "3.00 JOD" },
    { nameAr: "بينا أرابياتا", nameEn: "Penne Arrabbiata", price: "3.00 JOD" },
    { nameAr: "إضافة دجاج", nameEn: "Extra Chicken", price: "0.50 JOD" },
  ],

  meals: [
    { nameAr: "تندر عادي", nameEn: "Mild Tinder", price: "3.00 JOD" },
    { nameAr: "زنجر حار", nameEn: "Spicy Zinger", price: "3.00 JOD" },
    { nameAr: "ناجتس الدجاج 8 قطع", nameEn: "Chicken Nuggets 8 pcs", price: "2.50 JOD" },
    { nameAr: "سكالوب الدجاج", nameEn: "Chicken Scallop", price: "3.00 JOD" },
    { nameAr: "فاهيتا الدجاج", nameEn: "Chicken Fajitas", price: "3.00 JOD" },
    { nameAr: "دجاج عَ الصاج", nameEn: "Grilled Chicken", price: "3.00 JOD" },
    { nameAr: "دجاج بالكريمة", nameEn: "Creamy Chicken", price: "3.00 JOD" },
    { nameAr: "زنجر بالكريمة", nameEn: "Creamy Zinger", price: "3.00 JOD" },
    { nameAr: "برغر لحم 150 غ", nameEn: "Beef Burger 150g", price: "3.00 JOD" },
    { nameAr: "ستيك لحم", nameEn: "Beef Steak", price: "3.50 JOD" },
  ],

  softdrinks: [
    { nameAr: "مياه", nameEn: "Water", price: "0.25 JOD" },
    { nameAr: "سينالكو (كولا، سفن، دايت، فواكه)", nameEn: "Sinalco", price: "1.00 JOD" },
    { nameAr: "بوم بوم", nameEn: "Bombom", price: "2.00 JOD" },
    { nameAr: "موهيتو سفن", nameEn: "Mojito 7UP", price: "2.50 JOD" },
    { nameAr: "موهيتو سبيشال", nameEn: "Mojito Special", price: "3.50 JOD" },
    { nameAr: "موهيتو بوم بوم", nameEn: "Mojito Bombom", price: "3.50 JOD" },
  ],

  juices: [
    { nameAr: "عصير مانجا فرغلي", nameEn: "Mango Farghaly Juice", price: "3.00 JOD" },
    { nameAr: "عصير برتقال", nameEn: "Orange Juice", price: "2.50 JOD" },
    { nameAr: "عصير ليمون", nameEn: "Lemon Juice", price: "2.50 JOD" },
    { nameAr: "عصير فراولة", nameEn: "Strawberry Juice", price: "2.50 JOD" },
    { nameAr: "عصير ليمون ونعنع", nameEn: "Lemon and Mint Juice", price: "2.50 JOD" },
    { nameAr: "عصير مانجا مع موز", nameEn: "Mango Banana Juice", price: "2.50 JOD" },
    { nameAr: "عصير موز وبرتقال", nameEn: "Orange and Banana Juice", price: "2.50 JOD" },
  ],

  milkshake: [
    { nameAr: "ميلك شيك (فانيلا، شوكولاتة، فراولة)", nameEn: "Milkshake (Vanilla, Chocolate, Strawberry)", price: "2.50 JOD" },
    { nameAr: "ميلك شيك 100", nameEn: "Milkshake 100", price: "3.50 JOD" },
    { nameAr: "سنيكرز", nameEn: "Snickers", price: "3.00 JOD" },
    { nameAr: "عربية", nameEn: "Arabic Ice Cream", price: "3.00 JOD" },
    { nameAr: "تشيز كيك", nameEn: "Cheesecake", price: "3.00 JOD" },
    { nameAr: "بستاشيو", nameEn: "Pistachio", price: "3.50 JOD" },
    { nameAr: "لوتس", nameEn: "Lotus", price: "3.00 JOD" },
  ],

  cocktail: [
    {
      nameAr: "كوكتيل 100 (مكس فواكة، آيس كريم)",
      nameEn: "Cocktail 100 (Mix Fruit, Scoop of Ice Cream)",
      price: "3.50 JOD",
    },
    {
      nameAr: " كوكتيل عادي (مانجا, موز, حليب, فراولة)",
      nameEn: "Regular Cocktail (Mango, Banana, Milk, Strawberry)",
      price: "3.00 JOD",
    },
    {
      nameAr: "كوكتيل أفوكادو بالعسل والقشطة والمكسرات",
      nameEn: "Avocado with Honey, Cream & Nuts",
      price: "3.50 JOD",
    },
    {
      nameAr: "موز بحليب",
      nameEn: "Banana Juice with Milk",
      price: "2.50 JOD",
    },
    {
      nameAr: "موز وحليب وفراولة",
      nameEn: "Strawberry Banana Juice with Milk",
      price: "2.50 JOD",
    },
  ],

  desserts: [
    {
      nameAr: "وافل مكس (شوكلت + فواكه)",
      nameEn: "Fruity Waffle (Chocolate + Fruit)",
      price: "3.00 JOD",
    },
    {
      nameAr: "وافل دبي 100",
      nameEn: "Dubai Waffle 100",
      price: "3.50 JOD",
    },
    {
      nameAr: "كوكيز 100",
      nameEn: "Cookies 100",
      price: "2.00 JOD",
    },
  ],

  colddrinks: [
    {
      nameAr: "فرابتشينو (كراميل، شوكولاتة)",
      nameEn: "Frappuccino (Caramel, Chocolate)",
      price: "3.00 JOD",
    },
    {
      nameAr: "آيس لاتيه",
      nameEn: "Iced Latte",
      price: "3.00 JOD",
    },
    {
      nameAr: "آيس لاتيه كراميل",
      nameEn: "Iced Latte Caramel",
      price: "3.00 JOD",
    },
    {
      nameAr: "آيس سبانش لاتيه",
      nameEn: "Iced Spanish Latte",
      price: "3.00 JOD",
    },
    {
      nameAr: "آيس موكا",
      nameEn: "Iced Mocha",
      price: "3.00 JOD",
    },
    {
      nameAr: "قهوة 100",
      nameEn: "Coffee 100",
      price: "3.50 JOD",
    },
  ],

  hotdrinks: [
    {
      nameAr: "اسبريسو (صغير)",
      nameEn: "Single Espresso",
      price: "1.50 JOD",
    },
    {
      nameAr: "اسبريسو (كبير)",
      nameEn: "Double Espresso",
      price: "2.00 JOD",
    },
    {
      nameAr: "قهوة تركية (صغير)",
      nameEn: "Single Turkish Coffee",
      price: "1.50 JOD",
    },
    {
      nameAr: "قهوة تركية (كبير)",
      nameEn: "Double Turkish Coffee",
      price: "2.00 JOD",
    },
    {
      nameAr: "قهوة أمريكية",
      nameEn: "American Coffee",
      price: "2.00 JOD",
    },
    {
      nameAr: "أمريكانو",
      nameEn: "Americano",
      price: "2.00 JOD",
    },
    {
      nameAr: "قهوة فرنسية",
      nameEn: "French Coffee",
      price: "2.50 JOD",
    },
    {
      nameAr: "شاي أحمر / أخضر",
      nameEn: "Tea Red / Green",
      price: "1.00 JOD",
    },
    {
      nameAr: "شاي كرك",
      nameEn: "Karak Tea",
      price: "2.00 JOD",
    },
    {
      nameAr: "أعشاب (زنجبيل, يانسون, بابونج, كمون, زهورات)",
      nameEn: "Herbs (ginger, anise, chamomile, cumin, zhourat)",
      price: "1.00 JOD",
    },
    {
      nameAr: "نسكافيه",
      nameEn: "Nescafe",
      price: "2.00 JOD",
    },
    {
      nameAr: "نسكافيه بلاك",
      nameEn: "Nescafe Black",
      price: "2.00 JOD",
    },
    {
      nameAr: "هوت شوكلت",
      nameEn: "Hot Chocolate",
      price: "2.50 JOD",
    },
    {
      nameAr: "كافيه لاتيه",
      nameEn: "Café Latte",
      price: "2.50 JOD",
    },
    {
      nameAr: "كابتشينو",
      nameEn: "Cappuccino",
      price: "2.00 JOD",
    },
    {
      nameAr: "كاراميل ماكياتو",
      nameEn: "Caramel Macchiato",
      price: "2.50 JOD",
    },
    {
      nameAr: "موكا",
      nameEn: "Mocha",
      price: "2.50 JOD",
    },
    {
      nameAr: "سبانش لاتيه",
      nameEn: "Spanish Latte",
      price: "2.50 JOD",
    },
  ],
  icecream: [
    {
      nameAr: "آيس كريم (3 سكوب)",
      nameEn: "Ice Cream (Three Scoop)",
      price: "2.50 JOD",
    },
    { nameAr: "سبيشال 100", nameEn: "Special 100", price: "3.50 JOD", },
  ],
  shisha: [
    { nameAr: " ارجيلة خلطة 100", nameEn: "Shisha Mix 100", price: "4.00 JOD" },
    { nameAr: "ارجيلة تفاحتين نخلة", nameEn: "Two Apples Molasses / Nakhla", price: "3.50 JOD" },
    { nameAr: "ارجيلة تفاحتين مزايا", nameEn: "Two Apples Molasses / Mazaya", price: "3.00 JOD" },
    { nameAr: "ارجيلة ليمون ونعنع", nameEn: "Lemon & Mint", price: "3.00 JOD" },
    { nameAr: "ارجيلة بطيخ ونعنع", nameEn: "Watermelon & Mint", price: "3.00 JOD" },
    { nameAr: "ارجيلة علكة ونعنع", nameEn: "Gum with Mint", price: "3.00 JOD" },
    { nameAr: "ارجيلة علكة وقرفة", nameEn: "Gum with Cinnamon", price: "3.00 JOD" },
    { nameAr: "ارجيلة عنب ونعنع", nameEn: "Grapes with Mint", price: "3.00 JOD" },
    { nameAr: "ارجيلةعنب وتوت", nameEn: "Grapes with Berry", price: "3.00 JOD" },
    { nameAr: "ارجيلة الكيف", nameEn: "Al-Kif", price: "3.00 JOD" },
    { nameAr: "ارجيلة كاندي", nameEn: "Candy", price: "3.00 JOD" },
    { nameAr: "ارجيلة لوف", nameEn: "Love", price: "3.00 JOD" },
    { nameAr: "ارجيلة بلومست", nameEn: "Bluemist", price: "3.00 JOD" },
    { nameAr: "ارجيلة زغلول شبراوي (2 راس)", nameEn: "Zaghloul (2 Bowl)", price: "3.00 JOD" },
    { nameAr: "غيار راس ارجيلة", nameEn: "Change the Hookah Bowl", price: "1.50 JOD" },
  ],
};

export default function MenuPage() {
  const [search, setSearch] = useState("");

  return (
    <section className="py-10 bg-[#fafafa] text-[#333] pt-30">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl px-4 font-bold text-center mb-8">قائمة الطعام | Menu</h1>

      <BreakfastBuffetSection />
      <div className="px-4">
        <h1 className="text-2xl md:text-3xl px-4 font-bold text-center mb-2 mt-8"> :ابحث عن اي صنف تريده</h1>

        <div className="mb-8 mt-2">
          <input
            type="text"
            placeholder="ابحث عن صنف"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 text-lg border border-gray-900 rounded-xl shadow-sm"
          />
        </div>

        {MENU_SECTIONS.map(({ id, title }, index) => {
          // شرط: إذا كان اسم القسم يحتوي على كلمة البحث
          const sectionMatchesSearch =
            title.toLowerCase().includes(search.toLowerCase());

          // فلترة العناصر فقط إذا لم يكن اسم القسم يحتوي الكلمة
          const items = sectionMatchesSearch
            ? initialItems[id]
            : initialItems[id].filter(
              (item) =>
                item.nameAr.toLowerCase().includes(search.toLowerCase()) ||
                item.nameEn.toLowerCase().includes(search.toLowerCase())
            );

          if (items.length === 0) return null;

          return (
            <motion.div
              key={id}
              data-aos="fade-up"
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-amber-500 inline-block mb-4">
                {title}
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
                  >
                    <div className="font-medium">
                      {item.nameAr} | {item.nameEn}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{item.price}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
