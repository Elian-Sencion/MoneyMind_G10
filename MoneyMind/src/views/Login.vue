<template>
  <ion-page :class="{ 'dark-mode': isDarkMode }">
    <ion-content class="ion-padding">
      <div class="form-container centered">
        <h2 class="text-center">{{ isLogin ? 'Sign In' : 'Sign Up' }}</h2>
        <p class="text-center welcome-text">{{ isLogin ? 'Welcome Back! 👋' : 'Create a new account 🎉' }}</p>
        
        <ion-list>
          <div v-if="!isLogin" class="input-group">
            <label class="input-label">Full Name</label>
            <ion-item class="input-field" lines="none">
              <ion-input v-model="fullName" type="text" placeholder="Enter your full name" required></ion-input>
            </ion-item>
          </div>
          <div class="input-group">
            <label class="input-label">Email Address</label>
            <ion-item class="input-field" lines="none">
              <ion-input v-model="email" type="email" placeholder="Enter your email address" required></ion-input>
            </ion-item>
          </div>
          <div class="input-group">
            <label class="input-label">Password</label>
            <ion-item class="input-field" lines="none">
              <ion-input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password" required></ion-input>
              <ion-icon :icon="showPassword ? eyeOff : eye" slot="end" @click="togglePassword" class="eye-icon"></ion-icon>
            </ion-item>
          </div>
        </ion-list>
        
        <ion-button expand="full" @click="isLogin ? login() : signUp()" class="form-btn">{{ isLogin ? 'Sign In' : 'Sign Up' }}</ion-button>
        
        <p class="text-center account-text">
          {{ isLogin ? `Don't have an account?` : `Already have an account?` }}
          <a href="#" @click.prevent="toggleForm" class="toggle-link">{{ isLogin ? 'Sign Up' : 'Sign In' }}</a>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from 'vue';
import { IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { eye, eyeOff } from 'ionicons/icons';

export default {
  name: 'UserLogin',
  components: { IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonIcon },
  setup() {
    const isLogin = ref(true);
    const fullName = ref('');
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const isDarkMode = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleForm = () => {
      isLogin.value = !isLogin.value;
    };

    const login = () => {
      console.log('Logging in with:', email.value, password.value);
    };

    const signUp = () => {
      console.log('Signing up with:', fullName.value, email.value, password.value);
    };

    return { isLogin, fullName, email, password, showPassword, togglePassword, login, signUp, eye, eyeOff, toggleForm, isDarkMode };
  }
};
</script>

<style>
:root {
  --background-color: #f8f9fa; /* Fondo general claro */
  --form-bg: #ffffff; /* Fondo blanco del formulario */
  --text-color: #000000; /* Texto negro */
  --input-bg: #f1f3f4; /* Fondo claro para inputs */
  --input-border: #ccc; /* Borde gris claro */
  --button-bg: #007bff; /* Azul para el botón */
  --button-hover: #0056b3; /* Azul más oscuro al pasar el mouse */
}

/* Estilos generales */
body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: Arial, sans-serif;
}

/* Contenedor del formulario */
.form-container {
  max-width: 400px;
  padding: 20px;
  text-align: center;
  background: var(--form-bg);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
}
/* Texto principal */
.text-center {
  text-align: center;
  color: var(--text-color);
}

/* Labels en color negro */
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--text-color);
}

/* Inputs */
.input-field {
  width: 100%;
  padding: 10px;
  border: none; /* 🔥 Elimina el borde estático */
  border-bottom: 2px solid var(--input-border); /* Solo un borde inferior */
  border-radius: 2px; /* 🔹 Evita esquinas redondeadas */
  background-color: var(--input-bg);
  color: var(--text-color);
  outline: none; /* 🔥 Evita el contorno azul predeterminado */
  transition: border-color 0.3s ease-in-out;
}

/* Efecto cuando el usuario selecciona el input */
.input-field:focus {
  border-bottom: 2px solid var(--button-bg); /* Color llamativo al hacer focus */
}


/* Botón */
.form-btn {
  width: 100%;
  padding: 12px;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.form-btn:focus {
  outline: none; /* 🔥 Evita el contorno azul al hacer clic */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5); /* ✨ Opcional: resalta con sombra */
}

.form-btn:hover {
  background-color: var(--button-hover);
}

/* Enlaces */
.toggle-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.toggle-link:hover {
  text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #121212;
    --form-bg: #1e1e1e;
    --text-color: #ffffff;
    --input-bg: #2c2c2c;
    --input-border: #444;
    --button-bg: #007bff;
    --button-hover: #0056b3;
  }
}

</style>
