// 类型定义

export interface SocialLink {
	name : string
	url : string
	icon : string
}

export interface Config {
	name : string
	name_icon : string
	subtitle : string
	birth : string
	birth_icon : string
	motto : string
	motto_icon : string
	focus : string
	focus_icon : string
	music : string
	music_icon : string
	personality : string
	personality_icon : string
	skill : string
	skill_icon : string
	social : SocialLink[]
}