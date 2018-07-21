export const TEST_DATA = {
    '1': {
        active: false,
        description: 'the small brown fox jumped over the lazy dog and this is a longer desc for a reason.',
        title: "Episode 1",
        xpos: 100,
        ypos: 100
    },
    '2': {
        active: false,
        description: 'the small brown fox jumped over the lazy dog and this is a longer desc for a reason.' +
        'I am also a long desc. Because I need to test that shit. Otherwise UX breaks and no one has a clue why,' +
        'so here we are with the longass desc.',
        title: "Episode 2",
        xpos: 200,
        ypos: 200
    },
    '3': {
        active: false,
        description: 'WHATEVER',
        title: "Episode 3",
        xpos: 250,
        ypos: 190
    },
    '4': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 4",
        xpos: 240,
        ypos: 160
    },
    '5': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 5",
        xpos: 50,
        ypos: 200
    },
    '6': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 6",
        xpos: 350,
        ypos: 300
    },
    '7': {
        active: false,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 7",
        xpos: 250,
        ypos: 300
    },
    '8': {
        active: true,
        description: 'LOOK AT ME I am a descripton.',
        title: "Episode 8",
        xpos: 150,
        ypos: 300
    }
};

export const ANNOUNCEMENTS = [
    {title: 'yeesss', imageUrl: require('./mediaAssets/fairyStock.png'), description: 'Active Episode Nameless You are here. Please continue, we miss you!', activeEpisode: true},
    {title: 'noooo', imageUrl: 'test', description: 'This is a generic announcment \\o/'},
    {title: 'maaaybe', imageUrl: 'test', description: 'IGGGGNOOOORE ME!!!'},
    {title: 'ehhhhh?', imageUrl: 'test', description: 'seriously, why are you still scrolling. There are no annoucements. NO one is here. No one wants to be here. we all went home to eat dinner. well, some of us anyway. You should come over for dinner sometime.'},
];