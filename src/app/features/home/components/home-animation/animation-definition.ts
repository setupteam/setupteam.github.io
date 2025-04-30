import { AnimationDefinition } from "../../animation";

const TIMING_MULTIPLIER = 1.55;

const timeframe = (from: number, to: number): [number, number] => [
    from * TIMING_MULTIPLIER,
    to * TIMING_MULTIPLIER,
];

const at = (at:number): number => at * TIMING_MULTIPLIER;

export const ANIMATION_TIMESTEP = 10; 

const LOGO_ID = "logo";

const CIRCUIT_MAIN_CIRCLE = `${LOGO_ID} >> .circuit-main-circle`;

const CIRCUIT_TOP_CIRCLE = `${LOGO_ID} >> .circuit-top-circle`;
const CIRCUIT_MIDDLE_CIRCLE = `${LOGO_ID} >> .circuit-middle-circle`;
const CIRCUIT_BOTTOM_CIRCLE = `${LOGO_ID} >> .circuit-bottom-circle`;

const CIRCUIT_TOP_DIAG_LINE = `${LOGO_ID} >> .circuit-top-diag-line`;
const CIRCUIT_MIDDLE_DIAG_LINE = `${LOGO_ID} >> .circuit-middle-diag-line`;
const CIRCUIT_BOTTOM_DIAG_LINE = `${LOGO_ID} >> .circuit-bottom-diag-line`;

const CIRCUIT_TOP_HOR_LINE = `${LOGO_ID} >> .circuit-top-hor-line`;
const CIRCUIT_MIDDLE_HOR_LINE = `${LOGO_ID} >> .circuit-middle-hor-line`;

const CIRCUIT_TOP_VER_LINE = `${LOGO_ID} >> .circuit-top-ver-line`;

const CIRCUIT_MAIN_LINE = `${LOGO_ID} >> .circuit-main-line`;

const DECOR_1_SQUARE = `${LOGO_ID} >> .decor-1-square`;
const DECOR_2_SQUARE = `${LOGO_ID} >> .decor-2-square`;
const DECOR_3_SQUARE = `${LOGO_ID} >> .decor-3-square`;
const DECOR_4_SQUARE = `${LOGO_ID} >> .decor-4-square`;
const DECOR_5_SQUARE = `${LOGO_ID} >> .decor-5-square`;
const DECOR_6_SQUARE = `${LOGO_ID} >> .decor-6-square`;

const LOGO_CAPITAL_S_LETTER = `${LOGO_ID} >> .logo-capital-s-letter`;
const LOGO_CAPITAL_T_LETTER = `${LOGO_ID} >> .logo-capital-t-letter`;
const LOGO_ETUP_LETTERS = `${LOGO_ID} >> .logo-etup-letters`;
const LOGO_EAM_LETTERS = `${LOGO_ID} >> .logo-eam-letters`;

const LOGO_NAME = `${LOGO_ID} >> .logo-name`;
const LOGO_TOP_BLANK = `${LOGO_ID} >> .top-blank`;

const ENGINE_G = `${LOGO_ID} >> .engine-g`;
const ENGINE = `${LOGO_ID} >> .engine`;
const ENGINE_BLANK = `${LOGO_ID} >> .engine-blank`;

const PLAY_LOGO_ANIM_BTN = `${LOGO_ID} >> .play-logo-anim-btn`;

