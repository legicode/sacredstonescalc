const stats = ["HP", "ATK", "SKL", "SPD", "LCK", "DEF", "RES", "CON", "MOV"];
const statsfull = ["HP", "Attack", "Skill", "Speed", "Luck", "Defense", "Resistance", "Constitution", "Movement"];

const characters = ["Eirika", "Seth", "Franz", "Gilliam", "Vanessa", "Moulder", "Ross", "Garcia", "Neimi", "Colm", "Artur", "Lute", "Natasha", "Joshua", "Ephraim", "Forde", "Kyle", "Orson (5x)", 
	"Tana", "Amelia", "Amelia (late)", "Innes (Eir)", "Innes (Eph)", "Gerik", "Tethys", "Marisa", "LArachel", "Dozla", "Saleh (Eir)", "Saleh (Eph)", "Ewan", "Cormag (Eph)", "Cormag (Eir)", 
	"Rennac", "Duessel (Eph)", "Duessel (Eir)", "Knoll", "Myrrh", "Syrene", "Caellach", "Orson (CC)", "Riev", "Ismaire", "Selena", "Glen", "Hayden", "Valter", "Fado", "Lyon"];

const charGrowths = new Map([
	["Eirika", 			[70, 40, 60, 60, 60, 30, 30, 0, 0]],
	["Seth", 			[90, 50, 45, 45, 25, 40, 30, 0, 0]],
	["Franz", 			[80, 40, 40, 50, 40, 25, 20, 0, 0]],
	["Gilliam", 		[90, 45, 35, 30, 30, 55, 20, 0, 0]],
	["Vanessa", 		[50, 35, 55, 60, 50, 20, 30, 0, 0]],
	["Moulder",			[70, 40, 50, 40, 20, 25, 25, 0, 0]],
	["Ross", 			[70, 50, 35, 30, 40, 25, 20, 0, 0]],
	["Garcia", 			[80, 65, 40, 20, 40, 25, 15, 0, 0]],
	["Neimi", 			[55, 45, 50, 60, 50, 15, 35, 0, 0]],
	["Colm", 			[75, 40, 40, 65, 45, 25, 20, 0, 0]],
	["Artur", 			[55, 50, 50, 40, 25, 15, 55, 0, 0]],
	["Lute", 			[45, 65, 30, 45, 45, 15, 40, 0, 0]],
	["Natasha", 		[50, 60, 25, 40, 60, 15, 55, 0, 0]],
	["Joshua", 			[80, 35, 55, 55, 30, 20, 20, 0, 0]],
	["Ephraim", 		[80, 55, 55, 45, 50, 35, 25, 0, 0]],
	["Forde", 			[85, 40, 50, 45, 35, 20, 25, 0, 0]],
	["Kyle", 			[90, 50, 40, 40, 20, 25, 20, 0, 0]],
	["Orson (5x)", 		[80, 55, 45, 40, 25, 45, 30, 0, 0]],
	["Tana", 			[65, 45, 40, 65, 60, 20, 25, 0, 0]],
	["Amelia", 			[60, 35, 40, 40, 50, 30, 15, 0, 0]],
	["Amelia (late)", 	[60, 35, 40, 40, 50, 30, 15, 0, 0]],
	["Innes (Eir)", 	[75, 40, 40, 45, 45, 20, 25, 0, 0]],
	["Innes (Eph)", 	[75, 40, 40, 45, 45, 20, 25, 0, 0]],
	["Gerik", 			[90, 45, 40, 30, 30, 35, 25, 0, 0]],
	["Tethys", 			[85,  5, 10, 70, 80, 30, 75, 0, 0]],
	["Marisa", 			[75, 30, 55, 60, 50, 15, 25, 0, 0]],
	["LArachel", 		[45, 50, 45, 45, 65, 15, 50, 0, 0]],
	["Dozla", 			[85, 50, 35, 40, 30, 30, 25, 0, 0]],
	["Saleh (Eir)", 	[50, 30, 25, 40, 40, 30, 35, 0, 0]],
	["Saleh (Eph)", 	[50, 30, 25, 40, 40, 30, 35, 0, 0]],
	["Ewan", 			[50, 45, 40, 35, 50, 15, 40, 0, 0]],
	["Cormag (Eph)", 	[85, 55, 40, 45, 35, 25, 15, 0, 0]],
	["Cormag (Eir)", 	[85, 55, 40, 45, 35, 25, 15, 0, 0]],
	["Rennac", 			[65, 25, 45, 60, 25, 25, 30, 0, 0]],
	["Duessel (Eph)", 	[85, 55, 40, 30, 20, 45, 30, 0, 0]],
	["Duessel (Eir)", 	[85, 55, 40, 30, 20, 45, 30, 0, 0]],
	["Knoll", 			[70, 50, 40, 35, 20, 10, 45, 0, 0]],
	["Myrrh", 			[130,90, 85, 65, 40, 150,30, 0, 0]],
	["Syrene", 			[70, 40, 50, 60, 30, 20, 50, 0, 0]],
	["Caellach", 		[85, 50, 45, 45, 20, 30, 20, 0, 0]],
	["Orson (CC)", 		[80, 55, 45, 40, 25, 45, 30, 0, 0]],
	["Riev", 			[75, 45, 50, 40, 15, 20, 45, 0, 0]],
	["Ismaire", 		[75, 30, 60, 55, 30, 20, 25, 0, 0]],
	["Selena", 			[85, 40, 55, 40, 25, 20, 30, 0, 0]],
	["Glen", 			[85, 45, 50, 45, 20, 35, 40, 0, 0]],
	["Hayden", 			[70, 40, 45, 45, 40, 25, 25, 0, 0]],
	["Valter", 			[80, 40, 55, 50, 15, 20, 20, 0, 0]],
	["Fado", 			[85, 55, 40, 30, 25, 45, 25, 0, 0]],
	["Lyon", 			[85, 50, 55, 55, 30, 45, 55, 0, 0]]
]);

