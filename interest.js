// --- Firebase setup ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_xmoQZ3JCEtku1PUphlJYa6kshwSjSdo",
    authDomain: "radionice-dff45.firebaseapp.com",
    projectId: "radionice-dff45",
    storageBucket: "radionice-dff45.firebasestorage.app",
    messagingSenderId: "1085580505175",
    appId: "1:1085580505175:web:697d9e635eb669b07a7312",
    measurementId: "G-ME77NDV08L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// --- Form handling ---
document.getElementById("interestForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const workshop = document.getElementById("workshop").value;
  const email = document.getElementById("email").value;

  try {
    await addDoc(collection(db, "interesi"), {
      workshop: workshop,
      email: email,
      timestamp: new Date()
    });

    document.getElementById("message").textContent = "Hvala! Tvoj interes je zabilježen.";
    document.getElementById("interestForm").reset();
  } catch (error) {
    console.error("Greška:", error);
    document.getElementById("message").textContent = "Ups! Nešto nije uspjelo.";
  }
});
