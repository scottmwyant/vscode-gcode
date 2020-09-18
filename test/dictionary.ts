import { assert } from 'chai';
import { Dictionary } from '../src/hoverProvider/dictionary';

describe('Describe ability to parse inline definitions from comments', function(){
    const data = [
        {
            "text": "(G04 = Dwell)",
            "obj": {"M1": "Program stop, optional"},
            "find": "G4",
            "expected": "Dwell"
        },
        {
            "text": "(G04: Dwell)",
            "obj": {"M1": "Program stop, optional"},
            "find": "G4",
            "expected": "Dwell"
        },
        {
            "text": "( G03: Feed, circular interpolation, counter-clockwise )",
            "obj": {"M1": "Program stop, optional"},
            "find": "G3",
            "expected": "Feed, circular interpolation, counter-clockwise"
        },
        {
            "text": "G116 T=VC33 ( VC33 = Tool number)",
            "obj": {"M1": "Program stop, optional"},
            "find": "VC33",
            "expected": "Tool number"
        },
        {
            "text": "(G01 = feed: linear)",
            "obj": {"M1": "Program stop, optional"},
            "find": "G01",
            "expected": undefined
        },
        {
            "text": "(G01 - Feed)",
            "obj": {"M1": "Program stop, optional"},
            "find": "G01",
            "expected": undefined
        }
    ].forEach(item => {

        it(`${item.text} = ${item.expected}`, function(){
            assert.equal(new Dictionary(item.obj, item.text).lookup(item.find), item.expected);
        });

    });

});