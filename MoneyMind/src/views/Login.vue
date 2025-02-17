<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="login-container">
          <h2 class="text-center">Sign In</h2>
          <p class="text-center welcome-text">Hi, Welcome Back! 👋</p>
        <!-- 
        <p class="text-center description">Lorem ipsum dolor sit amet, consectetur</p>
        -->
          <ion-list>
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
  
          <div class="flex-row">
            <ion-checkbox v-model="rememberMe"></ion-checkbox>
            <span>Remember Me</span>
            <ion-button fill="clear" color="primary" class="forgot-password">Forgot Password?</ion-button>
          </div>
  
          <ion-button expand="full" @click="login" class="login-btn">Sign In</ion-button>
          <p class="text-center account-text">Don’t have an account? <a href="#" class="sign-up">Sign Up</a></p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { IonPage, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonIcon } from '@ionic/vue';
  import { eye, eyeOff } from 'ionicons/icons';
  
  export default {
    components: { IonPage, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonIcon },
    setup() {
      const email = ref('');
      const password = ref('');
      const showPassword = ref(false);
      const rememberMe = ref(false);
  
      const togglePassword = () => {
        showPassword.value = !showPassword.value;
      };
  
      const login = () => {
        console.log('Logging in with:', email.value, password.value);
      };
  
      return { email, password, showPassword, rememberMe, togglePassword, login, eye, eyeOff };
    }
  };
  </script>
  
  <style scoped>
  
  .login-container {
    max-width: 400px;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
  }
  
  .text-center {
    text-align: center;
    color: #000;
  }
  
  .welcome-text {
    font-size: 18px;
    font-weight: semi-bold;
    margin-top: 15px;
  }
  
  .description {
    font-size: 14px;
    color: #777;
    margin-bottom: 20px;
  }
  
  .input-group {
    text-align: left;
    margin-bottom: 15px;
  }
  
  .input-label {
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 5px;
    margin-top: 20px;
  }
  
  .input-field {
    margin-top: 30px;
    margin-bottom: 35px;
    border: 1px solid #e4e2e2;
    border-radius: 12px;
    padding: 10px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  
  .eye-icon {
    color: #555;
    cursor: pointer;
  }
  
  .flex-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .forgot-password {
    font-size: 16px;
    color: #007bff;
  }
  
  .login-btn {
    margin-top: 15px;
    background-color: #002366;
    color: white;
    border-radius: 8px;
    font-weight: bold;
  }
  
  
  .account-text {
      font-size: 14px;
    margin-top: 15px;
  }
  
  .sign-up {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  </style>