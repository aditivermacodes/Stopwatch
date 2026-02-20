# ⏱️ React Stopwatch

A high-precision stopwatch application built using **React functional components and Hooks**.
This project demonstrates accurate time tracking, efficient state management, and proper interval cleanup to prevent memory leaks.

---

## 🚀 Features

* ▶️ Start timer
* ⏸ Stop timer
* 🔄 Reset timer
* ⏱ Millisecond precision timing
* 🧠 Accurate time calculation using `Date.now()`
* 🧹 Proper interval cleanup using `useEffect`
* 💎 Modern responsive UI

---

## 🛠️ Tech Stack

* **React**
* **JavaScript (ES6+)**
* **CSS3**
* React Hooks:

  * `useState`
  * `useRef`
  * `useEffect`

---

## 🧠 How It Works

* Uses `useState` to manage running state and elapsed time.
* Uses `useRef` to persist:

  * Interval ID
  * Start time reference
* Uses `useEffect` to:

  * Start interval when running
  * Cleanup interval on stop/unmount
* Calculates elapsed time using:

```js
Date.now() - startTimeRef.current
```

This ensures accurate time tracking instead of incrementing manually.

---

## 🖥️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/aditivermacodes/Stopwatch.git
```

2. Navigate into the project folder:

```
cd Stopwatch
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm start
```

---

## 🎯 Learning Outcomes

This project helped reinforce:

* React component structure
* State vs ref differences
* Managing side effects with `useEffect`
* Preventing memory leaks
* Formatting time data efficiently
* Building clean UI components

---

## 📌 Future Improvements

* 📝 Add lap functionality
* 🌙 Dark / Light mode toggle
* 💾 Persist time using localStorage
* 🎨 Add animated transitions

---

## 👩‍💻 Author

**Aditi Verma**
Frontend Developer | React Enthusiast


