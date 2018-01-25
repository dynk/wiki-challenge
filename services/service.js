async function openSearchWikipedia(body){
    return new Promise((resolve, reject) => {
        const result = mockOpenSearchWikipedia();
        return resolve(result);
    });
}

async function compareWikipedia(body){
    const {pageId} = body;
    const person = await searchWikipedia(pageId);
    const personSpouse = await searchWikipedia(person.spouse.pageId);
    return compare(person, personSpouse);
}

function compare(personA, personB){
    const childrenMap = {};
    const result = {
        spouseMatch: false,
        childrenMatch: []
    }
    if(personA.pageId === personB.spouse.pageId){
        result.spouseMatch = true;
    }
    for(const c of personA.children){
        childrenMap[c.pageId] = true;
    }
    for(const c of personB.children){
        if(childrenMap[c.pageId]){
            result.childrenMatch.push(c);
        }
    }
    return result;
}



function mockOpenSearchWikipedia(){
    const result = [
        {
            pageId: 1,
            name: 'George W Bush',
            link: 'https://en.wikipedia.org/wiki/George_W._Bush'
        },
        {
            pageId: 2,
            name: 'George H W Bush',
            link: 'https://en.wikipedia.org/wiki/George_H._W._Bush'
        }
    ]
    return result;
}

async function searchWikipedia(pageId){
    return new Promise((resolve, reject) => {
        const result = mockDatabase(pageId);
        return resolve(result);
    });
}
// Laura Welch 
const georgeWBush = {
    pageId: 1,
    name: 'George W Bush',
    spouse: {
        pageId: 3,
        name: 'Laura Welch'
    },
    children: [
        {
            pageId: 4,
            name: 'Barbara'
        },
        {
            pageId: 5,
            name: 'Jenna'
        }
    ]
}
const lauraWelch = {
    pageId: 3,
    name: 'Laura Welch',
    spouse: {
        pageId: 1,
        name: 'George W Bush'
    },
    children: [
        {
            pageId: 4,
            name: 'Barbara'
        },
        {
            pageId: 5,
            name: 'Jenna'
        }
    ]
}

function mockDatabase(pageId) {
    const db = {
        1: georgeWBush,
        3: lauraWelch
    }
    return db[pageId];
}

module.exports = {
    openSearchWikipedia,
    searchWikipedia,
    compareWikipedia
}