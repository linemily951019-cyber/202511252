let spriteSheet;
let frames = [];

const numFrames = 9; // 圖片精靈檔中有9張圖
const spriteWidth = 1246;
const spriteHeight = 196;
let frameWidth;

function preload() {
  // 預載入圖片資源
  // 請確保 '1/stop/stop-all.png' 是相對於 index.html 的正確路徑
  spriteSheet = loadImage('1/stop/stop-all.png');
}

function setup() {
  // 建立一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);

  // 計算單一影格的寬度
  frameWidth = spriteWidth / numFrames;

  // 從圖片精靈檔中裁切出每一個影格
  for (let i = 0; i < numFrames; i++) {
    let frame = spriteSheet.get(i * frameWidth, 0, frameWidth, spriteHeight);
    frames.push(frame);
  }
}

function draw() {
  // 設定背景顏色
  background('#a3b18a');

  // 讓圖片的定位點在中心
  imageMode(CENTER);

  // 計算目前要顯示的影格索引，並播放動畫
  // (frameCount / 5) 可以控制動畫速度，數字越大動畫越慢
  let currentFrame = floor(frameCount / 5) % numFrames;
  image(frames[currentFrame], width / 2, height / 2);
}

function windowResized() {
  // 當視窗大小改變時，自動調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
