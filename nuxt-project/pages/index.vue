<template>
  <div class="container">
    <div id="p5Canvas">
      <!-- <logo /> -->
      <h1 class="title home-fadein">
        Hideo Kaizuka
      </h1>
      <h2 class="subtitle home-fadein">
        I'm a developer
      </h2>
      <nav class="gloval-nav">
        <ul class="nav-menu home-fadein">
          <li>works</li>
          <li>blogs</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  </div>
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
        p5.ambientLight(100, 80, 80)
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
            p5.sphere(2, 10, 100)
            p5.pop()
          }
          p5.pop()
        }
      }
    }
    const P5 = require('p5')
    const test = new P5(script)
    return test
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #000000;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #000000;
  word-spacing: 5px;
  padding-top: 15px;
  padding-bottom: 70px;
}

.links {
  padding-top: 15px;
}

ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 0, 50px;
  letter-spacing: 1px;
  color: #000000;
  width: 250px;
}
.nav-menu {
  font-size: 25px;
}
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

@keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}

.home-fadein {
  animation-name: fadeIn;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
}
</style>
