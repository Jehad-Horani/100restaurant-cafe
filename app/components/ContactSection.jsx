"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="bg-[#fdfdfd] py-20 md:px-15 px-5 text-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">معلومات التواصل</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* معلومات التواصل */}
                    <div className="space-y-6">
                        <a
                            href="https://maps.app.goo.gl/WfHRjET64zHren5HA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex items-start  hover:text-red-600 pb-5 gap-4">
                                <MapPin className="text-primary mt-1" />
                                <div>

                                    <h4 className="text-lg font-semibold">الموقع</h4>
                                    <p className="">اشارع البطحاء ,اشارات مستشفى الامير حمزة، عمّان، الأردن</p>
                                </div>
                            </div>
                        </a>

                        <a href="tel:+962 7 9292 8000">

                            <div className="flex items-start   hover:text-red-600 pb-5 gap-4">
                                <Phone className="text-primary mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold">رقم الهاتف</h4>
                                    <p>+962 7 9292 8000</p>
                                </div>
                            </div>
                        </a>

                        <a href="mailto:100.restaurant@gmail.com">

                            <div className="flex items-start hover:text-red-600 pb-5 gap-4">
                                <Mail className="text-primary mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold">البريد الإلكتروني</h4>
                                    <p>100.restaurant@gmail.com</p>
                                </div>
                            </div>
                        </a>

                        <div className="flex items-start gap-4">
                            <Clock className="text-primary mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold">مواعيد العمل</h4>
                                <p>يومياً من 9:00 صباحاً حتى 1:00 بعد منتصف الليل</p>
                            </div>
                        </div>
                    </div>

                    {/* خريطة Google أو صورة */}
                    <div>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.841510816246!2d35.941032199999995!3d31.9800573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b6119e451fb43%3A0xc7ebb3c1806ebcb8!2s100%20Restaurant%20%26%20Cafe!5e1!3m2!1sen!2sjo!4v1752770985417!5m2!1sen!2sjo"
                            width="100%"
                            height="300"
                            className="rounded-xl border-2 border-gray-200 shadow-sm"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
