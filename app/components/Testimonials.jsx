"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([
        {
            name: "Ahmad",
            message: "أفضل مطعم جربته! الأكل لذيذ والأجواء ممتازة.",
        },

    ]);

    const [form, setForm] = useState({ name: "", message: "" });

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.message) {
            setReviews([{ ...form }, ...reviews.slice(0, 3)]); // عرض آخر 4 فقط
            setForm({ name: "", message: "" });
        }
    };

    return (
        <section className="py-20 bg-[#f8f8f8] px-5 text-[#222]">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
رايك مهم بالنسبة النا
                </h2>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow-md p-6 mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">
                        كيف كانت تجربتك
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="اسمك"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="p-3 border rounded-md w-full outline-none"
                            required
                        />
                        <textarea
                            placeholder="شو رأيك بالمكان أو الأكل؟"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="p-3 border rounded-md w-full h-20 resize-none outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 cursor-pointer transition"
                    >
                        إرسال رأيك
                    </button>
                </form>


            </div>
        </section>
    );
};

export default Testimonials;