const genders = new Map([
	["Eirika", 			"F"],
	["Seth", 			"M"],
	["Franz", 			"M"],
	["Gilliam", 		"M"],
	["Vanessa", 		"F"],
	["Moulder",			"M"],
	["Ross", 			"M"],
	["Garcia", 			"M"],
	["Neimi", 			"F"],
	["Colm", 			"M"],
	["Artur", 			"M"],
	["Lute", 			"F"],
	["Natasha", 		"F"],
	["Joshua", 			"M"],
	["Ephraim", 		"M"],
	["Forde", 			"M"],
	["Kyle", 			"M"],
	["Orson (5x)",		"M"],
	["Tana", 			"F"],
	["Amelia", 			"F"],
	["Amelia (late)", 	"F"],
	["Innes (Eir)", 	"M"],
	["Innes (Eph)", 	"M"],
	["Gerik", 			"M"],
	["Tethys", 			"F"],
	["Marisa", 			"F"],
	["LArachel", 		"F"],
	["Dozla", 			"M"],
	["Saleh (Eir)", 	"M"],
	["Saleh (Eph)", 	"M"],
	["Ewan", 			"M"],
	["Cormag (Eph)", 	"M"],
	["Cormag (Eir)", 	"M"],
	["Rennac", 			"M"],
	["Duessel (Eph)", 	"M"],
	["Duessel (Eir)", 	"M"],
	["Knoll", 			"M"],
	["Myrrh", 			"F"],
	["Syrene", 			"F"],
	["Caellach", 		"M"],
	["Orson (CC)",		"M"],
	["Riev", 			"M"],
	["Ismaire", 		"F"],
	["Selena", 			"F"],
	["Glen", 			"M"],
	["Hayden", 			"M"],
	["Valter", 			"M"],
	["Fado", 			"M"],
	["Lyon", 			"M"]
]);

const promotions = new Map([
	["Eirika", 			"N"],
	["Seth", 			"P"],
	["Franz", 			"N"],
	["Gilliam", 		"N"],
	["Vanessa", 		"N"],
	["Moulder",			"N"],
	["Ross", 			"T"],
	["Garcia", 			"N"],
	["Neimi", 			"N"],
	["Colm", 			"N"],
	["Artur", 			"N"],
	["Lute", 			"N"],
	["Natasha", 		"N"],
	["Joshua", 			"N"],
	["Ephraim", 		"N"],
	["Forde", 			"N"],
	["Kyle", 			"N"],
	["Orson (5x)", 		"P"],
	["Tana", 			"N"],
	["Amelia", 			"T"],
	["Amelia (late)", 	"T"],
	["Innes (Eir)", 	"P"],
	["Innes (Eph)", 	"P"],
	["Gerik", 			"N"],
	["Tethys", 			"D"],
	["Marisa", 			"N"],
	["LArachel", 		"N"],
	["Dozla", 			"P"],
	["Saleh (Eir)", 	"P"],
	["Saleh (Eph)", 	"P"],
	["Ewan", 			"T"],
	["Cormag (Eph)", 	"N"],
	["Cormag (Eir)", 	"N"],
	["Rennac", 			"P"],
	["Duessel (Eph)", 	"P"],
	["Duessel (Eir)", 	"P"],
	["Knoll", 			"N"],
	["Myrrh", 			"M"],
	["Syrene", 			"P"],
	["Caellach", 		"P"],
	["Orson (CC)",		"P"],
	["Riev", 			"P"],
	["Ismaire", 		"P"],
	["Selena", 			"P"],
	["Glen", 			"P"],
	["Hayden", 			"P"],
	["Valter", 			"P"],
	["Fado", 			"P"],
	["Lyon", 			"P"]
]);

const charBases = new Map([
	["Eirika", 			[ 1, 16,  4,  8,  9,  5,  3,  1,  5, 5]],
	["Seth", 			[ 1, 20, 14, 13, 12, 13, 11,  8, 11, 8]],
	["Franz", 			[ 1, 20,  7,  5,  7,  2,  6,  1,  9, 7]],
	["Gilliam", 		[ 4, 25,  9,  6,  3,  3,  9,  3, 14, 4]],
	["Vanessa",			[ 1, 17,  5,  7, 11,  4,  6,  5,  5, 7]],
	["Moulder", 		[ 1, 20,  4,  6,  9,  1,  2,  5,  9, 5]],
	["Ross", 			[ 1, 15,  5,  2,  3,  8,  3,  0,  8, 4]],
	["Garcia", 			[ 4, 28,  8,  7,  7,  3,  5,  1, 14, 5]],
	["Neimi", 			[ 1, 17,  4,  5,  6,  4,  3,  2,  5, 5]],
	["Colm", 			[ 2, 18,  4,  4, 10,  8,  3,  1,  6, 6]],
	["Artur", 			[ 2, 19,  6,  6,  8,  2,  2,  6,  6, 5]],
	["Lute", 			[ 1, 17,  6,  6,  7,  8,  3,  5,  3, 5]],
	["Natasha", 		[ 1, 18,  2,  4,  8,  6,  2,  6,  4, 5]],
	["Joshua", 			[ 5, 24,  8, 13, 14,  7,  5,  2,  8, 5]],
	["Ephraim", 		[ 4, 23,  8,  9, 11,  8,  7,  2,  8, 5]],
	["Forde", 			[ 6, 24,  7,  8,  8,  7,  8,  2,  8, 7]],
	["Kyle", 			[ 5, 25,  9,  6,  7,  6,  9,  1,  9, 7]],
	["Orson (5x)", 		[ 3, 34, 15, 13, 11,  4, 13,  7, 12, 8]],
	["Tana", 			[ 4, 20,  7,  9, 13,  8,  6,  7,  5, 7]],
	["Amelia", 			[ 1, 16,  4,  3,  4,  6,  2,  3,  6, 4]],
	["Amelia (late)", 	[ 4, 18,  5,  4,  5,  8,  3,  3,  6, 4]],
	["Innes (Eir)", 	[ 1, 31, 14, 13, 15, 14, 10,  9,  9, 6]],
	["Innes (Eph)", 	[ 3, 33, 15, 14, 16, 15, 10, 10,  9, 6]],
	["Gerik", 			[10, 32, 14, 13, 13,  8, 10,  4, 13, 5]],
	["Tethys", 			[ 1, 18,  1,  2, 12, 10,  5,  4,  5, 5]],
	["Marisa", 			[ 5, 23,  7, 12, 13,  9,  4,  3,  5, 5]],
	["LArachel", 		[ 3, 18,  6,  6, 10, 12,  5,  8,  5, 6]],
	["Dozla", 			[ 1, 43, 16, 11,  9,  4, 11,  6, 16, 6]],
	["Saleh (Eir)", 	[ 1, 30, 16, 18, 14, 11,  8, 13,  8, 6]],
	["Saleh (Eph)", 	[ 4, 32, 17, 19, 15, 12,  9, 14,  8, 6]],
	["Ewan", 			[ 1, 15,  3,  2,  5,  5,  0,  3,  5, 4]],
	["Cormag (Eph)", 	[ 9, 30, 14,  9, 10,  4, 12,  2, 11, 7]],
	["Cormag (Eir)", 	[11, 32, 15, 10, 11,  5, 13,  2, 11, 7]],
	["Rennac", 			[ 1, 28, 10, 16, 17,  5,  9, 11,  7, 6]],
	["Duessel (Eph)", 	[ 8, 41, 17, 12, 12,  8, 17,  9, 15, 6]],
	["Duessel (Eir)", 	[10, 43, 18, 13, 13,  8, 18, 10, 15, 6]],
	["Knoll", 			[10, 22, 13,  9,  8,  0,  2, 10,  7, 5]],
	["Myrrh", 			[ 1, 15,  3,  1,  5,  3,  2,  7,  5, 6]],
	["Syrene", 			[ 1, 27, 12, 13, 15, 12, 10, 12,  7, 8]],
	["Caellach", 		[12, 47, 19, 14, 13, 14, 15, 13, 13, 6]],
	["Orson (CC)", 		[13, 48, 18, 15, 14,  6, 14, 11, 12, 8]],
	["Riev", 			[16, 49, 14, 21, 19,  9, 16, 18,  7, 6]],
	["Ismaire", 		[ 9, 33, 16, 20, 23, 12,  8, 15,  7, 6]],
	["Selena", 			[11, 38, 13, 13, 16, 10, 11, 17,  6, 7]],
	["Glen", 			[12, 46, 20, 17, 13,  7, 18,  5, 12, 8]],
	["Hayden", 			[10, 37, 17, 14, 15, 17, 12, 12, 10, 7]],
	["Valter", 			[13, 45, 19, 17, 17,  3, 13, 12, 11, 8]],
	["Fado", 			[11, 46, 20, 14, 12,  5, 18, 11, 18, 5]],
	["Lyon", 			[14, 44, 22, 13, 11,  4, 17, 19,  7, 6]]
]);

