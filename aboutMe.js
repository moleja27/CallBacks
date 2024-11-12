const printName = (callback) => {
    console.log("My name is Alejandra Marin");
    setTimeout(callback, 2000); // Llama al siguiente callback después de 2 segundos
};

const printAge = (callback) => {
    console.log("I'm 31 years old");
    setTimeout(callback, 3000); // Llama al siguiente callback después de 3 segundos
};

const printLocation = (callback) => {
    console.log("I was born in Colombia but I live in Sweden");
    setTimeout(callback, 4000); // Llama al siguiente callback después de 4 segundos
};

const printHobbies = () => {
    console.log("I enjoy hiking and painting");
};

// Ejecutar las funciones en secuencia utilizando callbacks anidados
printName(() => {
    printAge(() => {
        printLocation(() => {
            printHobbies();
        });
    });
});
