<template>
<div id="app">
  <my-header/>
  <router-view/>
</div>
</template>

<script>
import myHeader from '@/views/components/commonHeader'

export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style lang="scss">
#app {
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti !important;
}

blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
    padding: 0;
    margin: 0;
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}

ol,
ul {
    list-style: none;
}

a {
    text-decoration: none;
    border: none;
    outline: none;
}

a:hover {
    text-decoration: none;
}

.clear {
    *zoom: 1;
}

.clear:after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}

body {
    margin: 0;
    background-color: #e1e1e1;
    line-height: 20px;
    color: #333;
}
.wrapPage {
    width: 90%;
    min-width: 960px;
    margin: 15px auto;
    max-width: 1400px;
}
</style>
