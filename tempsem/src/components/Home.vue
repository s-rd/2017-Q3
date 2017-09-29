<template>
  <div class="home">

		<!-- <header>
			<h1 class="part title anim1">Simon<br />Dagfinrud</h1>
			<span class="part line anim2"></span>
			<a class="part contact anim3" href="tel:004741443922">41443922</a>
			<span class="part line anim4"></span>
			<a class="part contact anim5" href="mailto:hi@semon.je">hi@semon.je</a>
		</header> -->

		<main>
			<ul>
				<li>
					<span class="wrap">
						<a href="mailto:hi@semon.je" class="part email anim slide delay-025">hi@semon.je</a>
						<span class="part line"></span>
						<a href="tel:004741443922" class="part phone anim slide delay-025">(+47) 41 44 39 22</a>
					</span>
				</li>
				<li v-for="l in list">
					<a class="wrap" :href="l.link" target="_blank">
						<span class="part text">{{ l.title }}</span>
						<span class="part line"></span>
						<span class="part text">{{ l.description }}</span>
						<span class="part line"></span>
						<span class="part text">{{ l.date }}</span>
						<span class="part line"></span>
						<span class="part text">{{ l.client }}</span>
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
      msg: 'heisann',
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
				// {
				// 	title: 'Phew',
				// 	link: 'http://semon.je/phew',
				// 	description: 'For Philips Hue',
				// 	client: 'Self',
				// 	date: '2017'
				// },
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
				// {
				// 	title: 'Optimal Helseklinikk',
				// 	link: 'http://optimalhelseklinikk.no',
				// 	description: 'Terapeuts & fitness',
				// 	client: 'Optimal',
				// 	date: '2017'
				// },
				// {
				// 	title: 'Ørsta Røde Kors',
				// 	link: 'http://orstarodekors.no',
				// 	description: 'First aid',
				// 	client: 'Røde Kors',
				// 	date: '2017'
				// },
                                {
					title: 'Hum Mag',
					link: '#',
					description: 'Youth magazine',
					client: 'Røde Kors',
					date: '2016'
				},
                                {
					title: 'Fjord Fabrics',
					link: 'http://fjordfabrics.no',
					description: 'Exquisite brands',
					client: 'Racer',
					date: '2016'
				},
                                {
					title: 'Blåhuset',
					link: 'http://blahuset.no',
					description: 'Shopping center',
					client: 'Racer',
					date: '2016'
				},
                                {
					title: 'Tindebygget',
					link: 'http://tindebygget.no',
					description: 'Office rentals',
					client: 'Racer',
					date: '2016'
				},
				{
					title: 'SBM Arena',
					link: 'http://sbmarena.no',
					description: 'Events & fun',
					client: 'Racer',
					date: '2017'
				},
				{
					title: 'Vertikalservice',
					link: 'http://vertikalservice.no',
					description: 'Offshore inspection',
					client: 'Racer',
					date: '2017'
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
					link: 'https://issuu.com/mk-oskar/docs/russeavisa2015-olav-torh-simon-kare',
					description: 'Magazine yearbook',
					client: 'Voldarussen 2015',
					date: '2015'
				},
				{
					title: 'Fadderveka',
					link: '#',
					description: 'Buddy week!',
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

@keyframes line {
	from { right: 100%; }
	to	 { right: 0%; }
}

header {
	position: relative;
	margin: $spacing-big auto;
	margin-top: $spacing-big*2;
	width: $width;
	max-width: $width-max;
	// background: $color-light;
	color: $color-main;
	text-align: left;
	display: flex;
	transition: ease 0.15s all;
	.part {
		display: inline-block;
		font-family: $font-ps2p;
		text-decoration: none;
		vertical-align: bottom;
		align-self: flex-end;
		color: $color-main;
		animation: slide 0.3s 0.5s both;
		&.line {
			flex: 1 1 auto;
			height: 10px;
			background: $color-light;
			margin: 3px 20px;
		}
		&.anim1 { animation-delay: 0.25s; }
		&.anim2 { animation-delay: 0.40s; }
		&.anim3 { animation-delay: 0.55s; }
		&.anim4 { animation-delay: 0.70s; }
		&.anim5 { animation-delay: 0.85s; }
	}
	.title {
		display: inline-flex;
		font-family: $font-ps2p;
		font-weight: 600;
		font-size: 25px;
		line-height: 1.25em;
		align-self: flex-end;
		margin: 0;
		animation: slide 0.3s 0.25s both;
	}
}



main {
	position: relative;
	width: $width;
	max-width: $width-max;
	top: 0%;
	margin: $spacing-big*1.5 auto;
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		li {
			padding: 0;
			margin: 0;
			cursor: pointer;
			.wrap {
				padding: 10px 0;
				margin: 0;
				display: flex;
				align-content: stretch;
				justify-content: space-between;
				text-decoration: none;
				// transition: ease 0.3s all;
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
					transition: ease 0.3s all;
					&.text {
						animation: slide 0.3s both;
						animation-delay: 0.5s;
					}
					&.line {
						height: 6px;
						margin: 2px 10px;
						flex: 1 1 auto;
						background: $color-main;
						position: relative;
						transition: none;
						animation: pop 0.3s both;
						animation-delay: 0.25s;
						&:before {
							content: "";
							background: $color-light;
							// background: #f9f9ff;
							display: inline-block;
							position: absolute;
							left: 0;
							right: 0;
							top: 0; bottom: 0;
							transition: ease 0.3s all;
							animation: line 0.5s 0.9s both;
						}
						// background: $color-main;
					}
				}
			}
		}
	}
	&:hover {
		ul li .wrap {
			.part {
				color: $color-light;
			}
			&:hover {
				.part {
					color: $color-main;
					transition: 0s;
					&.line {
						background: $color-main;
						&:before { transition: none; left: 100%; }
					}
				}
			}
		}
	}
	@media screen and (max-width: 915px) {
		background: #f30;
	}
}
</style>
