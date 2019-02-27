<template>
  <div>
    <h1 class="mb-3">Flexbox Experiments</h1>
    <h2 class="mt-3 mb-1">Display flex</h2>
    <div class="custom-flex-container">
      <div class="box one box-width"></div>
      <div class="box two box-width"></div>
      <div class="box three box-width"></div>
    </div>
    <h2 class="mt-3 mb-1">Flex grow</h2>
    <div class="custom-flex-container">
      <div class="box one flex-grow-1"></div>
      <div class="box two flex-grow-1"></div>
      <div class="box three flex-grow-1"></div>
    </div>
    <h2 class="mt-3 mb-1">Flex wrap</h2>
    <div class="custom-flex-container flex-wrap">
      <div class="box one flex-grow-1 min-width-50-percent"></div>
      <div class="box two flex-grow-1 min-width-50-percent"></div>
      <div class="box three flex-grow-1 min-width-50-percent"></div>
    </div>
    <h2 class="mt-3 mb-1">Flex wrap reverse</h2>
    <div class="custom-flex-container flex-wrap-reverse">
      <div class="box one flex-grow-1 min-width-50-percent"></div>
      <div class="box two flex-grow-1 min-width-50-percent"></div>
      <div class="box three flex-grow-1 min-width-50-percent"></div>
    </div>
    <h2 class="mt-3 mb-1">Flex basis</h2>
    <div class="custom-flex-container">
      <div class="box one flex-basis-100"></div>
      <div class="box two flex-basis-200"></div>
      <div class="box three flex-basis-300"></div>
    </div>
    <h2 class="mt-3 mb-1">Flex basis + Flex grow</h2>
    <div class="custom-flex-container">
      <div class="box one flex-grow-1 flex-basis-100"></div>
      <div class="box two flex-grow-1 flex-basis-200"></div>
      <div class="box three flex-grow-1 flex-basis-300"></div>
    </div>
    <h2 class="mt-3 mb-1">Flex menu</h2>
    <nav class="nav-menu">
      <ul>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#">Services</a> </li>
        <li> <a href="#">Products</a> </li>
        <li> <a href="#">About</a> </li>
        <li> <a href="#">Contact</a> </li>
      </ul>
    </nav>
    <h2 class="mt-3 mb-1">2 Flex menus</h2>
    <nav class="nav-menus">
      <ul>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#">Services</a> </li>
        <li> <a href="#">Products</a> </li>
        <li> <a href="#">About</a> </li>
        <li> <a href="#">Contact</a> </li>
      </ul>
      <ul class="social">
        <li> <a href="#">Facebook</a> </li>
        <li> <a href="#">Twitter</a> </li>
      </ul>
    </nav>
    <h2 class="mt-3 mb-1">Flow and Axis</h2>
    <div class="custom-flex-container-flow ">
      <div class="box one box-basis-100"></div>
      <div class="box two box-basis-100"></div>
      <div class="box three box-basis-100"></div>
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.custom-flex-container {
  display: flex;
  background: #fff;
  border: 1px solid #000;
}
.box {
  height: 100px;
}
.box-width {
  width: 200px;
}
.one {
  background: red;
}
.two {
  background: blue;
}
.three {
  background: green;
}
.flex-grow-1 {
  flex-grow: 1;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.min-width-50-percent {
  min-width: 50%;
}
.flex-basis-100 {
  flex-basis: 100px;
}
.flex-basis-200 {
  flex-basis: 200px;
}
.flex-basis-300 {
  flex-basis: 300px;
}
/* nav menu */
.nav-menu {
  background: #333;
}
.nav-menu ul {
  list-style-type: none;
  padding: 0;
}
.nav-menu a {
  text-decoration: none;
  text-align: center;
  color: #fff;
  display: block;
  padding: 10px;
}
.nav-menu a:hover {
  background-color: #555;
}
@media screen and (min-width: 768px) {
  .nav-menu ul {
    display: flex;
    justify-content: flex-start;
  }
  .nav-menu li {
    flex: 1 1 0;
  }
}
/* nav menus */
.nav-menus {
  background: #333;
}
.nav-menus ul {
  list-style-type: none;
  padding: 0;
}
.nav-menus a {
  text-decoration: none;
  text-align: center;
  color: #fff;
  display: block;
  padding: 10px;
}
.nav-menus a:hover {
  background-color: #555;
}
.nav-menus .social {
  max-width: 150px;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .nav-menus {
    display: flex;
    justify-content: space-between;
  }
  .nav-menus ul {
    display: flex;
    justify-content: flex-start;
  }
  .nav-menus li {
    flex: 1 1 0;
  }
  .nav-menus .social {
    flex: 1 1 0;
    margin: 0;
  }
}
/* Flow and Axis */
.custom-flex-container-flow {
  display: flex;
  background: #fff;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  height: 600px;
  border: 1px solid black;
}
.box-basis-100 {
  flex: 0 0 100px;
}
</style>