<template>
  <div class="home">
		<main>
			<h1>Simon<br />Dagfinrud</h1>
		</main>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

@import '../assets/sass/variables';

main {
	position: absolute;
	top: 0; left: 0;
	right: 0; bottom: 100px;
	margin: auto;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background: $color-light;
	background: #f9f9ff;
	color: $color-main;
	text-align: center;
	display: flex;
	cursor: pointer;
	transition: ease 0.15s all;
	h1 {
		flex: 1 1 auto;
		align-self: center;
		font-family: $font-ps2p;
		font-weight: 600;
		font-size: 25px;
		line-height: 1.25em;
	}
	&:hover {
		transform: scale(1.1);
	}
}
</style>
