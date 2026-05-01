<template>
	<div class="about">
		<!-- 标题 -->
		<div class="header" v-motion :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0 }">
			<h1>SUFFERRAD.CN</h1>
			<p>{{ config.subtitle }}</p>
		</div>

		<!-- 主卡片 -->
		<div class="card hero" style="flex-direction: column;" v-motion :initial="{ opacity: 0, y: 40 }"
			:enter="{ opacity: 1, y: 0 }">
			<p style="font-size: 25px;">你好，很高兴认识你 👋</p>
			<h2 style="font-size: 30px;">{{ config.name }}</h2>
			<span class="card-icon">
				<Icon :icon="config.name_icon" class="icon" />
			</span>
		</div>

		<!-- 信息卡片 -->
		<div class="grid">
			<div v-for="(c, i) in cards" :key="i" class="card" v-motion :initial="{ opacity: 0, y: 30 }"
				:enter="{ opacity: 1, y: 0, transition: { delay: i * 0.08 } }">
				<h3>{{ c.title }}</h3>
				<p v-html="c.content"></p>
				<span class="card-icon">
					<Icon :icon="c.icon" class="icon" />
				</span>
			</div>
		</div>

		<!-- 联系方式 -->
		<div class="card contact" v-motion :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0 }">
			<h3>联系我</h3>
			<a v-for="(link, i) in config.social" :key="i" :href="link.url" target="_blank">
				<Icon :icon="link.icon" class="icon" />
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import { siteConfig } from '../config/site'
	import { Icon } from '@iconify/vue'

	const config = siteConfig

	const cards = computed(() => [
		{
			title: '生于',
			content: `${config.birth} 年`,
			icon: config.birth_icon
		},
		{
			title: '座右铭',
			content: config.motto,
			icon: config.motto_icon
		},
		{
			title: '关注偏好',
			content: config.focus,
			icon: config.focus_icon

		},
		{
			title: '音乐偏好',
			content: config.music,
			icon: config.music_icon
		},
		{
			title: '性格',
			content: config.personality,
			icon: config.personality_icon
		},
		{
			title: '特长',
			content: config.skill,
			icon: config.skill_icon
		}
	])
</script>

<style scoped>
	.about {
		min-height: 100vh;
		padding: 60px;
		color: #fff;
		background: radial-gradient(circle at top, #0f1115 0%, #05070a 100%);
	}

	.header {
		text-align: center;
		margin-bottom: 40px;
	}

	.header p {
		color: #888;
	}

	.hero {
		text-align: center;
		margin-bottom: 30px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 20px;
	}

	.card {
		background: rgba(255, 255, 255, 0.03);
		border: 3px solid #fff;
		backdrop-filter: blur(16px);
		border-radius: 22px;
		padding: 22px;
		transition: all 0.35s ease;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 22px;
		background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.08), transparent);
		opacity: 0;
		transition: 0.4s;
		z-index: -1;
	}

	.card:hover::before {
		opacity: 1;
	}

	.card:hover {
		transform: translateY(-8px) scale(1.02);
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
	}

	.card-icon {
		bottom: 1rem;
		color: #e6e6e6;
		opacity: .1;
		position: absolute;
		right: 1rem;
		transition: 0.3s;
	}

	.card-icon .icon {
		width: 66px;
		height: 66px;
	}

	.card-icon:hover {
		opacity: 1;
		transform: scale(1.2);
	}

	.contact {
		gap: 30px;
		margin-top: 40px;
		padding-top: 66px;
		padding-bottom: 66px;
		display: grid;
		grid-template-columns: repeat(3, 0fr);
		justify-items: center;
	}

	.icon {
		width: 50px;
		height: 50px;
		color: #aaa;
		transition: 0.3s;
	}

	.icon:hover {
		color: #fff;
		transform: scale(1.3) rotate(5deg);
	}

	h3 {
		position: absolute;
		margin: 0;
		font-size: small;
		left: 16px;
		top: 16px;
		color: #888;
	}

	p {
		font-size: 30px;
	}
</style>