import React, { useState, useEffect } from "react";
import "./translate.css";
const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Hindi", value: "hi", src: "https://flagcdn.com/h60/in.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "Italian", value: "it", src: "https://flagcdn.com/h60/it.png" },
  // Add additional languages as needed
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}

export default function GoogleTranslate({ prefLangCookie }) {
  const [langCookie, setLangCookie] = useState(
    decodeURIComponent(prefLangCookie)
  );

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define the initialization function
    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      // Clean up
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const onChange = (value) => {
    const lang = "/en/" + value;
    setLangCookie(lang);
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      <div id="google_translate_element"></div>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={langCookie.split("/")[2]}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
