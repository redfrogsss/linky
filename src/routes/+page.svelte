<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	// import bgImg from '$lib/assets/img/img_background.jpg';
</script>

<main class="page">
	<div class="page__inner">
		<!-- Avatar Icon -->
		<Avatar.Root class="avatar">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>

		<div class="page__title">
			<!-- Title -->
			<h1 class="title">Jacky F.</h1>

			<!-- Subtitle -->
			<p class="subtitle">I eat computer bugs.</p>
		</div>

		<!-- Some Full Width Buttons -->
		<div class="page__buttons">
			<Button href="mailto:contact@jacky.fan" variant="outline" size="lg">Email</Button>
			<Button href="https://github.com/redfrogsss" variant="outline" size="lg">Github</Button>
			<!-- <Button href="https://www.linkedin.com/in/jacky-fan-dev/" variant="outline" size="lg">LinkedIn</Button> -->
			<Button href="https://blog.jacky.fan/" variant="outline" size="lg">Blog</Button>
			<Button href="https://blog.jacky.fan/" variant="outline" size="lg">Instagram</Button>
		</div>

		<!-- A row of icon buttons -->
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
	}

	.title {
		font-weight: 700;
		font-size: 24px;
			color: #fff;
	}

	.subtitle {
		font-size: 18px;
			color: #fff;
	}

	:global(.avatar) {
		width: clamp(120px, 24vw, 160px);
		height: unset;
	}

</style>
