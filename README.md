# ☀️ Simple Weather App

Ye ek minimalist web application hai jo HTML, CSS, aur JavaScript ka use karke banaya gaya hai. Iska uddeshya OpenWeatherMap API ka upyog karke kisi bhi shahar ka vartaman mausam (current weather) ki jaankari pradarshit karna hai.

## ✨ Features

*   **City Search:** Kisi bhi shahar ka naam daalkar mausam ki jaankari prapt karein.
*   **Current Weather Data:** Temperature, "feels like" temperature, humidity, aur hawa ki gati (wind speed) display karta hai.
*   **Weather Description & Icon:** Mausam ki sthiti ka sankshipt vivaran aur ek prateek icon bhi dikhata hai.
*   **Responsive Design:** Chhote aur bade dono screens par theek se kaam karta hai (basic responsiveness).
*   **Error Handling:** Invalid city name ya API issues ko handle karta hai.

## 🚀 Technologies Used

*   **HTML5:** Web page ka structure.
*   **CSS3:** Styling aur user interface ko sundar banane ke liye.
*   **JavaScript:** Application logic, API calls, aur dynamic content update ke liye.
*   **OpenWeatherMap API:** Mausam data prapt karne ke liye.

## ⚙️ Setup aur Installation

In steps ko follow karke app ko apne local machine par run karein:

1.  **Project Folder Banayein:**
    Ek naya folder banayein, jaise `weather-app/`.

2.  **Files Banayein:**
    `weather-app/` folder ke andar nimnlikhit teen files banayein:
    *   `index.html`
    *   `style.css`
    *   `script.js`

3.  **Code Copy Karein:**
    *   Mere previous response se `index.html` ka code `index.html` file mein copy-paste karein.
    *   `style.css` ka code `style.css` file mein copy-paste karein.
    *   `script.js` ka code `script.js` file mein copy-paste karein.

4.  **OpenWeatherMap API Key Prapt Karein:**
    *   [OpenWeatherMap website](https://openweathermap.org/) par जाएं aur ek free account banayein.
    *   Login karne ke baad, aapko ek API key milegi. Agar nahi, to "API keys" section mein jaakar ek naya key generate karein.

5.  **API Key Configure Karein:**
    *   `script.js` file ko open karein.
    *   `const API_KEY = "PASTE_YOUR_OPENWEATHERMAP_API_KEY_HERE";` line ko dhundhein.
    *   `PASTE_YOUR_OPENWEATHERMAP_API_KEY_HERE` ki jagah apni actual OpenWeatherMap API key paste karein.
    ```javascript
    const API_KEY = "b1b3c4ce7bf4ac00d3ba51b9ff276f09"; // Example
    ```

6.  **Application Run Karein:**
    *   `index.html` file ko apne web browser mein open karein (double-click ya "Open with Live Server" - recommend).
    *   Agar aap VS Code use kar rahe hain, to "Live Server" extension install karein aur `index.html` par right-click karke "Open with Live Server" chunein.

## 🚀 Usage

1.  App open hone ke baad, aapko ek search box dikhega.
2.  Search box mein ek shahar ka naam type karein (jaise `London`, `Mumbai`, `New York`).
3.  "Search" button par click karein.
4.  App us shahar ke liye vartaman mausam ki jaankari display karega.
5.  Agar shahar nahi milta ya koi anya error hoti hai, to ek error message dikhega.

## ⚠️ Important Note about API Keys

Is project mein, OpenWeatherMap API key ko client-side JavaScript (`script.js`) mein sidhe rakha gaya hai. **Production applications ke liye yeh surakshit abhyaas nahi hai** (It is NOT a secure practice for production applications). API keys ko frontend mein rakhne se ve users ke liye visible ho jaate hain, jisse uska durupyog hone ka khatra badh jaata hai.

**Best Practice:** Real-world applications mein, API calls ko ek backend server ke madhyam se process kiya jaata hai, jahan API key surakshit roop se store ki jaati hai aur client-side se sidhe expose nahi hoti hai.

## 💡 Potential Improvements

*   **Geolocation:** User ki vartaman location ke aadhaar par mausam dikhana.
*   **Temperature Unit Toggle:** Celsius aur Fahrenheit ke beech switch karne ka option.
*   **5-Day/Hourly Forecast:** Sirf current mausam nahi, agle kuch dinon ya ghanto ka forecast bhi dikhana.
*   **Search History:** Haal hi mein search kiye gaye shaharon ki list.
*   **Styling Enhancements:** Better UI/UX, animations.
*   **Backend Proxy:** API key ko surakshit rakhne ke liye ek simple Node.js ya Python backend.

---

**Author:**
[Patek kush]

**License:**
This project is open-source and available under the MIT License.

Output:-
---
<img width="733" height="588" alt="image" src="https://github.com/user-attachments/assets/49e1647a-ab48-4c2e-b8d1-6f1778aea62a" />
<img width="733" height="588" alt="image" src="https://github.com/user-attachments/assets/d8b918fb-e85b-4aee-b67a-42025871747a" />

