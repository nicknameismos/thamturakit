'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Shop = mongoose.model('Shop'),
    Product = mongoose.model('Product');

/**
 * Globals
 */
var user,
    shop,
    product;

/**
 * Unit tests
 */
describe('Product Model Unit Tests:', function() {
    beforeEach(function(done) {
        user = new User({
            firstName: 'Full',
            lastName: 'Name',
            displayName: 'Full Name',
            email: 'test@test.com',
            username: 'username',
            password: 'password'
        });

        shop = new Shop({
            name: 'Shop name',
            detail: 'Shop detail',
            email: 'Shop email',
            tel: 'Shop tel',
            image: [{
                url: 'img url'
            }],
            map: {
                lat: 'map lat',
                lng: 'map lng'
            },
        });

        user.save(function() {
            shop.save(function() {
                product = new Product({
                    name: 'Product Name',
                    detail: 'Product detail',
                    price: 100,
                    qty: 10,
                    image: [{
                        url: 'img url',
                        id: 'img id'
                    }],
                    preparedays: 10,
                    favorite: [{
                        customerid: user,
                        favdate: new Date('2017-08-21')
                    }],
                    historylog: [{
                        customerid: user,
                        hisdate: new Date('2017-08-21')
                    }],
                    shopseller: shop,
                    user: user

                });

                done();
            });

        });
    });

    describe('Method Save', function() {
        it('should be able to save without problems', function(done) {
            this.timeout(0);
            return product.save(function(err) {
                should.not.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without name', function(done) {
            product.name = '';

            return product.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without price', function(done) {
            product.price = null;

            return product.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without image', function(done) {
            product.image = [];

            return product.save(function(err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without preparedays', function(done) {
            product.preparedays = null;

            return product.save(function(err) {
                should.exist(err);
                done();
            });
        });
    });

    afterEach(function(done) {
        Product.remove().exec(function() {
            Shop.remove().exec(function() {
                User.remove().exec(function() {
                    done();
                });
            });
        });
    });
});