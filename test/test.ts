import { Dictionary } from '../src/hoverProvider/Dictionary';
import { assert } from 'chai';

describe('describe the test', function(){
    it('returns "true"', function(){
        const text = "(G04 = Dwell)"
        const dict = new Dictionary(text);
        assert.isTrue(dict.lookup("G4")=="Dwell");
    })
});