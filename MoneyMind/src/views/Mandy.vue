<template>
  <div id="chatContainer">
    <div class="chatHeader">
      <h4>Mandy</h4>
    </div>
    <div class="chatBody" ref="chatBody">
      <div class="chatDate">{{ currentDate }}</div>
      <div class="messages" v-for="message in messages" :key="message.id">
        <div class="messageRow user" v-if="message.sender === 'user'">
          <div class="message user">
            <p>{{ message.message }}</p>
          </div>
        </div>
        <div class="messageRow bot" v-else>
          <div class="message bot">
            <p>{{ message.message }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="chatFooter">
      <form @submit.prevent="sendMessage()" class="chatForm">
        <input v-model="messageContent" id="createMessage" placeholder="Escribe un mensaje..." @keyup.enter="sendMessage"/>
        <button type="submit" class="sendButton" :disabled="messageContent.trim() === ''">
          <span v-if="!loading">Enviar</span>
          <span v-else>Cargando...</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, nextTick } from "vue";
export default {
  name: "App",
  setup() {
    const messages = ref([]),
      messageContent = ref(""),
      loading = ref(false);
    const currentDate = ref("");
    const chatBody = ref(null);

    onMounted(() => {
      currentDate.value = new Date().toLocaleDateString();
    });

    function sendMessage() {
      if (messageContent.value.trim() === "") return;
      createMessage(messageContent.value, 'user');
      getResponse(messageContent.value);
      messageContent.value = "";
    }

    function createMessage(message, sender) {
      let id = messages.value.length ? messages.value[messages.value.length - 1].id + 1 : 1;
      messages.value.push({
        id,
        message,
        sender
      });

      nextTick(() => {
        chatBody.value.scrollTop = chatBody.value.scrollHeight;
      });
    }

    async function getResponse(message) {
      loading.value = true;
      try {
        const { data } = await axios.post("http://localhost:8000/chat", { message });
        createMessage(data.response, 'bot');
      } catch (error) {
        console.error("Error fetching response:", error);
      } finally {
        loading.value = false;
      }
    }

    return { messages, messageContent, sendMessage, currentDate, loading, chatBody };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  font-family: Arial, sans-serif;
}

#chatContainer {
  background: #f4f4f8;
  height: 93vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.chatHeader {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  padding: 15px;
  background: #4c83ff;
}

.chatBody {
  overflow-y: auto;
  flex: 1;
  padding: 20px;
}

.chatDate {
  font-size: 1.2rem;
  color: #4c83ff;
  text-align: center;
  margin-bottom: 10px;
}

.messageRow {
  display: flex;
  margin-bottom: 10px;
}

.messageRow.user {
  justify-content: flex-end;
}

.messageRow.bot {
  justify-content: flex-start;
}

.message {
  padding: 10px 20px;
  border-radius: 20px;
  max-width: 70%;
  color: #fff;
  word-wrap: break-word;
}

.message.user {
  background: #4c83ff;
}

.message.bot {
  background: #43cc47;
}

.chatFooter {
  display: flex;
  padding: 10px;
  background: #fff;
}

.chatForm {
  display: flex;
  gap: 10px;
  width: 100%;
}

#createMessage {
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
}

.sendButton {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4c83ff;
  color: white;
  border: none;
  cursor: pointer;
}

.sendButton:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.sendButton:hover:enabled {
  background-color: #1a1a2e;
}
</style>
