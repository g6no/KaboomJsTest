import kaboom from "kaboom"

const BLOCK_COLORS = ["red", "green", "yellow", "blue", "purple"];
const positions = [ [], [], [], []]

const k = kaboom({
    background: [ 0, 0, 255, ],
})

const screenWidth = width();
const screenHeight = height();

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("platfrom", "sprites/Platform.png")


const beans = [
	[
		k.pos(200, 80),
		k.sprite("bean"),
		k.area(),
		move(90, 200),
		offscreen({ destroy: true }),
		color(255, 0, 0),
		"bean",
	],
	[
		k.pos(450, 80),
		k.sprite("bean"),
		k.area(),
		move(90, 200),
		offscreen({ destroy: true }),
		color(0, 255, 0),
		"bean",
	],
	[
		k.pos(700, 80),
		k.sprite("bean"),
		k.area(),
		move(90, 200),
		offscreen({ destroy: true }),
		color(255, 255, 0),
		"bean",
	],
	[
		k.pos(950, 80),
		k.sprite("bean"),
		k.area(),
		move(90, 200),
		offscreen({ destroy: true }),
		color(0, 0, 255),
		"bean",
	], 
	[
		k.pos(1200, 80),
		k.sprite("bean"),
		k.area(),
		move(90, 200),
		offscreen({ destroy: true }),
		color(160, 32, 240),
		"bean",
	]
]

function spawnBean() {

	const rand_choice = randi(0, 5);

	// add tree obj
	add(beans[rand_choice]);

	// wait a random amount of time to spawn next tree
	wait(rand(0.5, 0.6), spawnBean);
}

scene("game", () => {
	spawnBean();
	platform1 = add([
		k.pos(185, 400),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform2 = add([
		k.pos(435, 400),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform3 = add([
		k.pos(685, 400),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform4 = add([
		k.pos(935, 400),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform5 = add([
		k.pos(1185, 400),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform1.onCollide("bean", () => {
		console.log("collide beans 1");
	});

	platform2.onCollide("bean", () => {
		console.log("collide beans 2");
	});


	platform3.onCollide("bean", () => {
		console.log("collide beans 3");
	});


	platform4.onCollide("bean", () => {
		console.log("collide beans 4");
	});


	platform5.onCollide("bean", () => {
		console.log("collide beans 5");
	});

	k.onCollide("bean", "platfrom", () => {
		console.log("collide");
	});
	onKeyPress("space", () => {
		console.log("space");
	});
});

go("game");
// loop(1, () => {
//     // add tree
// 	add([
// 		k.pos(200, 80),
// 		k.sprite("bean"),
// 		k.area(),
// 	])	
// });

// k.onClick(() => k.addKaboom(k.mousePos()))

	// for (let i = 0; i < 5; i++) {
	// 	const xPos = 185 + i * 250;
	// 	add([
	// 		k.pos(xPos, 400),
	// 		k.sprite("platfrom"),
	// 		k.area(),
	// 		"platform",
	// 	])
	// };