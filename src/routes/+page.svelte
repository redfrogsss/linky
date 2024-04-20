<script lang="js">
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import pien from '$lib/assets/img/img_pien.png';
	
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content="{data.meta.description}" />
</svelte:head>
<main class="page">
	<div class="page__inner">
		<!-- Avatar Icon -->
		<Avatar.Root class="avatar">
			<Avatar.Image src={pien} alt="data.title" />
			<Avatar.Fallback>{data.title}</Avatar.Fallback>
		</Avatar.Root>

		<div class="page__title">
			<!-- Title -->
			<h1 class="title">{data.title}</h1>

			<!-- Subtitle -->
			<p class="subtitle">{data.subtitle}</p>
		</div>

		<!-- Some Full Width Buttons -->
		<div class="page__buttons">
			{#each data.buttons as { name, href }, i}
			<Button href="{href}" variant="outline" size="lg" target="_blank">{name}</Button>
			{/each}
		</div>

		<!-- A row of icon buttons -->
	</div>

	<div class="page__footer">
		<p>{@html data.footer}</p>
	</div>
</main>

<style lang="scss">
	.page {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;

		background-image: url("../lib/assets/img/img_background.jpg");
		background-size: cover;
		background-position: center right;
		background-repeat: no-repeat;

		position: relative;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background: linear-gradient(rgba(#000, .3),rgba(#000, .3));
		}

		&__inner {
			width: 80%;
			max-width: 500px;

			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			align-items: center;
			z-index: 1;

			padding-block: 100px;
		}

		&__title {
			text-align: center;
			width: 100%;

			margin-block: 16px;

		}

		&__buttons {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			row-gap: 16px; 
			width: 100%;


		}

		&__footer {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100vw;

			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;

			padding-block: 16px;
			font-size: 14px;
			color: white;

			& a {
				color: lightblue;
				text-decoration: underline;
			}
		}

	}

	.title {
		font-weight: 700;
		font-size: 24px;
		color: #fff;
	}

	.subtitle {
		font-size: 18px;
		color: #fff;
		margin-block: 8px;
	}

	:global(.avatar) {
		width: clamp(120px, 24vw, 160px);
		height: unset;
		aspect-ratio: 1;
	}

</style>
