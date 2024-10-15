<template>

  <q-page class="flex flex-center bg-grey-2">
    <div class="full-width q-pa-md">
      <!-- Initial State -->
      <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
      >
        <q-card
          v-if="gameState === 'initial'"
          flat
          bordered
          class="my-card q-ma-md shadow-5"
        >
          <q-card-section class="bg-primary text-white">
            <div class="text-h5 text-center">Welcome to Liar's Bar</div>
          </q-card-section>
          <q-card-section class="q-pt-lg" style="max-height: 300px; overflow-y: auto;">
            <p class="text-body1 text-center">
              遊戲規則：
            </p>
            <ul>
              <li>牌組：20張牌（6張K、6張Q、6張A、2張Joker）</li>
              <li>玩家人數：4位</li>
              <li>每局隨機選擇 K/Q/A 作為目標牌型</li>
            </ul>
            <p class="text-body1 text-center">
              遊戲流程：
            </p>
            <ol>
              <li>玩家輪流出牌，聲明自己出的是目標牌型。</li>
              <li>下一位玩家可以選擇說 <b>liar</b> 或繼續出牌。</li>
              <li>直到剩下1名玩家，遊戲結束</li>
            </ol>
            <p class="text-body1 text-center">
              如果說 <b>liar</b>：
            </p>
            <ul>
              <li>檢查前一位玩家的牌。</li>
              <li>如果該玩家說謊，說謊玩家要進行左輪手槍遊戲。</li>
              <li>如果該玩家沒說謊，說 <b>liar</b> 的玩家要進行左輪手槍遊戲。</li>
            </ul>
            <p class="text-body1 text-center">
              左輪手槍規則：
            </p>
            <ul>
              <li>手槍有6個膛室，裡面有1枚子彈。</li>
              <li>每位玩家開始時的命中率為0/6。如果這回合開槍沒射中，下一回合將變為1/6，命中率將會越來越高。</li>
              <li>被射中的玩家退出當前回合。</li>
            </ul>
          </q-card-section>
          <q-card-actions vertical align="center" class="q-py-md">
            <q-btn
              color="secondary"
              label="開始新遊戲"
              class="full-width q-py-sm text-weight-bold"
              size="lg"
              @click="startGame"
            />
          </q-card-actions>
        </q-card>
      </transition>

      <!-- Shuffling State -->
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-card
          v-if="gameState === 'shuffling'"
          flat
          bordered
          class="my-card q-ma-md shadow-5"
        >
          <q-card-section class="bg-secondary text-white">
            <div class="text-h5 text-center">洗牌中</div>
          </q-card-section>
          <q-card-section class="text-center q-pt-lg">
            <div class="shuffle-container">
              <div
                v-for="i in 20"
                :key="i"
                class="card-back"
                :style="{ transform: `rotate(${Math.random() * 360}deg) translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)` }"
              ></div>
            </div>
          </q-card-section>
        </q-card>
      </transition>

      <!-- Card Selection State -->
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-card
          v-if="gameState === 'selecting'"
          flat
          bordered
          class="my-card q-ma-md shadow-5"
        >
          <q-card-section class="bg-secondary text-white">
            <div class="text-h5 text-center">選擇目標牌</div>
          </q-card-section>
          <q-card-section class="text-center q-pt-lg">
            <div class="cards-container">
              <transition-group name="card-shuffle" tag="div" class="cards-deck">
                <div
                  v-for="(card, index) in shufflingCards"
                  :key="card + index"
                  class="card"
                  :class="{ 'card-selected': index === selectedCardIndex }"
                >
                  <img
                    :src="getCardImage(card)"
                    :alt="card"
                    class="card-image"
                  />
                </div>
              </transition-group>
            </div>
            <q-btn
              v-if="selectedCard"
              color="primary"
              label="進入遊戲"
              class="q-mt-md full-width"
              @click="confirmCardSelection"
            />
          </q-card-section>
        </q-card>
      </transition>

      <!-- Playing State -->
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-card
          v-if="gameState === 'playing'"
          flat
          bordered
          class="my-card q-ma-md shadow-5"
        >
          <q-card-section class="text-white" style="background-color: #392a77">
            <div class="text-h5 text-center">
              目標牌: {{ selectedCard }}
            </div>
          </q-card-section>
          <q-card-section class="bg-grey-4">
            <div class="player-layout">
              <transition-group name="player-move">
                <div
                  v-for="(player, index) in players"
                  :key="player.id"
                  :class="['player-wrapper', playerPositions[index]]"
                >
                  <q-btn
                    round
                    :size="$q.screen.lt.sm ? '16px' : '20px'"
                    :color="
                  player.isAlive
                    ? player.isSelected
                      ? 'red-10'
                      : 'dark'
                    : 'grey'
                "
                    :disable="!player.isAlive"
                    @click="selectPlayer(index)"
                    class="shadow-5"
                  >
                    <q-avatar :size="$q.screen.lt.sm ? '30px' : '40px'">
                      <img :src="getPlayerAvatar(index)"/>
                    </q-avatar>
                  </q-btn>
                  <q-badge color="red" floating rounded>
                    {{ player.shotCount }}/6
                  </q-badge>
                  <div
                    class="player-name q-mt-sm"
                    @click="selectPlayer(index)"
                  >
                    <q-popup-edit
                      v-model="player.name"
                      auto-save
                      v-slot="scope"
                    >
                      <q-input v-model="scope.value" dense autofocus/>
                    </q-popup-edit>
                    {{ player.name }}
                  </div>
                </div>
              </transition-group>
            </div>
          </q-card-section>
          <q-card-actions align="center" class="q-pa-md" style="background-color: #3d2676">
            <q-btn
              style="background-color: #dc2626; color: white"
              icon="fa fa-gun"
              label="開槍"
              @click="shoot"
              class="full-width q-py-sm"
              size="lg"
            />
          </q-card-actions>
        </q-card>
      </transition>

      <!-- Game Over State -->
      <transition
        appear
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOut"
      >
        <q-card
          v-if="gameState === 'gameOver'"
          flat
          bordered
          class="my-card q-ma-md shadow-5"
        >
          <q-card-section class="bg-positive text-white">
            <div class="text-h4 text-center">遊戲結束！</div>
          </q-card-section>
          <q-card-section class="text-center q-pt-lg">
            <q-avatar size="100px" class="q-mb-md">
              <img :src="winnerImg"/>
            </q-avatar>
            <div class="text-h5 q-mb-md">獲勝者: {{ winner.name }}</div>
          </q-card-section>
          <q-card-actions align="center" class="q-pa-md">
            <q-btn
              color="primary"
              label="再玩一局"
              @click="resetGame"
              class="full-width q-py-sm"
              size="lg"
            />
          </q-card-actions>
        </q-card>
      </transition>
