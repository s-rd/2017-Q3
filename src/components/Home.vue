<template>
  <div class="home">

		<!-- <header>
			<h1>Simon<br />Dagfinrud</h1>
		</header> -->

		<main>
			<ul>
				<li>
					<span class="wrap">
						<a href="mailto:hi@semon.je" class="part email anim slide delay-025">hi@semon.je</a>
						<span class="part line"></span>
						<a href="tel:004741443922" class="part phone anim slide delay-1">(+47) 41 44 39 22</a>
					</span>
				</li>
				<br />
				<li v-for="l in list">
					<a class="wrap" :href="l.link" target="_blank">
						<span class="part anim slide delay-125">{{ l.title }}</span>
						<span class="part line"></span>
						<span class="part anim slide delay-125">{{ l.description }}</span>
						<span class="part line"></span>
						<span class="part anim slide delay-125">{{ l.date }}</span>
						<span class="part line"></span>
						<span class="part anim slide delay-125">{{ l.client }}</span>
					</a>
				</li>
			</ul>
		</main>

		<footer>
		</footer>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			list: [
				{
					title: 'Sprekest',
					link: 'http://sprekest.no',
					description: 'Keeps you fit',
					client: 'Sprekest',
					date: '2016'
				},
				{
					title: 'Racer',
					link: 'http://racer.no',
					description: 'Design, dev & marketing',
					client: 'Racer',
					date: '2016'
				},
				{
					title: 'Phew',
					link: 'http://semon.je/phew',
					description: 'For Philips Hue',
					client: 'Self',
					date: '2017'
				},
				{
					title: 'Stempl',
					link: 'http://stempl.no',
					description: 'Log your work',
					client: 'Stempl',
					date: '2017'
				},
				{
					title: 'Hyper Bliss ',
					link: 'http://github.com/semonje/hyper-bliss',
					description: 'Happy dark theme',
					client: 'Self',
					date: '2017'
				},
				{
					title: 'Optimal Helseklinikk',
					link: 'http://optimalhelseklinikk.no',
					description: 'Terapeuts & fitness',
					client: 'Optimal',
					date: '2017'
				},
				{
					title: 'Ørsta Røde Kors',
					link: 'http://orstarodekors.no',
					description: 'First aid',
					client: 'Røde Kors',
					date: '2017'
				},
				{
					title: 'SBM Arena',
					link: 'http://sbmarena.no',
					description: 'Events & fun',
					client: 'SBM Arena',
					date: '2017'
				},
				{
					title: 'Vertikalservice',
					link: 'http://vertikalservice.no',
					description: 'Offshore inspection',
					client: 'Vertikalservice',
					date: '2017'
				},
				{
					title: 'Blåhuset',
					link: 'http://blahuset.no',
					description: 'Shopping center',
					client: 'Blåhuset',
					date: '2016'
				},
				{
					title: 'Hum Mag',
					link: 'http://defi.no',
					description: 'Youth magazine',
					client: 'Røde Kors Norge',
					date: '2016'
				},
				{
					title: 'Fjord Fabrics',
					link: 'http://fjordfabrics.no',
					description: 'Exquisite brands',
					client: 'Fjord Fabrics',
					date: '2016'
				},
				{
					title: 'Tindebygget',
					link: 'http://tindebygget.no',
					description: 'Events & fun',
					client: 'SBM Arena',
					date: '2016'
				},
				{
					title: 'Defi',
					link: 'http://defi.no',
					description: 'Design & friends',
					client: 'Designforeningen',
					date: '2016'
				},
				{
					title: 'Ørsta Skisenter',
					link: 'http://orstaskisenter.no',
					description: 'Ski resort',
					client: 'Ørsta Skisenter',
					date: '2015'
				},
				{
					title: '#Voldaruss15',
					link: 'http://orstaskisenter.no',
					description: 'Magazine yearbook',
					client: 'Voldarussen 2015',
					date: '2015'
				},
				{
					title: 'Fadderveka',
					link: 'http://defi.no',
					description: 'University beginnigns',
					client: 'STiV',
					date: '2015'
				},
				{
					title: 'Orange Aerial',
					link: 'http://orangeaerial.com',
					description: 'Helicopter services',
					client: 'Orange Aerial',
					date: '2015'
				},
				{
					title: 'Klypa',
					link: 'http://klypa.no',
					description: 'Revue entertainment',
					client: 'Klypa Entertainment',
					date: '2015'
				},
				{
					title: 'Skår',
					link: 'http://skarbygg.no',
					description: 'Entrepreneurs',
					client: 'Skår Bygg',
					date: '2015'
				},
				{
					title: 'Frost Media',
					link: 'http://frostmedia.no',
					description: 'Location scouting',
					client: 'Frost Media',
					date: '2014'
				},
			]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/variables';

header {
	position: absolute;
	top: 0; left: 0;
	right: 0; bottom: 100px;
	margin: auto;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	// background: $color-light;
	color: $color-main;
	border: solid 6px $color-main;
	text-align: center;
	display: flex;
	cursor: pointer;
	transition: ease 0.15s all;
	opacity: 0;
	animation: pop 0.3s 0.3s both;
	h1 {
		flex: 1 1 auto;
		align-self: center;
		font-family: $font-bitr;
		font-weight: 600;
		font-size: 33px;
		line-height: 1.25em;
	}
}



@keyframes line {
	from { right: 100%; }
	to	 { right: 0%; }
}

main {
	position: absolute;
	width: 50%;
	top: 20%;
	// bottom: 10%;
	left: 7.5%;
	right: 7.5%;
	margin: auto;
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		li {
			padding: 0;
			margin: 0;
			.wrap {
				padding: 0;
				margin: 20px 0;
				display: flex;
				align-content: stretch;
				justify-content: space-between;
				text-decoration: none;
				.part {
					display: inline-block;
					width: auto;
					font-family: $font-ps2p;
					font-size: 11px;
					font-weight: 600;
					text-transform: uppercase;
					text-decoration: none;
					color: $color-main;
					letter-spacing: 0.05em;
					&.line {
						height: 6px;
						margin: 2px 30px;
						flex: 1 1 auto;
						// background: #f9f9ff;
						position: relative;
						&:before {
							content: "";
							background: $color-main;
							// background: #f9f9ff;
							display: inline-block;
							position: absolute;
							left: 0;
							right: 0;
							top: 0; bottom: 0;
							animation: line 0.5s 0.5s both;
						}
						// background: $color-main;
					}
				}
			}
		}
	}
}
</style>
