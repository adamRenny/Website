let Phaser = window.Phaser;

export default class GameSystem {
    attach(el) {
        this._game = new Phaser.Game(800, 600, Phaser.AUTO, el.id, {
            preload: () => this._preload(),

            create: () => this._create()
        })
    }

    _preload() {
        this._game.load.image('einstein', '/assets/media/img/game/october2015/ra_einstein.png');
    }

    _create() {
        this._game.add.sprite(0, 0, 'einstein');
    }
};