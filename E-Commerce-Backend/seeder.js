const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const User = require('./models/userModel'); // Adjust the path as necessary
const Product = require('./models/productModel'); // Adjust the path as necessary
const products = require('./data/products');
const users = require('./data/users');
const connectDb = require('./config/dbConnection');

dotenv.config();


connectDb();


const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, listedBy: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();

        console.log('Data destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