<!--      <div v-if="isOverlayVisible" class="overlay"></div>-->
      <div v-if="isOverlayVisible" :class="['overlay', { 'overlay-flash': isFlashing }]" @animationend="handleAnimationEnd"/>

    </div>
  </q-page>
  <MainLayout @reset-game="resetGame" />
</template>

<style lang="scss">
// 主卡片樣式
.my-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
}

// 洗牌動畫樣式
.cards-container {
  perspective: 1000px;
  height: 300px;
  position: relative;
}

.cards-deck {
  position: relative;
  width: 200px;
  height: 280px;
  margin: 0 auto;
  transform-style: preserve-3d;
}

.card {
  position: absolute;
  width: 200px;
  height: 280px;
  transition: all 0.5s ease;
  transform-origin: center center -140px; // Half of the card height
  backface-visibility: hidden;

  &-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
}

.card-shuffle-move {
  transition: all 0.5s ease;
}

.card-selected {
  z-index: 10;
  transform: translateZ(140px) rotateY(0deg) !important;
}

@keyframes shuffle {
  0%, 100% { transform: translateZ(0) rotateY(0deg); }
  25% { transform: translateZ(100px) rotateY(180deg); }
  50% { transform: translateZ(0) rotateY(360deg); }
  75% { transform: translateZ(-100px) rotateY(540deg); }
}

.shuffling {
  animation: shuffle 1s ease-in-out;
}

.shuffle-container {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0 auto;
}

.card-back {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 100px;
  background-color: #1976D2;
  transition: all 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 3px;
  }
}

.card-image {
  width: 90%;
  height: 90%;
  object-fit: contain;
}

// 玩家佈局樣式
.player-layout {
  position: relative;
  //width: 300px;
  height: 300px;
  margin: 0 auto;
}

.player-name {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
}

// 動畫效果
.player-move-enter-active,
.player-move-leave-active {
  transition: all 0.5s ease;
}

.player-move-enter-from,
.player-move-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s ease;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateY(50px) rotateY(90deg);
}

