music.setTempo(120)
for (let index = 0; index < 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
}
for (let index = 0; index < 2; index++) {
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Double))
}
basic.forever(function () {
	
})
