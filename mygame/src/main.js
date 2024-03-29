import kaboom from "kaboom"

const BLOCK_COLORS = ["red", "green", "yellow", "blue", "purple"];
const positions = [200, 450, 700, 950, 1200]

const k = kaboom({
    background: [ 0, 0, 255, ],
})

const screenWidth = width();
const screenHeight = height();

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("platfrom", "sprites/Platform.png")


const beans = [
	[
		pos(200, 80),
		sprite("bean"),
		area(),
		move(90, 200),
		// offscreen({ destroy: true }),
		color(255, 0, 0),
		"bean",
	],
	[
		pos(450, 80),
		sprite("bean"),
		area(),
		move(90, 200),
		// offscreen({ destroy: true }),
		color(0, 255, 0),
		"bean",
	],
	[
		pos(700, 80),
		sprite("bean"),
		area(),
		move(90, 200),
		// offscreen({ destroy: true }),
		color(255, 255, 0),
		"bean",
	],
	[
		pos(950, 80),
		sprite("bean"),
		area(),
		move(90, 200),
		// offscreen({ destroy: true }),
		color(0, 0, 255),
		"bean",
	], 
	[
		pos(1200, 80),
		sprite("bean"),
		area(),
		move(90, 200),
		// offscreen({ destroy: true }),
		color(160, 32, 240),
		"bean",
	],
	[
		pos(1100, 80),
		sprite("bean"),
		area(),
		move(90, 200),
		// offscreen({ destroy: true }),
		color(160, 200, 240),
		"bean",
	]
]

function spawnBean() {

	const rand_choice = randi(0, 5);
	// console.log("rand_choice", rand_choice);
	// console.log("rand_choice", positions[rand_choice]);

	add(
		[
			pos(positions[rand_choice], 80),
			sprite("bean"),
			area(),
			move(90, 200),
			"bean",
		]
	);

	// wait a random amount of time to spawn next tree
	wait(rand(0.8, 1.5), spawnBean);
}

scene("game", () => {
	let score = 0;
	let canPressOne = false;
	let canPressTwo = false;
	let canPressThree = false;
	let canPressFour = false;
	let canPressFive = false;

	const scoreLabel = add([
    	text("score: " + score),
    	pos(24, 24)
	]);
	// loop(1, () => {
	// 	// add bean object
	// 	add(beans[randi(0, beans.length)]);
	// });
	spawnBean();
	platform1 = add([
		k.pos(185, 700),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform2 = add([
		k.pos(435, 700),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform3 = add([
		k.pos(685, 700),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform4 = add([
		k.pos(935, 700),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform5 = add([
		k.pos(1185, 700),
		k.sprite("platfrom"),
		k.area(),
		"platform",
	]);

	platform1.onCollide("bean", () => {
		console.log("collide beans 1");
		canPressOne = true;
	});
	platform1.onCollideEnd("bean", () => {
		console.log("collide beans 1 ended");
		canPressOne = false;
	});
	onKeyPress("1", () => {
		if (canPressOne) {
			console.log("one");
			score += 50;
			scoreLabel.text = "score: " + score;
		};
	});

	platform2.onCollide("bean", () => {
		console.log("collide beans 2");
		canPressTwo = true;
	});
	platform2.onCollideEnd("bean", () => {
		console.log("collide beans 2 ended");
		canPressTwo = false;
	});
	onKeyPress("2", () => {
		if (canPressTwo) {
			console.log("two");
			score += 50;
			scoreLabel.text = "score: " + score;
		};
	});


	platform3.onCollide("bean", () => {
		console.log("collide beans 3");
		canPressThree = true;
	});
	platform3.onCollideEnd("bean", () => {
		console.log("collide beans 3 ended");
		canPressThree = false;
	});
	onKeyPress("3", () => {
		if (canPressThree) {
			console.log("three");
			score += 50;
			scoreLabel.text = "score: " + score;
		};
	});


	platform4.onCollide("bean", () => {
		console.log("collide beans 4");
		canPressFour = true;
	});
	platform4.onCollideEnd("bean", () => {
		console.log("collide beans 4 ended");
		canPressFour = false;
	});
	onKeyPress("4", () => {
		if (canPressFour) {
			console.log("four");
			score += 50;
			scoreLabel.text = "score: " + score;
		};
	});

	platform5.onCollide("bean", () => {
		console.log("collide beans 5");
		canPressFive = true;
	});

	platform5.onCollideEnd("bean", () => {
		console.log("collide beans 5 ended");
		canPressFive = false;
	});

	onKeyPress("5", () => {
		if (canPressFive) {
			console.log("five");
			score += 50;
			scoreLabel.text = "score: " + score;
		};
	});
});

go("game");
