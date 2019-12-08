<template>
  <div />
</template>
<script>
export default {
  mounted() {
    const script = function (p5) {
      p5.setup = function () {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
        // 背景を白
        p5.background(255)
      }
      p5.draw = function () {
        // 背景を白
        p5.background(255)
        // ライトの設定。マウスの位置で光の方向が変化
        const locY = (p5.mouseY / p5.height - 0.5) * (-2)
        const locX = (p5.mouseX / p5.width - 0.5) * 2
        // 色
        const ran1 = Math.floor(Math.random() * Math.floor(255))
        const ran2 = Math.floor(Math.random() * Math.floor(255))
        const ran3 = Math.floor(Math.random() * Math.floor(255))
        p5.ambientLight(ran1, ran2, ran3)
        p5.pointLight(200, 200, 200, locX, locY, 0)
        // Yを少しずつ回転。
        p5.rotateY(p5.frameCount * 0.0001)
        // ドラック対応
        p5.orbitControl()
        for (let j = 0; j < 10; j++) {
          p5.push()
          for (let i = 0; i < 100; i++) {
            p5.translate(p5.sin(p5.frameCount * 0.001 + j) * 200, p5.sin(p5.frameCount * 0.001 + j) * 300, i * 0.1)
            p5.rotateZ(p5.frameCount * 0.002)
            p5.push()
            // プリミティブの作成
            p5.sphere(0.5, 10, 100)
            p5.pop()
          }
          p5.pop()
        }
      }
    }
    const P5 = require('p5')
    const p5 = new P5(script)
    return p5
  },
  destroyed() {
    // ページ遷移時に削除
    const p5Canvas = document.getElementById('defaultCanvas0')
    p5Canvas.remove()
  }
}
</script>
<style>
#p5Canvas {
  position: relative;
  padding: 50px;
  z-index: 1;
}

.p5Canvas {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  z-index: 0;
}
</style>
