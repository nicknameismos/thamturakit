'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Shop Schema
 */
var ShopSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: 'Please fill Shop name',
        trim: true
    },
    detail: {
        type: String,
        trim: true
    },
    email: {
        type: String
    },
    tel: {
        type: String
    },
    image: {
        type: [{
            url: String
        }]
    },
    map: {
        lat: {
            type: String
        },
        lng: {
            type: String
        }
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
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Shop', ShopSchema);