const classCaps = new Map([
	["Unpromoted",			[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Dancer (F)",			[60, 10, 10, 30, 30, 24, 26, 20, 15]],
	["Great Lord (F)",		[60, 24, 28, 30, 30, 22, 25, 25, 15]],
	["Great Lord (M)",		[60, 27, 26, 24, 30, 23, 23, 25, 15]],
	["Swordmaster (M)",		[60, 24, 29, 30, 30, 22, 23, 20, 15]],
	["Swordmaster (F)",		[60, 22, 29, 30, 30, 22, 25, 20, 15]],
	["Assassin (M)",		[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Assassin (F)",		[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Rogue (M)",			[60, 20, 30, 30, 30, 20, 20, 20, 15]],
	["Berserker (M)",		[60, 30, 29, 28, 30, 23, 21, 25, 15]],
	["Warrior (M)",			[60, 30, 28, 26, 30, 26, 22, 25, 15]],
	["Hero (M)",			[60, 25, 30, 26, 30, 25, 22, 25, 15]],
	["Hero (F)",			[60, 24, 30, 26, 30, 24, 24, 25, 15]],
	["Ranger (M)",			[60, 25, 28, 30, 30, 25, 23, 25, 15]],
	["Ranger (F)",			[60, 23, 28, 30, 30, 22, 25, 25, 15]],
	["Sniper (M)",			[60, 25, 30, 28, 30, 25, 23, 20, 15]],
	["Sniper (F)",			[60, 24, 30, 29, 30, 24, 24, 20, 15]],
	["General (M)",			[60, 29, 27, 24, 30, 30, 25, 25, 15]],
	["General (F)",			[60, 27, 28, 25, 30, 29, 26, 25, 15]],
	["Great Knight (M)",	[60, 28, 24, 24, 30, 29, 25, 25, 15]],
	["Great Knight (F)",	[60, 26, 26, 25, 30, 28, 26, 25, 15]],
	["Paladin (M)",			[60, 25, 26, 24, 30, 25, 25, 25, 15]],
	["Paladin (F)",			[60, 23, 27, 25, 30, 24, 26, 25, 15]],
	["Falcoknight (F)",		[60, 23, 25, 28, 30, 23, 26, 25, 15]],
	["Wyvern Knight (M)", 	[60, 25, 26, 28, 30, 24, 22, 25, 15]],
	["Wyvern Knight (F)", 	[60, 24, 25, 29, 30, 23, 23, 25, 15]],
	["Wyvern Lord (M)",		[60, 27, 25, 23, 30, 28, 22, 25, 15]],
	["Wyvern Lord (F)",		[60, 25, 26, 24, 30, 27, 23, 25, 15]],
	["Sage (M)",			[60, 28, 30, 26, 30, 21, 25, 20, 15]],
	["Sage (F)",			[60, 30, 28, 26, 30, 21, 25, 20, 15]],
	["Bishop (M)",			[60, 25, 26, 24, 30, 22, 30, 20, 15]],
	["Bishop (F)",			[60, 25, 25, 26, 30, 21, 30, 20, 15]],
	["Mage Knight (M)",		[60, 25, 26, 25, 30, 25, 25, 25, 15]],
	["Mage Knight (F)",		[60, 25, 24, 25, 30, 24, 28, 25, 15]],
	["Valkyrie (F)",		[60, 25, 24, 25, 30, 24, 28, 25, 15]],
	["Druid (M)",			[60, 29, 26, 26, 30, 21, 28, 20, 15]],
	["Druid (F)",			[60, 29, 26, 26, 30, 20, 29, 20, 15]],
	["Summoner (M)",		[60, 27, 27, 26, 30, 30, 28, 20, 15]],
	["Summoner (F)",		[60, 27, 27, 26, 30, 20, 28, 20, 15]],
	["Manakete (F)",		[60, 20, 20, 20, 30, 20, 20, 20, 15]],
	["Manakete (M)",		[60, 20, 20, 20, 30, 20, 20, 25, 15]],
	["Jrnymn 3 (M)",		[60, 26, 29, 28, 30, 23, 23, 20, 15]],
	["Recruit 3 (F)",		[60, 23, 30, 29, 30, 22, 26, 20, 15]],
	["Pupil 3 (M)",			[60, 29, 28, 27, 30, 21, 26, 20, 15]],
	["Necromancer (M)",		[60, 30, 25, 25, 30, 30, 30, 25, 15]]
])

const promotionGains = new Map([
	["Lord → Great Lord (F)",				[4, 2, 2, 1, 0, 3, 5, 2, 2]],
	["Lord → Great Lord (M)",				[4, 2, 3, 2, 0, 2, 5, 2, 2]],
	["Myrmidon → Swordmaster (M)",			[5, 2, 0, 0, 0, 2, 1, 1, 1]],
	["Myrmidon → Swordmaster (F)",			[4, 2, 1, 0, 0, 2, 1, 2, 1]],
	["Myrmidon → Assassin (M)",				[3, 1, 0, 0, 0, 2, 2, 0, 1]],
	["Myrmidon → Assassin (F)",				[2, 1, 1, 1, 0, 2, 1, 1, 1]],
	["Thief → Assassin (M)",				[3, 1, 0, 0, 0, 2, 2, 2, 0]],
	["Thief → Rogue (M)",					[2, 1, 1, 0, 0, 2, 2, 1, 0]],
	["Pirate → Berserker (M)",				[4, 1, 1, 1, 0, 2, 2, 3, 1]],
	["Pirate → Warrior (M)",				[3, 1, 2, 0, 0, 3, 3, 3, 1]],
	["Fighter → Warrior (M)",				[3, 1, 2, 0, 0, 3, 3, 2, 1]],
	["Fighter → Hero (M)",					[4, 1, 2, 2, 0, 2, 2, 0, 1]],
	["Mercenary → Hero (M)",				[4, 1, 2, 2, 0, 2, 2, 2, 1]],
	["Mercenary → Ranger (M)",				[3, 2, 1, 1, 0, 3, 3, 0, 2]],
	["Archer → Ranger (M)",					[3, 2, 1, 1, 0, 3, 3, 2, 2]],
	["Archer → Ranger (F)",					[2, 2, 2, 1, 0, 3, 3, 3, 2]],
	["Archer → Sniper (M)",					[3, 1, 2, 2, 0, 2, 3, 1, 1]],
	["Archer → Sniper (F)",					[4, 3, 1, 1, 0, 2, 2, 1, 1]],
	["Knight → General (M)",				[4, 2, 2, 3, 0, 2, 3, 2, 1]],
	["Knight → General (F)",				[3, 2, 3, 2, 0, 3, 3, 1, 1]],
	["Knight → Great Knight (M)",			[3, 2, 1, 2, 0, 2, 1, 0, 2]],
	["Knight → Great Knight (F)",			[3, 1, 1, 2, 0, 2, 2, 0, 2]],
	["Cavalier → Great Knight (M)",			[3, 2, 1, 2, 0, 2, 1, 4,-1]],
	["Cavalier → Great Knight (F)",			[3, 1, 1, 2, 0, 2, 2, 1,-1]],
	["Cavalier → Paladin (M)",				[2, 1, 1, 1, 0, 2, 1, 2, 1]],
	["Cavalier → Paladin (F)",				[1, 1, 1, 2, 0, 1, 2, 0, 1]],
	["Pegasus Knight → Falcoknight (F)",	[5, 2, 0, 2, 0, 2, 2, 1, 1]],
	["Pegasus Knight → Wyvern Knight (F)", 	[3, 2, 1, 2, 0, 1, 1, 4, 1]],
	["Wyvern Rider → Wyvern Knight (M)", 	[3, 1, 2, 3, 0, 0, 1, 0, 1]],
	["Wyvern Rider → Wyvern Lord (M)",		[4, 2, 2, 0, 0, 2, 0, 1, 1]],
	["Monk → Mage Knight (M)",				[4, 2, 0, 0, 0, 2, 2, 2, 2]],
	["Mage → Mage Knight (F)",				[3, 2, 1, 0, 0, 2, 2, 3, 2]],
	["Mage → Sage (M)",						[4, 1, 0, 0, 0, 3, 3, 1, 1]],
	["Mage → Sage (F)",						[3, 1, 1, 0, 0, 3, 3, 1, 1]],
	["Monk → Sage (M)",						[4, 1, 0, 0, 0, 3, 3, 1, 1]],
	["Priest → Sage (M)",					[4, 1, 0, 0, 0, 3, 3, 2, 1]],
	["Monk → Bishop (M)",					[3, 2, 1, 0, 0, 3, 2, 1, 1]],
	["Priest → Bishop (M)",					[3, 2, 1, 0, 0, 3, 2, 2, 1]],
	["Cleric → Bishop (F)",					[3, 1, 2, 1, 0, 2, 2, 1, 1]],
	["Cleric → Valkyrie (F)",				[3, 2, 1, 0, 0, 2, 3, 2, 2]],
	["Troubador → Valkyrie (F)",			[3, 2, 1, 0, 0, 2, 3, 1, 1]],
	["Troubador → Mage Knight (F)",			[3, 2, 1, 0, 0, 2, 2, 1, 1]],
	["Shaman → Druid (M)",					[4, 0, 0, 3, 0, 2, 2, 1, 1]],
	["Shaman → Summoner (M)",				[3, 0, 1, 3, 0, 1, 3, 1, 1]],
	["Jrnymn → Fighter (M)",				[2, 2, 1, 0, 0, 0, 1, 3, 1]],
	["Jrnymn → Pirate (M)",					[2, 2, 0, 1, 0, 1, 0, 2, 1]],
	["Recruit → Cavalier (F)",				[1, 0, 2, 2, 0, 0, 2, 3, 3]],
	["Recruit → Knight (F)",				[2, 1, 1, 1, 0, 2, 0, 4, 0]],
	["Pupil → Mage (M)",					[1, 0, 1, 2, 0, 1, 2, 1, 1]],
	["Pupil → Shaman (M)",					[1, 2, 0, 1, 0, 1, 2, 2, 1]],
	["Jrnymn → Jrnymn 2 (M)",				[2, 0, 2, 0, 0, 2, 2, 0, 1]],
	["Recruit → Recruit 2 (F)",				[2, 1, 1, 1, 0, 2, 1, 0, 1]],
	["Pupil → Pupil 2 (M)",					[2, 1, 1, 0, 0, 2, 2, 0, 1]],
	["Jrnymn 2 → Hero (M)",					[4, 1, 2, 2, 0, 2, 2, 3, 1]],
	["Recruit 2 → Paladin (F)",				[1, 1, 1, 2, 0, 1, 2, 3, 3]],
	["Pupil 2 → Sage (M)",					[4, 1, 0, 0, 0, 3, 3, 2, 1]],
	["Jrnymn 2 → Jrnymn 3 (M)",				[4, 1, 2, 2, 0, 2, 2, 0, 1]],
	["Recruit 2 → Recruit 3 (F)",			[2, 2, 1, 1, 0, 2, 1, 0, 1]],
	["Pupil 2 → Pupil 3 (M)",				[4, 2, 0, 1, 0, 3, 3, 0, 1]]
])

const baseClasses = new Map([
	["Eirika", 			"Lord"],
	["Seth", 			"Paladin"],
	["Franz", 			"Cavalier"],
	["Gilliam", 		"Knight"],
	["Vanessa", 		"Pegasus Knight"],
	["Moulder",			"Priest"],
	["Ross", 			"Jrnymn"],
	["Garcia", 			"Fighter"],
	["Neimi", 			"Archer"],
	["Colm", 			"Thief"],
	["Artur", 			"Monk"],
	["Lute", 			"Mage"],
	["Natasha", 		"Cleric"],
	["Joshua", 			"Myrmidon"],
	["Ephraim", 		"Lord"],
	["Forde", 			"Cavalier"],
	["Kyle", 			"Cavalier"],
	["Orson (5x)", 		"Paladin"],
	["Tana", 			"Pegasus Knight"],
	["Amelia", 			"Recruit"],
	["Amelia (late)", 	"Recruit"],
	["Innes (Eir)", 	"Sniper"],
	["Innes (Eph)", 	"Sniper"],
	["Gerik", 			"Mercenary"],
	["Tethys", 			"Dancer"],
	["Marisa", 			"Myrmidon"],
	["LArachel", 		"Troubador"],
	["Dozla", 			"Berserker"],
	["Saleh (Eir)", 	"Sage"],
	["Saleh (Eph)", 	"Sage"],
	["Ewan", 			"Pupil"],
	["Cormag (Eph)", 	"Wyvern Rider"],
	["Cormag (Eir)", 	"Wyvern Rider"],
	["Rennac", 			"Rouge"],
	["Duessel (Eph)", 	"Great Knight"],
	["Duessel (Eir)", 	"Great Knight"],
	["Knoll", 			"Shaman"],
	["Myrrh", 			"Manakete"],
	["Syrene", 			"Falcoknight"],
	["Caellach", 		"Hero"],
	["Orson (CC)",		"Paladin"],
	["Riev", 			"Bishop"],
	["Ismaire", 		"Swordmaster"],
	["Selena", 			"Mage Knight"],
	["Glen", 			"Wyvern Lord"],
	["Hayden", 			"Ranger"],
	["Valter", 			"Wyvern Knight"],
	["Fado", 			"General"],
	["Lyon", 			"Necromancer"]
]);

const classPromotions = new Map([
	["Eirika", 			["Great Lord"]],
	["Seth", 			["Paladin"]],
	["Franz", 			["Paladin", "Great Knight"]],
	["Gilliam", 		["General", "Great Knight"]],
	["Vanessa",			["Wyvern Knight", "Falcoknight"]],
	["Moulder", 		["Bishop", "Sage"]],
	["Ross", 			["Fighter → Hero", "Fighter → Warrior", "Pirate → Warrior", "Pirate → Berserker", "Jrnymn 2 → Hero", "Jrnymn 2 → Jrnymn 3"]],
	["Garcia", 			["Warrior", "Hero"]],
	["Neimi", 			["Ranger", "Sniper"]],
	["Colm", 			["Rogue", "Assassin"]],
	["Artur", 			["Bishop", "Sage"]],
	["Lute", 			["Sage", "Mage Knight"]],
	["Natasha", 		["Bishop", "Valkyrie"]],
	["Joshua", 			["Swordmaster", "Assassin"]],
	["Ephraim", 		["Great Lord"]],
	["Forde", 			["Paladin", "Great Knight"]],
	["Kyle", 			["Great Knight", "Paladin"]],
	["Orson (5x)", 		["Paladin"]],
	["Tana", 			["Falcoknight", "Wyvern Knight"]],
	["Amelia", 			["Cavalier → Paladin", "Cavalier → Great Knight", "Knight → Great Knight", "Knight → General", "Recruit 2 → Paladin", "Recruit 2 → Recruit 3"]],
	["Amelia (late)", 	["Cavalier → Paladin", "Cavalier → Great Knight", "Knight → Great Knight", "Knight → General", "Recruit 2 → Paladin", "Recruit 2 → Recruit 3"]],
	["Innes (Eir)", 	["Sniper"]],
	["Innes (Eph)", 	["Sniper"]],
	["Gerik", 			["Hero", "Ranger"]],
	["Tethys", 			["Dancer"]],
	["Marisa", 			["Swordmaster", "Assassin"]],
	["LArachel", 		["Valkyrie", "Mage Knight"]],
	["Dozla", 			["Berserker"]],
	["Saleh (Eir)", 	["Sage"]],
	["Saleh (Eph)", 	["Sage"]],
	["Ewan", 			["Mage → Sage", "Mage → Mage Knight", "Shaman → Druid", "Shaman → Summoner", "Pupil 2 → Sage", "Pupil 2 → Pupil 3"]],
	["Cormag (Eph)", 	["Wyvern Knight", "Wyvern Lord"]],
	["Cormag (Eir)", 	["Wyvern Knight", "Wyvern Lord"]],
	["Rennac", 			["Rogue"]],
	["Duessel (Eph)", 	["Great Knight"]],
	["Duessel (Eir)", 	["Great Knight"]],
	["Knoll", 			["Summoner", "Druid"]],
	["Myrrh", 			["Manakete"]],
	["Syrene", 			["Falcoknight"]],
	["Caellach", 		["Hero"]],
	["Orson (CC)", 		["Paladin"]],
	["Riev", 			["Bishop"]],
	["Ismaire", 		["Swordmaster"]],
	["Selena", 			["Mage Knight"]],
	["Glen", 			["Wyvern Lord"]],
	["Hayden", 			["Ranger"]],
	["Valter", 			["Wyvern Knight"]],
	["Fado", 			["General"]],
	["Lyon", 			["Necromancer"]]
]);

function updateHit(){
	trueHitRate = ((displayedHit.value * (2 * displayedHit.value + 1) - (Math.abs(displayedHit.value - 50.5) / (displayedHit.value - 50.5) + 1) * ((displayedHit.value - 50) * (2 * displayedHit.value - 99))) / 100).toString() + "%";
	spaces = 1.75*(6 - trueHitRate.length);
	if (displayedHit.value == 100){
		spaces -= 1;
	}
	for (let i = 0; i < spaces; i++){
		trueHitRate += "&nbsp";
	}
	trueHit.innerHTML = trueHitRate;
}

function updateEXP(){
	let playerPower = 3;
	if (playerType.selectedIndex == 2){
		playerPower = 2;
	}
	else if (playerType.selectedIndex == 4){
		playerPower = 1;
	}
	let expGain = Math.max(Math.floor((31 + enemyLevel.value * 1 - playerLevel.value * 1) / (playerPower)), 1);
	if (killEXP.checked){
		let playerBonus = 0;
		if (playerType.selectedIndex == 1){
			playerBonus = 60;
		}
		else if (playerType.selectedIndex == 3 || playerType.selectedIndex == 5){
			playerBonus = 40;
		}
		let enemyPower = 3;
		let enemyBonus = 0;
		let thiefEXP = 0;
		let entombedEXP = 0;
		if (enemyType.selectedIndex == 1){
			enemyBonus = 60;
		}
		else if (enemyType.selectedIndex == 2){
			enemyPower = 2;
			thiefEXP = 20;
		}
		else if (enemyType.selectedIndex == 3){
			enemyBonus = 40;
			thiefEXP = 20;
		}
		else if (enemyType.selectedIndex == 4){
			enemyPower = 2;
		}
		else if (enemyType.selectedIndex == 5){
			enemyBonus = 40;
		}
		else if (enemyType.selectedIndex == 6){
			enemyPower = 1;
			entombedEXP = 40;
		}
		else if (enemyType.selectedIndex == 7){
			enemyPower = 5;
			bossEXP.checked = true;
			chapterEXP.checked = false;
			enemyLevel.selectedIndex = 0;
		}
		let mode = chapterEXP.checked * 1 + 1;
		if (mode == 1){
			if (enemyLevel.value * enemyPower + enemyBonus <= playerLevel.vaule * playerPower + playerBonus){
				mode = 2;
			}
		}
		expGain += Math.max(Math.floor((silencerEXP.checked * 1 + 1) * ((enemyLevel.value * enemyPower + enemyBonus) - ((playerLevel.value * playerPower + playerBonus) / mode) + 20 + thiefEXP + entombedEXP + bossEXP.checked * 40)), 0);
		expGain = Math.min(expGain, 100);
	}
	exp.innerHTML = expGain + " EXP";
}

function updateCharacter(){
	char = character.value;
	if (char.includes("'")){
		char = char.replaceAll("'", "")
	}
	while (promotionClass.length > 0){
		promotionClass.remove(0);
	}
	for (let i = 0; i < classPromotions.get(char).length; i++){
		promotionClass[i] = new Option(classPromotions.get(char)[i]);
	}
	updateTable();
}

function updateTable(){
	char = character.value;
	if (char.includes("'")){
		char = char.replaceAll("'", "")
	}
	var growthsTable = document.getElementById("growthsTable");
	while (growthsTable.rows.length > 2){
		growthsTable.deleteRow(1);
	}
	if (growthsMode.selectedIndex == 0){
		capFormat = "b";
	}
	else{
		capFormat = "u";
	}
	row = growthsTable.insertRow(1);
	level = row.insertCell(0).innerHTML = "<b>Base stats</b>";
	hp = row.insertCell(1).innerHTML = "<span id=\"BaseHP\"></span>";
	atk = row.insertCell(2).innerHTML = "<span id=\"BaseATK\"></span>";
	skl = row.insertCell(3).innerHTML = "<span id=\"BaseSKL\"></span>";
	spd = row.insertCell(4).innerHTML = "<span id=\"BaseSPD\"></span>";
	lck = row.insertCell(5).innerHTML = "<span id=\"BaseLCK\"></span>";
	def = row.insertCell(6).innerHTML = "<span id=\"BaseDEF\"></span>";
	res = row.insertCell(7).innerHTML = "<span id=\"BaseRES\"></span>";
	con = row.insertCell(8).innerHTML = "<span id=\"BaseCON\"></span>";
	mov = row.insertCell(9).innerHTML = "<span id=\"BaseMOV\"></span>";
	for (let i = 0; i < 9; i++){
		this["Base"+(stats[i])].innerHTML = charBases.get(char)[i+1];
	}
	currentHP = charBases.get(char)[1];
	currentATK = charBases.get(char)[2];
	currentSKL = charBases.get(char)[3];
	currentSPD = charBases.get(char)[4];
	currentLCK = charBases.get(char)[5];
	currentDEF = charBases.get(char)[6];
	currentRES = charBases.get(char)[7];
	currentCON = charBases.get(char)[8];
	currentMOV = charBases.get(char)[9];
	if (promotions.get(char) == "T"){
		for (let i = charBases.get(char)[0]-1; i < 9; i++){
			row = growthsTable.insertRow(growthsTable.rows.length - 1);
			let level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
			let hp = row.insertCell(1).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"HP\"></span>";
			let atk = row.insertCell(2).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"ATK\"></span>";
			let skl = row.insertCell(3).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"SKL\"></span>";
			let spd = row.insertCell(4).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"SPD\"></span>";
			let lck = row.insertCell(5).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"LCK\"></span>";
			let def = row.insertCell(6).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"DEF\"></span>";
			let res = row.insertCell(7).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"RES\"></span>";
			let con = row.insertCell(8).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"CON\"></span>";
			let mov = row.insertCell(9).innerHTML = "<span id=\"Tlevel"+(i+2).toString()+"MOV\"></span>";
			for (let j = 0; j < 9; j++){
				let statIncrease = 0;
				if (this["current"+stats[j]] < classCaps.get("Unpromoted")[j]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = charGrowths.get(char)[j] / 100;
						statIncrease = Math.round(statIncrease * 100) / 100;
					}
					else {
						statIncrease = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
					}
					if (this["current"+stats[j]] + statIncrease > classCaps.get("Unpromoted")[j]){
						statIncrease = classCaps.get("Unpromoted")[j] - this["current"+stats[j]];
					}
				}
				this["current"+stats[j]] += statIncrease;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				this["Tlevel"+(i+2).toString()+stats[j]].innerHTML = this["current"+stats[j]];
				if (this["current"+stats[j]] >= classCaps.get("Unpromoted")[j]){
					this["Tlevel"+(i+2).toString()+stats[j]].innerHTML = "<"+capFormat+">" + this["Tlevel"+(i+2).toString()+stats[j]].innerHTML + "<"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["Tlevel"+(i+2).toString()+stats[j]].innerHTML = "<b>" + this["Tlevel"+(i+2).toString()+stats[j]].innerHTML + "<b>";
					}
					if (statIncrease >= 2){
						this["Tlevel"+(i+2).toString()+stats[j]].innerHTML = "<i>" + this["Tlevel"+(i+2).toString()+stats[j]].innerHTML + "<i>";
					}
				}
			}
		}
		let promotion = baseClasses.get(char) + " → " + promotionClass.value.split(" → ")[0] + " (" + genders.get(char)+")";
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		currentHP += promotionGains.get(promotion)[0];
		currentATK += promotionGains.get(promotion)[1];
		currentSKL += promotionGains.get(promotion)[2];
		currentSPD += promotionGains.get(promotion)[3];
		currentLCK += promotionGains.get(promotion)[4];
		currentDEF += promotionGains.get(promotion)[5];
		currentRES += promotionGains.get(promotion)[6];
		currentCON += promotionGains.get(promotion)[7];
		currentMOV += promotionGains.get(promotion)[8];
		let level = row.insertCell(0).innerHTML = "<b>Promotion</b>";
		let hp = row.insertCell(1).innerHTML = "<"+capFormat+">"+Math.round(currentHP * 100) / 100+"</"+capFormat+">";
		let atk = row.insertCell(2).innerHTML = "<"+capFormat+">"+Math.round(currentATK * 100) / 100+"</"+capFormat+">";
		let skl = row.insertCell(3).innerHTML = "<"+capFormat+">"+Math.round(currentSKL * 100) / 100+"</"+capFormat+">";
		let spd = row.insertCell(4).innerHTML = "<"+capFormat+">"+Math.round(currentSPD * 100) / 100+"</"+capFormat+">";
		let lck = row.insertCell(5).innerHTML = "<"+capFormat+">"+Math.round(currentLCK * 100) / 100+"</"+capFormat+">";
		let def = row.insertCell(6).innerHTML = "<"+capFormat+">"+Math.round(currentDEF * 100) / 100+"</"+capFormat+">";
		let res = row.insertCell(7).innerHTML = "<"+capFormat+">"+Math.round(currentRES * 100) / 100+"</"+capFormat+">";
		let con = row.insertCell(8).innerHTML = "<"+capFormat+">"+Math.round(currentCON * 100) / 100+"</"+capFormat+">";
		let mov = row.insertCell(9).innerHTML = "<"+capFormat+">"+Math.round(currentMOV * 100) / 100+"</"+capFormat+">";
	}
	if (promotions.get(char) == "N" || promotions.get(char) == "T"){
		let baseLevel = charBases.get(char)[0];
		if (promotions.get(char) == "T"){
			baseLevel = 1;
		}
		for (let i = baseLevel-1; i < promotionLevel.value - 1; i++){
			row = growthsTable.insertRow(growthsTable.rows.length - 1);
			let level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
			let hp = row.insertCell(1).innerHTML = "<span id=\"level"+(i+2).toString()+"HP\"></span>";
			let atk = row.insertCell(2).innerHTML = "<span id=\"level"+(i+2).toString()+"ATK\"></span>";
			let skl = row.insertCell(3).innerHTML = "<span id=\"level"+(i+2).toString()+"SKL\"></span>";
			let spd = row.insertCell(4).innerHTML = "<span id=\"level"+(i+2).toString()+"SPD\"></span>";
			let lck = row.insertCell(5).innerHTML = "<span id=\"level"+(i+2).toString()+"LCK\"></span>";
			let def = row.insertCell(6).innerHTML = "<span id=\"level"+(i+2).toString()+"DEF\"></span>";
			let res = row.insertCell(7).innerHTML = "<span id=\"level"+(i+2).toString()+"RES\"></span>";
			let con = row.insertCell(8).innerHTML = "<span id=\"level"+(i+2).toString()+"CON\"></span>";
			let mov = row.insertCell(9).innerHTML = "<span id=\"level"+(i+2).toString()+"MOV\"></span>";
			for (let j = 0; j < 9; j++){
				let statIncrease = 0;
				if (this["current"+stats[j]] < classCaps.get("Unpromoted")[j]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = charGrowths.get(char)[j] / 100;
						statIncrease = Math.round(statIncrease * 100) / 100;
					}
					else {
						statIncrease = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
					}
					if (this["current"+stats[j]] + statIncrease > classCaps.get("Unpromoted")[j]){
						statIncrease = classCaps.get("Unpromoted")[j] - this["current"+stats[j]];
					}
				}
				this["current"+stats[j]] += statIncrease;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
				this["level"+(i+2).toString()+stats[j]].innerHTML = this["current"+stats[j]];
				if (this["current"+stats[j]] >= classCaps.get("Unpromoted")[j]){
					this["level"+(i+2).toString()+stats[j]].innerHTML = "<"+capFormat+">" + this["level"+(i+2).toString()+stats[j]].innerHTML + "<"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["level"+(i+2).toString()+stats[j]].innerHTML = "<b>" + this["level"+(i+2).toString()+stats[j]].innerHTML + "<b>";
					}
					if (statIncrease >= 2){
						this["level"+(i+2).toString()+stats[j]].innerHTML = "<i>" + this["level"+(i+2).toString()+stats[j]].innerHTML + "<i>";
					}
				}
			}
		}
		let promotion = promotionClass.value + " (" + genders.get(char)+")";
		if (promotions.get(char) != "T"){
			promotion = baseClasses.get(char) + " → " + promotion;
		}
		currentHP += promotionGains.get(promotion)[0];
		currentATK += promotionGains.get(promotion)[1];
		currentSKL += promotionGains.get(promotion)[2];
		currentSPD += promotionGains.get(promotion)[3];
		currentLCK += promotionGains.get(promotion)[4];
		currentDEF += promotionGains.get(promotion)[5];
		currentRES += promotionGains.get(promotion)[6];
		currentCON += promotionGains.get(promotion)[7];
		currentMOV += promotionGains.get(promotion)[8];
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		let level = row.insertCell(0).innerHTML = "<b>Promotion</b>";
		let hp = row.insertCell(1).innerHTML = "<"+capFormat+">"+Math.round(currentHP * 100) / 100+"</"+capFormat+">";
		let atk = row.insertCell(2).innerHTML = "<"+capFormat+">"+Math.round(currentATK * 100) / 100+"</"+capFormat+">";
		let skl = row.insertCell(3).innerHTML = "<"+capFormat+">"+Math.round(currentSKL * 100) / 100+"</"+capFormat+">";
		let spd = row.insertCell(4).innerHTML = "<"+capFormat+">"+Math.round(currentSPD * 100) / 100+"</"+capFormat+">";
		let lck = row.insertCell(5).innerHTML = "<"+capFormat+">"+Math.round(currentLCK * 100) / 100+"</"+capFormat+">";
		let def = row.insertCell(6).innerHTML = "<"+capFormat+">"+Math.round(currentDEF * 100) / 100+"</"+capFormat+">";
		let res = row.insertCell(7).innerHTML = "<"+capFormat+">"+Math.round(currentRES * 100) / 100+"</"+capFormat+">";
		let con = row.insertCell(8).innerHTML = "<"+capFormat+">"+Math.round(currentCON * 100) / 100+"</"+capFormat+">";
		let mov = row.insertCell(9).innerHTML = "<"+capFormat+">"+Math.round(currentMOV * 100) / 100+"</"+capFormat+">";
	}
	let baseLevel = 1;
	if (promotions.get(char) == "P"){
		baseLevel = charBases.get(char)[0];
	}
	for (let i = baseLevel-1; i < 19; i++){
		row = growthsTable.insertRow(growthsTable.rows.length - 1);
		let level = row.insertCell(0).innerHTML = (i+1).toString() + " → " + (i+2).toString();
		let hp = row.insertCell(1).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"HP\"></span>";
		let atk = row.insertCell(2).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"ATK\"></span>";
		let skl = row.insertCell(3).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SKL\"></span>";
		let spd = row.insertCell(4).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SPD\"></span>";
		let lck = row.insertCell(5).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"LCK\"></span>";
		let def = row.insertCell(6).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"DEF\"></span>";
		let res = row.insertCell(7).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"RES\"></span>";
		let con = row.insertCell(8).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"CON\"></span>";
		let mov = row.insertCell(9).innerHTML = "<span id=\"Plevel"+(i+2).toString()+"MOV\"></span>";
		let promotion = promotionClass.value + " (" + genders.get(char)+")";
		if (promotions.get(char) == "T"){
			promotion = promotion.split(" → ")[1];
		}
		for (let j = 0; j < 9; j++){
			let statIncrease = 0;
			if (this["current"+stats[j]] < classCaps.get(promotion)[j]){
				if (growthsMode.selectedIndex == 0){
					statIncrease = charGrowths.get(char)[j] / 100;
					statIncrease = Math.round(statIncrease * 100) / 100;
				}
				else {
					statIncrease = Math.round((i+1) * charGrowths.get(char)[j] / 100) - Math.round(i * charGrowths.get(char)[j] / 100);
				}
				if (this["current"+stats[j]] + statIncrease > classCaps.get(promotion)[j]){
					statIncrease = classCaps.get("Unpromoted")[j] - this["current"+stats[j]];
				}
			}
			this["current"+stats[j]] += statIncrease;
			this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
			this["Plevel"+(i+2).toString()+stats[j]].innerHTML = this["current"+stats[j]];
			if (this["current"+stats[j]] >= classCaps.get(promotion)[j]){
				this["Plevel"+(i+2).toString()+stats[j]].innerHTML = "<"+capFormat+">" + this["Plevel"+(i+2).toString()+stats[j]].innerHTML + "<"+capFormat+">";
			}
			if (growthsMode.selectedIndex == 1){
				if (statIncrease >= 1){
					this["Plevel"+(i+2).toString()+stats[j]].innerHTML = "<b>" + this["Plevel"+(i+2).toString()+stats[j]].innerHTML + "<b>";
				}
				if (statIncrease >= 2){
					this["Plevel"+(i+2).toString()+stats[j]].innerHTML = "<i>" + this["Plevel"+(i+2).toString()+stats[j]].innerHTML + "<i>";
				}
			}
		}
	}
}

