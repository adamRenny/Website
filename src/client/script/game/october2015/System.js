import Phaser from './Phaser';
import Promise from 'bluebird';

export default class GameSystem {
    attach(el) {
        this._clickCount = 0;

        return new Promise((resolve) => {
            this._game = new Phaser.Game(
                800, 600,
                Phaser.AUTO, el,
                {
                    preload: () => this._onPreload(),
                    create: () => {
                        this._onCreate();
                        resolve();
                    },
                    update: () => this._onUpdate(),
                    render: () => this._onRender()
                }
            );
        });
    }

    _onPreload() {
        // this._game.load.image('einstein', '/assets/media/game/sprite/october2015/ra_einstein.png');
        // this._game.load.image('phaser', '/assets/media/game/sprite/october2015/phaser.png');
        this._game.load.atlasJSONHash(
            'bot',
            '/assets/media/game/sprite/october2015/running_bot.png', '/assets/media/game/sprite/october2015/running_bot.json'
        );
    }

    _onCreate() {

        this._bot = this._game.add.sprite(200, 200, 'bot');

        this._bot.animations.add('run');
        this._bot.animations.play('run', 15, true);

        // this._game.physics.startSystem(Phaser.Physics.ARCADE);

        // this._phaser = this._game.add.sprite(this._game.world.centerX, this._game.world.centerY, 'phaser');
        // this._phaser.anchor.set(0.5);

        // this._einstein = this._game.add.sprite(this._game.world.centerX, this._game.world.centerY, 'einstein');
        // this._einstein.anchor.set(0.5);
        // this._einstein.inputEnabled = true;

        // this._einstein.events.onInputDown.add(() => this._onEinsteinClick());

        // this._displayText = this._game.add.text(250, 16, '', {
        //     fill: '#ffffff'
        // });

        // this._game.physics.enable(this._einstein, Phaser.Physics.ARCADE);
        // this._game.physics.enable(this._phaser);

        // this._einstein.body.velocity.x = 150;
    }

    _onUpdate() {
        // if (this._game.physics.arcade.distanceToPointer(this._phaser, this._game.input.activePointer) > 8) {
        //     this._game.physics.arcade.moveToPointer(this._phaser, 300);
        // } else {
        //     this._phaser.body.velocity.set(0);
        // }
    }

    _onRender() {
        this._game.debug.inputInfo(32, 32);
    }

    _onEinsteinClick() {
        console.log('Clicked!');
        this._clickCount++;
        this._displayText.text = 'You clicked ' + this._clickCount + ' times!';
    }
};