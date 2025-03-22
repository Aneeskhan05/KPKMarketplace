import admin from "firebase-admin"

// Check if Firebase admin has been initialized
if (!admin.apps.length) {
  // Initialize Firebase Admin with service account
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    })
    console.log("Firebase Admin initialized successfully")
  } catch (error) {
    console.error("Firebase admin initialization error:", error)
  }
}

export default admin

