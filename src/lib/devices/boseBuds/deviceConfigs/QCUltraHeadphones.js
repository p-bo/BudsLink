'use strict';

export default {
    name: 'QuietComfort Ultra Headphones',
    id: '4066',
    type: 'headband',

    batterySingle: true,

    eq: {
        bands: ['bass', 'mid', 'treble'],
        range: 8,
        custom: true,
        presets: {
            flat: [0, 0, 0],
            bassBoost: [8, 0, 0],
            bassReducer: [-8, -2, 0],
            trebleBoost: [0, 0, 6],
            trebleReducer: [0, -2, -6],
        },
    },

    audioModes: {
        defaultConfig: {
            index: 256,
            id: 0,
            editable: true,
            added: false,
            ui: false,
            fav: false,
            name: '',
            flag: 255,
            cnc: 5,
            autoCnc: false,
            spatial: 0,
            wind: false,
            anc: false,
        },
        presets: {
            quiet: {
                index: 0,
                id: 1,
                editable: false,
                added: true,
                ui: true,
                fav: true,
                name: 'Quiet',
                cnc: 10,
            },

            aware: {
                index: 1,
                id: 2,
                editable: false,
                added: true,
                ui: true,
                fav: true,
                name: 'Aware',
                cnc: 0,
            },

            immersion: {
                index: 2,
                id: 34,
                editable: false,
                added: true,
                ui: true,
                fav: true,
                name: 'Immersion',
                cnc: 10,
                spatial: 2,
            },
        },

        ancToggle: false,
        nc: {level: 10, steps: 1},
        autoNc: false,
        windToggle: true,
        spatialMode: true,
        spatialPreset: ['immersion'],
        userMode: [
            'commute', 'focus', 'home', 'music', 'outdoor', 'relax',
            'run', 'walk', 'work', 'workout',
        ],
        totalModes: 10,
        maxAllowedFav: 10,
    },

    sideTone: 4,
    inEarDetection: true,
    autoAnswer: true,
    autoPause: true,
    dualConnection: true,

    albumArtIcon: 'headphone-1',
    budsIcon: 'headphone-1',
};

