const { RecordLabel, Band } = require("../src/toClass");

describe('record label class', () => {
    const subpop = new RecordLabel();
    it('contains a bands property', () => {
        expect(subpop.bands).toBeInstanceOf(Array);
    });
    it('adds a band', () => {
        const destinysChild = new Band('Destinys Child', 3, 'R and B');
        subpop.addBand(destinysChild);
        expect(subpop.bands).toContain(destinysChild)
    })
});

describe('bands constructor', () => {
    it('returns an object', () => {
        expect(new Band('Nirvana', 3, 'grunge')).toBeInstanceOf(Object);
    });
    const steps = new Band('Steps', 5, 'pop');
    it('gives the band a name', () => {
        expect(steps.name).toBe('Steps');
    });
    it('tells you how many memebrs are in the band', () => {
        expect(steps.members).toBe(5);
    });    
    it('gives the band a name', () => {
        expect(steps.genre).toBe('pop');
    });
});

describe('methods', () => {
    const pixies = new Band('Pixies', 4, 'alt');
    it('shows the bands albums', () => {
        expect(pixies.albums).toBeInstanceOf(Array);
    });
    pixies.addAlbum('Surfer Rosa');
    it('adds the album to the array', () => {
        expect(pixies.albums).toContain('Surfer Rosa');
    });
});

// now you have got all these tests passing, refactor them in the following ways:
// 1. replace parameters in the constructor describe block with dummies
// 2. change the test on RecordLabel so that it isolates RecordLabel and does not require an actual instance of Band