// 響應式設計
@media (max-width: 600px) {
  .my-card {
    max-width: 100%;
  }

  .cards-container {
    flex-direction: column;
    height: auto;
  }

  .card {
    margin: 10px 0;
  }

  .player-layout {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .player-wrapper {
    position: static;
    transform: none;
  }
}

// 全局動畫效果
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.pulse {
  animation: pulse 1s infinite;
}

.player-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &.top, &.top-center {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.left, &.middle-left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right, &.middle-right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &.bottom, &.bottom-center {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* 黑色背景，70% 透明度 */
  z-index: 999; /* 確保在最上層 */
  pointer-events: all; /* 允許點擊事件 */
  animation: breathing 1.1s ease-in-out infinite;
}
@keyframes breathing {
  0%, 100% {
    background-color: rgba(0, 0, 0, 0.7); /* 初始透明度 */
  }
  50% {
    background-color: rgba(0, 0, 0, 0.4); /* 呼吸到最亮 */
  }
}
@keyframes screenShake {
  0% { transform: translate(0px, 0px); }
  20% { transform: translate(-10px, 10px); }
  40% { transform: translate(10px, -10px); }
  60% { transform: translate(-10px, -10px); }
  80% { transform: translate(10px, 10px); }
  100% { transform: translate(0px, 0px); }
}

/* 定義背景閃爍效果 */
@keyframes flashBackground {
  0% { background-color: rgba(255, 0, 0, 0); }
  50% { background-color: rgba(255, 0, 0, 1); }
  100% { background-color: rgba(255, 0, 0, 0); }
}

/* 定義淡入淡出效果 */
@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.screen-shake {
  animation: screenShake 0.5s ease-in-out 3; /* 螢幕晃動持續 1.5 秒 */
}

.overlay-flash {
  animation: flashBackground 0.5s ease-in-out 5; /* 背景閃爍持續 2.5 秒 */
}

.fade-out {
  animation: fadeOut 1s ease-in-out forwards; /* 淡出效果 */
}
</style>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { Howl } from "howler";
import A from "assets/card/A.png";
import K from "assets/card/K.png";
import Q from "assets/card/Q.png";
import avatar from "../assets/avatar.png";
import winnerPng from "../assets/winner.png";
import revolverSpin from "../assets/mp3/revolver-spin.mp3";
import revolverCocking from "../assets/mp3/revolver-cocking.mp3";
import revolverShot from "../assets/mp3/revolver-shot.mp3";
import cardShuffling from "../assets/mp3/cards-shuffling.mp3";
import heartBeat from "../assets/mp3/heartbeat-loop.mp3";
import MainLayout from "layouts/MainLayout.vue";

const cardImages = {
  A,
  K,
  Q,
};
const shufflingCards = ref(['K', 'Q', 'A', 'K', 'Q', 'A', 'K', 'Q', 'A'])
const selectedCardIndex = ref(-1);
const props = defineProps(['soundEnabled'])
const isOverlayVisible = ref(false);
const isFlashing = ref(false); // 控
const shuffleCards = () => {
  if (props.soundEnabled) {
    cardFlipSound.play();
  }
  const shuffleDuration = 2000 // 3 seconds
  const intervalTime = 100 // Change cards every 100ms
  let elapsed = 0

  const shuffleInterval = setInterval(() => {
    shufflingCards.value = shufflingCards.value
      .sort(() => Math.random() - 0.5)
    elapsed += intervalTime

    if (elapsed >= shuffleDuration) {
      clearInterval(shuffleInterval)
      selectFinalCard()
    }
  }, intervalTime)
}

const selectFinalCard = () => {
  selectedCardIndex.value = Math.floor(Math.random() * 3)
  selectedCard.value = shufflingCards.value[selectedCardIndex.value]
}
const $q = useQuasar();

const gameState = ref("initial");
const selectedCard = ref(null);
const players = ref([
  {
    name: "P1",
    isAlive: true,
    shotCount: 0,
    isSelected: false,
    bulletPosition: Math.floor(Math.random() * 6) + 1,
  },
  {
    name: "P2",
    isAlive: true,
    shotCount: 0,
    isSelected: false,
    bulletPosition: Math.floor(Math.random() * 6) + 1,
  },
  {
    name: "P3",
    isAlive: true,
    shotCount: 0,
    isSelected: false,
    bulletPosition: Math.floor(Math.random() * 6) + 1,
  },
  {
    name: "P4",
    isAlive: true,
    shotCount: 0,
    isSelected: false,
    bulletPosition: Math.floor(Math.random() * 6) + 1,
  },
]);

const playerPositions = computed(() =>
  $q.screen.lt.sm
    ? ['top-center', 'middle-left', 'middle-right', 'bottom-center']
    : ['top', 'left', 'right', 'bottom']
)


const cardFlipSound = new Howl({ src: [cardShuffling] });
const gunClickSound = new Howl({ src: [revolverCocking] });
const gunSpinSound = new Howl({ src: [revolverSpin] });
const gunShotSound = new Howl({ src: [revolverShot] });
const heartBeatSound = new Howl({ src: [heartBeat] });

const winner = ref(null)
const getCardImage = (card) => {
  return cardImages[card] || null; // 請確保有對應的圖片檔案
};

const getPlayerAvatar = (index) => {
  return avatar; // 請確保有對應的圖片檔案
};

const winnerImg = ref(winnerPng);

const startGame = () => {
  gameState.value = "selecting";
  shuffleCards();
};

const confirmCardSelection = () => {
  gameState.value = 'playing'
  if (props.soundEnabled) {
    gunSpinSound.play();
  }
}

const selectPlayer = (index) => {
  players.value.forEach((player, i) => {
    player.isSelected = i === index && player.isAlive;
  });
};

const playHeartBeat = (count, interval, isShot) => {
  let playCount = 0;

  const playNext = () => {
    if (playCount < count) {
      heartBeatSound.play();
      playCount++;
      setTimeout(playNext, interval);
    } else {
      if (isShot) {
        gunShotSound.play();
      } else {
        gunClickSound.play();
      }
    }
  };

  playNext();
};
const handleAnimationEnd = (event) => {
  if (event.animationName === "flashRed") {
    isFlashing.value = false; // 當紅色閃爍結束時，重置閃爍狀態
  }
};
const shoot = () => {
  const selectedPlayer = players.value.find((player) => player.isSelected);

  if (!selectedPlayer) {
    $q.notify(
      {
        color: "warning",
        position: "top",
        message: "請先選擇一個玩家",
        icon: "warning",
      },
      1500
    );
    return;
  }
  isOverlayVisible.value = true;
  const isShot = ++selectedPlayer.shotCount === selectedPlayer.bulletPosition;

  // 播放心跳聲音
  if (props.soundEnabled) {
    playHeartBeat(3, 1000);
  }

  const notifyMessage = isShot
    ? `${selectedPlayer.name} 被淘汰了！`
    : `${selectedPlayer.name} 倖存了！`;
  const notifyColor = isShot ? "negative" : "info";
  const notifyIcon = isShot ? "sentiment_very_dissatisfied" : "sentiment_satisfied";

  // 播放音效，然後顯示通知
  setTimeout(() => {
    selectedPlayer.isSelected = false;
    if (isShot) {
      gunShotSound.play(); // 播放槍聲
      selectedPlayer.isAlive = false;
      triggerScreenShake(); //
    } else {
      gunClickSound.play(); // 播放空槍聲
    }
    $q.notify({
      color: notifyColor,
      message: notifyMessage,
      position: "top",
      icon: notifyIcon,
    });
    isOverlayVisible.value = false; // 隱藏 overlay
    checkGameOver();
  }, 3000); // 根據心跳聲的播放時間設置延遲，這裡假設心跳聲播放完需要 3 秒

};

const triggerScreenShake = () => {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("screen-shake"); // 加入抖動類
  isFlashing.value = true; // 啟用紅色背景閃爍

  setTimeout(() => {
    bodyElement.classList.remove("screen-shake"); // 移除抖動效果
  }, 500); // 抖動時間對應 CSS 動畫的時長

  // 控制紅色背景閃爍結束
  setTimeout(() => {
    isFlashing.value = false;
  }, 1500); // 與 `overlay-flash` 動畫匹配的結束時間
};

const checkGameOver = () => {
  const alivePlayers = players.value.filter(player => player.isAlive)
  if (alivePlayers.length === 1) {
    winner.value = { ...alivePlayers[0], index: players.value.findIndex(p => p.id === alivePlayers[0].id) }
    gameState.value = 'gameOver'
  }
}

const resetGame = () => {
  winner.value = null
  gameState.value = "initial";
  selectedCard.value = null;
  players.value.forEach((player) => {
    player.isAlive = true;
    player.shotCount = 0;
    player.isSelected = false;
    player.bulletPosition = Math.floor(Math.random() * 6) + 1;
    // 保留玩家名稱，不重置
  });
};
defineOptions({
  name: "IndexPage",
});
</script>
