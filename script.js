function task1() {
    console.log(`running task 1:`);

    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7
    }


    console.log(`key values greater than or equal to three:`);
    for (let x in numbers) {
        if (numbers[x] >= 3) console.log(numbers[x]);
    }

    console.log(`task 1 done.`);
}

function task2() {
    console.log(`running task 2:`);

    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 // вывести это число
                }
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            }
        ]
    };

    console.log(`author = ${post.author}`);
    console.log(`dislikes 0 = ${post.comments[0].rating.dislikes}`);
    console.log(`userId 1 = ${post.comments[1].userId}`);
    console.log(`text 1 = ${post.comments[1].text}`);

    console.log(`task 2 done.`);
}

function task3() {
    console.log(`running task 3:`);
    
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        }
    ];

    products.forEach(item => {
        console.log(`price of product ${item.id} before sale: ${item.price}`);
        item.price *= 0.85;
        console.log(`price of product ${item.id} after sale: ${item.price}`);
    });

    console.log(`task 3 done.`);
}

function task4() {
    console.log(`running task 4:`);

    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg"
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78
        }
    ];

    const productsWithPicture = products.filter(item => {
        if (item.photos != undefined && item.photos.length > 0) {
            return item;
        }
    });


    console.log(`products with pictures:`);
    productsWithPicture.forEach(item => {
        console.log(item);
    });

    products.sort((a, b) => {
        return a.price - b.price;
    });

    console.log(`product sorted by price ascending:`);
    products.forEach(item => {
        console.log(item);
    })

    console.log(`task 4 done.`);
}

function task5() {
    console.log(`running task 5:`);

    const en = [
        "mon", 
        "tue", 
        "wed", 
        "thu", 
        "fri", 
        "sat", 
        "sun"
    ];

    const ru = [
        "понедельник", 
        "вторник", 
        "среда", 
        "четверг", 
        "пятница", 
        "суббота", 
        "воскресенье"
    ];

    const enRu = {};

    en.forEach((key, val) => enRu[key] = ru[val]);

    console.log(enRu);

    console.log(`task 5 done.`);
}