var displayedHit = document.getElementById("displayedHit");
var trueHit = document.getElementById("trueHit");
for (let i = 0; i <= 100; i++){
	displayedHit[i] = new Option(100-i);
}
displayedHit.selectedIndex = 25;
updateHit();

var playerLevel = document.getElementById("playerLevel");
var enemyLevel = document.getElementById("enemyLevel");
var playerType = document.getElementById("playerType");
var enemyType = document.getElementById("enemyType");
var killEXP = document.getElementById("killEXP");
var chapterEXP = document.getElementById("chapterEXP");
var bossEXP = document.getElementById("bossEXP");
var silencerEXP = document.getElementById("silencerEXP");
var exp = document.getElementById("exp");
for (let i = 0; i < 40; i++){
	playerLevel[i] = new Option(40-i);
	enemyLevel[i] = new Option(40-i);
}
playerLevel.selectedIndex = 20;
enemyLevel.selectedIndex = 20;
playerType.selectedIndex = 0;
enemyType.selectedIndex = 0;
killEXP.checked = true;
chapterEXP.checked = false;
bossEXP.checked = false;
silencerEXP.checked = false;
updateEXP();

var capFormat = "b";
var character = document.getElementById("character");
var promotionLevel = document.getElementById("promotionLevel");
var promotionClass = document.getElementById("promotionClass");
var growthsMode = document.getElementById("growthsMode");
growthsMode.selectedIndex = 0;
for (let i = 0; i < characters.length; i++){
	if (characters[i] == "LArachel"){
		character[i] = new Option("L'Arachel");
	}
	else {
		character[i] = new Option(characters[i]);
	}
}
for (let i = 20; i >= 10; i--){
	promotionLevel[20-i] = new Option(i);
}
updateCharacter();