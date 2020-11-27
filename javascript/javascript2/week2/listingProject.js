const listings = [
    {
        type: 'House',
        facilities: ['Altan', 'Have'],
        price: 7438,
        hasGarden: true,
        size: 231,
        img: 'https://loremflickr.com/200/200/House'
    },
    {
        type: 'Dorm',
        facilities: ['Elevator'],
        price: 708,
        hasGarden: false,
        size: 492,
        img: 'https://loremflickr.com/200/200/Dorm'
    },
    {
        type: 'Apartment',
        facilities: ['Parkering'],
        price: 4672,
        hasGarden: true,
        size: 34,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'Apartment',
        facilities: ['Husdyr', 'Have', 'Parkering'],
        price: 5866,
        hasGarden: true,
        size: 464,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'House',
        facilities: ['Have', 'Altan'],
        price: 6749,
        hasGarden: false,
        size: 773,
        img: 'https://loremflickr.com/200/200/House'
    },
    {
        type: 'Farm',
        facilities: ['Husdyr'],
        price: 6184,
        hasGarden: false,
        size: 884,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Farm',
        facilities: ['Elevator'],
        price: 9356,
        hasGarden: true,
        size: 375,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Farm',
        facilities: ['Elevator'],
        price: 5250,
        hasGarden: false,
        size: 502,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Dorm',
        facilities: ['Parkering', 'Elevator'],
        price: 4834,
        hasGarden: true,
        size: 337,
        img: 'https://loremflickr.com/200/200/Dorm'
    },
    {
        type: 'Apartment',
        facilities: ['Husdyr', 'Parkering'],
        price: 8545,
        hasGarden: false,
        size: 268,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'House',
        facilities: ['Elevator'],
        price: 789,
        hasGarden: false,
        size: 191,
        img: 'https://loremflickr.com/200/200/House'
    },
    {
        type: 'Farm',
        facilities: ['Altan', 'Elevator', 'Husdyr'],
        price: 5471,
        hasGarden: false,
        size: 989,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'House',
        facilities: ['Altan'],
        price: 3855,
        hasGarden: true,
        size: 627,
        img: 'https://loremflickr.com/200/200/House'
    },
    {
        type: 'Farm',
        facilities: ['Altan', 'Have'],
        price: 3182,
        hasGarden: false,
        size: 191,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Apartment',
        facilities: ['Elevator', 'Have'],
        price: 6429,
        hasGarden: true,
        size: 494,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'Shed',
        facilities: ['Have'],
        price: 5111,
        hasGarden: false,
        size: 550,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'Shed',
        facilities: ['Altan', 'Have'],
        price: 9786,
        hasGarden: false,
        size: 403,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'Dorm',
        facilities: ['Elevator'],
        price: 854,
        hasGarden: false,
        size: 539,
        img: 'https://loremflickr.com/200/200/Dorm'
    },
    {
        type: 'Farm',
        facilities: ['Have', 'Parkering'],
        price: 6499,
        hasGarden: true,
        size: 112,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Apartment',
        facilities: ['Husdyr', 'Altan'],
        price: 6728,
        hasGarden: false,
        size: 590,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'House',
        facilities: ['Have', 'Elevator', 'Altan'],
        price: 9198,
        hasGarden: true,
        size: 984,
        img: 'https://loremflickr.com/200/200/House'
    },
    {
        type: 'Shed',
        facilities: ['Parkering'],
        price: 8552,
        hasGarden: true,
        size: 497,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'House',
        facilities: ['Altan'],
        price: 9281,
        hasGarden: true,
        size: 613,
        img: 'https://loremflickr.com/200/200/House'
    },
    {
        type: 'Shed',
        facilities: ['Elevator', 'Altan', 'Husdyr'],
        price: 6380,
        hasGarden: true,
        size: 251,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'Farm',
        facilities: ['Parkering', 'Have', 'Altan'],
        price: 2726,
        hasGarden: false,
        size: 123,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Shed',
        facilities: ['Husdyr', 'Elevator', 'Parkering'],
        price: 1145,
        hasGarden: false,
        size: 278,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'Shed',
        facilities: ['Elevator'],
        price: 2867,
        hasGarden: false,
        size: 621,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'Dorm',
        facilities: ['Husdyr'],
        price: 2229,
        hasGarden: true,
        size: 711,
        img: 'https://loremflickr.com/200/200/Dorm'
    },
    {
        type: 'Farm',
        facilities: ['Parkering'],
        price: 3702,
        hasGarden: true,
        size: 815,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Farm',
        facilities: ['Parkering', 'Altan'],
        price: 6685,
        hasGarden: false,
        size: 930,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Farm',
        facilities: ['Altan', 'Elevator', 'Have'],
        price: 435,
        hasGarden: false,
        size: 236,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Farm',
        facilities: ['Husdyr'],
        price: 4585000,
        hasGarden: true,
        size: 679,
        img: 'https://loremflickr.com/200/200/Farm'
    },
    {
        type: 'Apartment',
        facilities: ['Altan', 'Elevator'],
        price: 6905,
        hasGarden: true,
        size: 788,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'Apartment',
        facilities: ['Parkering'],
        price: 9684,
        hasGarden: false,
        size: 349,
        img: 'https://loremflickr.com/200/200/Apartment'
    },
    {
        type: 'Dorm',
        facilities: ['Elevator', 'Have'],
        price: 7000,
        hasGarden: true,
        size: 820,
        img: 'https://loremflickr.com/200/200/Dorm'
    },
    {
        type: 'Shed',
        facilities: ['Elevator'],
        price: 2887,
        hasGarden: false,
        size: 344,
        img: 'https://loremflickr.com/200/200/Shed'
    },
    {
        type: 'Shed',
        facilities: ['Husdyr'],
        price: 8541,
        hasGarden: true,
        size: 191,
        img: 'https://loremflickr.com/200/200/Shed'
    }
]

const filter = {
    type: 'farm',
};
const filter2 = {
    type: 'farm',
    minPrize: 1500000,
};


function filterListings(listings, filter) {
    let listingsToReturn = listings;
    if (filter.type.length > 0) {
        listingsToReturn = listingsToReturn.filter(function getList(listing) {
            return listing.type.toLowerCase() === filter.type.toLowerCase()
        });
    }
    if (filter.minPrize > 0) {
        listingsToReturn = listingsToReturn.filter(listing => {
            return listing.price >= filter.minPrize;
        });
    }

    return listingsToReturn;
}/**
//const farmListings = filterListings(listings, filter);
function filterListings(listings, filter) {
    filterKeys = Object.getOwnPropertyNames(filter)
    filterKeys.forEach(key => {
        console.log(key)
    });


    //    const farmListings = listings.filter(function getList(listing) {
    //      return listing.type.toLowerCase() === filter.type.toLowerCase() && listing.price >= filter.minPrize;
    //});
    //return farmListings;
} */
const cheapFarmListings = filterListings(listings, filter2);
//console.log(cheapFarmListings);
function renderListings(listings) {
    const div = document.querySelector("div")
    const ul = document.createElement('ul');
    listings.forEach(listing => {
        const newLi = document.createElement("li");
        const img = document.createElement('img');
        img.src = listing.img;
        newLi.innerHTML = `type: ${listing.type},<br>
         facilities: ${listing.facilities},<br>
         price: ${listing.price},<br>
         hasGarden: ${listing.hasGarden},<br>
         size: ${listing.size},<br>`;
        newLi.appendChild(img);
        //newLi.innerHTML = 'helo'
        ul.appendChild(newLi);


    });
    div.appendChild(ul);
}
renderListings(cheapFarmListings);