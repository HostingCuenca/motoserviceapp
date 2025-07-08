import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Coverage from "@/components/Coverage";
import RestaurantBanner from "@/components/RestaurantBanner";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";
import TermsConditionsPage from "@/components/pages/TermsConditionsPage";
import AccountDeletionPage from "@/components/pages/AccountDeletionPage";
import ScrollToTop from "@/components/ScrollToTop";

// Componente principal de la página de inicio
const HomePage = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <Services />
            <HowItWorks />
            <Coverage />
            <RestaurantBanner />
            <Partners />
            <Contact />
            <AppDownload />
        </main>
    );
};

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/privacidad" element={<PrivacyPolicyPage />} />
                    <Route path="/terminos" element={<TermsConditionsPage />} />
                    <Route path="/eliminacion-de-cuenta" element={<AccountDeletionPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;