export function generateHomeAnimationDefinition(): AnimationDefinition{
    const circuitLinesAnim:AnimationDefinition = [
        {
            selector: CIRCUIT_TOP_DIAG_LINE,
            timeframe: timeframe(0.5, 1.5),
            from: {
                width: "400px"
            },
            to: {
                width: "0"
            }
        },
        {
            selector: CIRCUIT_MIDDLE_HOR_LINE,
            timeframe: timeframe(0.5, 1.5),
            from: {
                width: "140px"
            },
            to: {
                width: "0"
            }
        },
        {
            selector: CIRCUIT_BOTTOM_DIAG_LINE,
            timeframe: timeframe(0.5, 2),
            from: {
                width: "268px"
            },
            to: {
                width: "0"
            }
        },
        {
            selector: CIRCUIT_TOP_HOR_LINE,
            timeframe: timeframe(1.5, 2),
            from: {
                width: "140px"
            },
            to: {
                width: "0"
            }
        },
        {
            selector: CIRCUIT_MIDDLE_DIAG_LINE,
            timeframe: timeframe(1.5, 2),
            from: {
                width: "270px"
            },
            to: {
                width: "0"
            }
        },
        {
            selector: CIRCUIT_TOP_VER_LINE,
            timeframe: timeframe(2, 2.5),
            from: {
                height: "140px"
            },
            to: {
                height: "0"
            }
        },
        {
            selector: CIRCUIT_MAIN_LINE,
            timeframe: timeframe(2, 2.5),
            from: {
                width: "300px"
            },
            to: {
                width: "0"
            }
        },
    ];

    const circuitTopCircleAnim: AnimationDefinition = [
        {
            selector: CIRCUIT_TOP_CIRCLE,
            timeframe: timeframe(0.5, 1.5),
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(-320px, 196px)',
            }
        },
        {
            selector: CIRCUIT_TOP_CIRCLE,
            timeframe: timeframe(1.5, 2),
            from: {
                transform: 'translate(-320px, 196px)',
            },
            to: {
                transform: 'translate(-470px, 196px)',
            }
        },
        {
            selector: CIRCUIT_TOP_CIRCLE,
            timeframe: timeframe(2, 2.5),
            from: {
                transform: 'translate(-470px, 196px)',
            },
            to: {
                transform: 'translate(-470px, 329px)',
            }
        },
        {
            selector: CIRCUIT_TOP_CIRCLE,
            timeframe: timeframe(2.5, 3),
            from: {
                transform: 'translate(-470px, 329px)',
            },
            to: {
                transform: 'translate(-570px, 329px)',
            }
        },
        {
            selector: CIRCUIT_TOP_CIRCLE,
            at: 4.5,
            styles: {
                opacity: "0"
            },
        },
    ];

    const circuitMiddleCircleAnim: AnimationDefinition = [
        {
            selector: CIRCUIT_MIDDLE_CIRCLE,
            timeframe: timeframe(0.5, 1.5),
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(-178px, 0)',
            }
        },
        {
            selector: CIRCUIT_MIDDLE_CIRCLE,
            timeframe: timeframe(1.5, 2),
            from: {
                transform: 'translate(-178px, 0)',
            },
            to: {
                transform: 'translate(-400px, 100px)',
            }
        },
        {
            selector: CIRCUIT_MIDDLE_CIRCLE,
            timeframe: timeframe(2, 2.5),
            from: {
                transform: 'translate(-400px, 100px)',
            },
            to: {
                transform: 'translate(-650px, 100px)',
            }
        },
        {
            selector: CIRCUIT_MIDDLE_CIRCLE,
            timeframe: timeframe(2.5, 3),
            from: {
                transform: 'translate(-650px, 100px)',
            },
            to: {
                transform: 'translate(-750px, 100px)',
            }
        },
        {
            selector: CIRCUIT_MIDDLE_CIRCLE,
            at: 4.5,
            styles: {
                opacity: "0"
            },
        },
    ];

    const circuitBottomCircleAnim: AnimationDefinition = [
        {
            selector: CIRCUIT_BOTTOM_CIRCLE,
            timeframe: timeframe(0.5, 2),
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(-180px, -185px)',
            }
        },
        {
            selector: CIRCUIT_BOTTOM_CIRCLE,
            timeframe: timeframe(2, 2.5),
            from: {
                transform: 'translate(-180px, -185px)',
            },
            to: {
                transform: 'translate(-400px, -185px)',
            }
        },
        {
            selector: CIRCUIT_BOTTOM_CIRCLE,
            timeframe: timeframe(2.5, 3),
            from: {
                transform: 'translate(-400px, -185px)',
            },
            to: {
                transform: 'translate(-500px, -185px)',
            }
        },
        {
            selector: CIRCUIT_BOTTOM_CIRCLE,
            at: 4.5,
            styles: {
                opacity: "0"
            },
        },
    ];

    const circuitMainCircleAnim: AnimationDefinition = [
        {
            selector: CIRCUIT_MAIN_CIRCLE,
            timeframe: timeframe(3, 3.5),
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(188px, 0)',
            }
        },
        {
            selector: CIRCUIT_MAIN_CIRCLE,
            timeframe: timeframe(3.5, 4),
            from: {
                transformOrigin: "700px 512px",
                transform: 'scale(1) translate(188px, 0)',
            },
            to: {
                transformOrigin: "700px 512px",
                transform: 'scale(0) translate(188px, 0)',
            }
        },
    ];
    
    const engineGAnim: AnimationDefinition = [
        {
            selector: ENGINE_G,
            timeframe: timeframe(3, 3.5),
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(188px, 0)',
            }
        },
        {
            selector: ENGINE_BLANK,
            timeframe: timeframe(3, 3.5),
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(4000px, 0)',
            }
        },
        {
            selector: ENGINE,
            timeframe: timeframe(3, 3.5),
            from: {
                animationDuration: "1s",
            },
            to: {
                animationDuration: "1s",
            },
            classControl: {
                add:["spin-engine-anim"],
                remove:["rotate-engine-anim"]
            }
        },
        {
            selector: ENGINE_G,
            timeframe: timeframe(5, 7.5),
            from: {
                transform: 'scale(1) translate(188px, 0)',
                transformOrigin: "700px 512px",
            },
            to: {
                transform: 'scale(15) translate(188px, 0)',
                transformOrigin: "700px 512px",
            }
        },
    ];

    const decorSquaresAnim: AnimationDefinition = [
        {
            selector: DECOR_1_SQUARE,
            timeframe: timeframe(0.5, 2),
            from: {
                transformOrigin: "512px 512px",
                transform: 'scale(1)',
            },
            to: {
                transformOrigin: "512px 512px",
                transform: 'scale(0)',
            }
        },
        {
            selector: DECOR_2_SQUARE,
            timeframe: timeframe(0.5, 2),
            from: {
                transformOrigin: "512px 512px",
                transform: 'scale(1)',
            },
            to: {
                transformOrigin: "512px 512px",
                transform: 'scale(0)',
            }
        },
        {
            selector: DECOR_3_SQUARE,
            timeframe: timeframe(0.5, 2),
            from: {
                transformOrigin: "512px 512px",
                transform: 'scale(1)',
            },
            to: {
                transformOrigin: "512px 512px",
                transform: 'scale(0)',
            }
        },
        {
            selector: DECOR_4_SQUARE,
            timeframe: timeframe(0.5, 2),
            from: {
                transformOrigin: "512px 512px",
                transform: 'scale(1)',
            },
            to: {
                transformOrigin: "512px 512px",
                transform: 'scale(0)',
            }
        },
        {
            selector: DECOR_5_SQUARE,
            timeframe: timeframe(0.5, 2),
            from: {
                transformOrigin: "512px 512px",
                transform: 'scale(1)',
            },
            to: {
                transformOrigin: "512px 512px",
                transform: 'scale(0)',
            }
        },
        {
            selector: DECOR_6_SQUARE,
            timeframe: timeframe(0.5, 2),
            from: {
                transformOrigin: "512px 512px",
                transform: 'scale(1)',
            },
            to: {
                transformOrigin: "512px 512px",
                transform: 'scale(0)',
            }
        },
    ];

    const logoTitleAnim: AnimationDefinition = [
        {
            selector: LOGO_ETUP_LETTERS,
            timeframe: timeframe(0.5, 1.5),
            from: {
                opacity: '1',
                fontSize: "4rem",
            },
            to: {
                opacity: '0',
                fontSize: "4rem",
            }
        },
        {
            selector: LOGO_EAM_LETTERS,
            timeframe: timeframe(0.5, 1.5),
            from: {
                opacity: '1',
                fontSize: "4rem",
            },
            to: {
                opacity: '0',
                fontSize: "4rem",
            }
        },
        {
            selector: LOGO_ETUP_LETTERS,
            timeframe: timeframe(1.5, 3),
            from: {
                fontSize: "4rem",
            },
            to: {
                fontSize: "0",
            }
        },
        {
            selector: LOGO_EAM_LETTERS,
            timeframe: timeframe(1.5, 3),
            from: {
                fontSize: "4rem",
            },
            to: {
                fontSize: "0",
            }
        },
        {
            selector: LOGO_NAME,
            timeframe: timeframe(3.5, 4),
            from: {
                opacity: "1",
            },
            to: {
                opacity: "0",
            }
        },
        {
            selector: LOGO_NAME,
            timeframe: timeframe(4, 4.5),
            from: {
                fontSize: "4rem",
            },
            to: {
                fontSize: "0",
            }
        },
        {
            selector: LOGO_NAME,
            at: 7.5,
            styles: {
                display: "none",
            }
        },
    ];

    const logoLayerAnim: AnimationDefinition = [
        {
            selector: PLAY_LOGO_ANIM_BTN,
            at: at(2),
            styles: {
                opacity: '0',
            }
        },
    ];

    const testLayerAnim: AnimationDefinition = [
        {
            selector: "test",
            timeframe: timeframe(5, 6),
            from: {
                transform: 'scale(0.1)',
                opacity: '0'
            },
            to: {
                transform: 'scale(1)',
                opacity: '1',
            }
        },
        {
            selector: "test",
            timeframe: timeframe(7, 7.5),
            from: {
                transform: 'scale(1)',
                opacity: '1'
            },
            to: {
                transform: 'scale(1.5)',
                opacity: '0',
            }
        },
        {
            selector: "test",
            at: at(7.5),
            styles: {
                display: 'none',
            }
        },
        {
            selector: LOGO_TOP_BLANK,
            at: at(7.5),
            styles: {
                display: 'none'
            }
        }
    ];

    return [
        ...testLayerAnim, 
        ...circuitTopCircleAnim,
        ...circuitMiddleCircleAnim,
        ...circuitBottomCircleAnim,
        ...circuitLinesAnim,
        ...circuitMainCircleAnim,
        ...decorSquaresAnim,
        ...engineGAnim,
        ...logoTitleAnim,
        ...logoLayerAnim,
    ];
}