<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="signup-container centered">
          <h2 class="text-center">Sign Up</h2>
          <p class="text-center welcome-text">Create a new account 🎉</p>
          <ion-list>
            <div class="input-group">
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
  
          <ion-button expand="full" @click="signUp" class="signup-btn">Sign Up</ion-button>
          <p class="text-center account-text">Already have an account? <a href="#" class="sign-in">Sign In</a></p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonIcon } from '@ionic/vue';
  import { eye, eyeOff } from 'ionicons/icons';
  
  export default {
    
    components: { IonPage, IonContent, IonList, IonItem, IonInput, IonButton, IonIcon },
    setup() {
      const fullName = ref('');
      const email = ref('');
      const password = ref('');
      const showPassword = ref(false);
  
      const togglePassword = () => {
        showPassword.value = !showPassword.value;
      };
  
      const signUp = () => {
        console.log('Signing up with:', fullName.value, email.value, password.value);
      };
  
      return { fullName, email, password, showPassword, togglePassword, signUp, eye, eyeOff };
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    padding: 20px;
    text-align: center;
  }
  
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    margin-top: 10px;
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
  
  .signup-btn {
    margin-top: 15px;
    background-color: #28a745;
    color: white;
    border-radius: 8px;
    font-weight: bold;
  }
  
  .account-text {
    font-size: 14px;
    margin-top: 15px;
  }
  
  .sign-in {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  