<template>
  <link rel="stylesheet" href=
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="container">
          <div class="user-info">
            <ion-avatar>
              <img src="https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/03/Fotografia-de-Retrato-6-1920x1920.jpg?lossy=1&strip=1&webp=1" alt="avatar" />
            </ion-avatar>
            <div>
              <div class="title">
                <p>Welcome back</p>
              </div>
              <h2 class="name">John Doe</h2>
            </div>
            <button class="icon-button">
      <i class="fas fa-bell"></i>
          <span class="badge">3</span>
      </button>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container-contenido">
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-md="8">
              <p class="label">Your Balance</p>
              <h2 class="balance">$125,000</h2>
            </ion-col>
            <ion-col size="12" size-md="4" class="text-align">
              <p class="resumen">Last month summary</p>
              <p class="porcentaje">+5.57%</p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <ion-card class="card">
        <ion-card-header class="card-header">
          <div class="header-container">
            <h2 class="card-title">X-Card</h2>
            <img src="@/assets/icons/icon-mastercard.png" alt="MasterCard" class="logo" />
          </div>
        </ion-card-header> 
        <ion-card-content>
          <div class="card-content">
            <p style="font-size: 15px;">Balance</p>
            <h2 style="font-size: 25px;">$4,664.63</h2>
          </div>
        </ion-card-content>
        <p class="serial-card">**** 2468</p>
      </ion-card>

      <div class="ultimos-movimientos">
        <h2 class="modal-title">Últimos Movimientos</h2>

        <div class="transaction" v-for="(item, index) in transactions" :key="index">
          <img :src="item.icon" class="icon" />
          <div class="details">
            <strong>{{ item.title }}</strong>
            <p>{{ item.date }}</p>
          </div>
          <div class="amount" :class="{'negative': item.amount < 0, 'positive': item.amount > 0}">
            {{ item.amount < 0 ? '-' : '+' }} ${{ Math.abs(item.amount).toFixed(2) }}
          </div>
        </div>

        <ion-button expand="block" fill="clear" class="see-more">See more >></ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="js">
import { 
  IonPage, IonHeader, IonToolbar, IonAvatar, IonLabel, IonButton, IonContent, IonGrid, IonRow, 
  IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent 
} from '@ionic/vue';
import { ref } from 'vue';
import iconBombilla from '@/assets/icons/icon-bombilla.png';

const isModalOpen = ref(false);

const transactions = ref([
  {
    title: 'Electricity Bill',
    date: '20 October 2024, 3:15 pm',
    amount: -250.00,
    icon: iconBombilla
  },
  {
    title: 'Freelance Payment',
    date: '20 October 2024, 3:15 pm',
    amount: 250.00,
    icon: iconBombilla
  }
]);
</script>

<style>
ion-toolbar {
  --background: #f4f4f4;
  --border-color: transparent;
}

ion-content {
  --background: #f4f4f4;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

.user-info {
  display: flex;
  align-items: center;
  color: black;
}

.name {
  margin-top: 40px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
}

.title{
  position: absolute;
  top: 18%;
  margin-left: 12px;
  font-size: 14px;
  color: #343638;
}

.round-button {
  --border-radius: 50%;
  --background: #f4f4f4;
  --box-shadow: none;
  --border-width: 10;
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}

.notification {
  position: absolute;
  left: 95%;
}

.container-contenido {
  padding-left: 16px;

  padding-right: 16px;
  padding-top: 0px;
  padding-bottom: 16px;
  display: ad;
  background-color: #f4f4f4;
}

.label {
  font-size: 14px;
  color: #0A2A62;
  margin: 0;
}

.balance {
  font-size: 24px;
  font-weight: bold;
  color: #0A2A62;
  margin: 5px 0 0;
}

.resumen {
  font-size: 12px;
  color: gray;
  text-align: right;
  margin: 0;
}

.porcentaje {
  font-size: 14px;
  color: #5C9EFF;
  text-align: right;
  margin: 5px 0 0;
}

.card {
  background: linear-gradient(145deg, #1a237e, #0d47a1);
  border-radius: 16px;
  padding: 24px;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  color: #fdfdfd;
  margin-top: 10px;
}

.logo {
  width: 80px;
  height: auto;
  position: absolute;
  top: -30px;
  right: 10px;
}

.serial-card {
  padding-left: 20px;
  margin-bottom: -10px;
  font-size: 18px;
}

.menu-row {
  justify-content: center;
  text-align: center;
}

.menu-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-button.menu-button {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  --background: linear-gradient(145deg, #5159ad, #0d47a1) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);
}

.menu-button.selected {
  background-color: #A5C9FF;
}

.icon-img {
  width: 30px;
  height: 30px;
}

.icon-label {
  margin-top: 5px;
  font-size: 14px;
  color: black;
}

.ultimos-movimientos {
  margin-top: 20px;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-title {
  text-align: center;
  font-size: 20px;
  color: #0A2A62;
  margin: 20px 0;
}

.transaction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #f4f4f4;
}

.icon {
  width: 40px;
  height: 40px;
  background-color: #f4f4f4;
  border-radius: 50%;
  padding: 5px;
}

.details {
  flex: 1;
  margin-left: 10px;
  color: black;
}

.amount {
  font-weight: bold;
  font-size: 18px;
}

.negative {
  color: red;
}

.positive {
  color: #0A2A62;
}

.see-more {
  color: #0A2A62;
  font-weight: bold;
}

.icon-button {
            z-index: 100;
            margin-left: 200PX;
            position: relative;
            color: white;
            border: none;
            padding: 20px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 50%;
            background-color: rgb(0, 13, 128);
        }

        .icon-button:hover {
            background-color: #0b7dda;
        }

        .badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #ff9800;
            color: white;
            font-size: 12px;
            padding: 3px 6px;
            border-radius: 50%;
        }
            
</style>
