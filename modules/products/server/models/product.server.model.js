'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Please fill Product name'
    },
    detail: {
        type: String
    },
    price: {
        type: Number,
        required: 'Please fill Product price',
    },
    qty: {
        type: Number
    },
    image: {
        required: 'Please fill Product image',
        type: [{
            url: String,
            id: String
        }]
    },
    preparedays: {
        type: Number,
        required: 'Please fill Product preparedays',
    },
    favorite: {
        type: [{
            customerid: {
                type: Schema.ObjectId,
                ref: 'User'
            },
            favdate: {
                type: Date,
                default: Date.now
            }
        }]
    },
    historylog: {
        type: [{
            customerid: {
                type: Schema.ObjectId,
                ref: 'User'
            },
            hisdate: {
                type: Date,
                default: Date.now
            }
        }]
    },
    shopseller: {
        required: 'Please fill Product shopseller',
        type: Schema.ObjectId,
        ref: 'Shop'
    },
    shippings: {
        required: 'Please fill Product shippings',
        type: [{
            shipping: {
                type: Schema.ObjectId,
                ref: 'Shipping'
            },
            shippingstartdate: Date,
            shippingenddate: Date
        }]
    },
    issize: {
        type: Boolean
    },
    // size: {
    //     type: Schema.ObjectId,
    //     ref: 'Sizemaster'
    // },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Product', ProductSchema);