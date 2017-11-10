'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Order Schema
 */
var OrderSchema = new Schema({
  // name: {
  //   type: String,
  //   default: '',
  //   required: 'Please fill Order name',
  //   trim: true
  // },
  shipping: {
    required: 'Please fill Order shipping',
    type: Schema.ObjectId,
    ref: 'Address'
  },
  items: {
    type: [{
      product: {
        type: Schema.ObjectId,
        ref: 'Product'
      },
      delivery: {
        detail: String,
        name: String,
        price: Number
      },
      status: {
        type: String,
        enum: ['waiting', 'accept', 'reject', 'sent', 'unreceived', 'received', 'complete', 'return'],
        default: 'waiting'
      },
      qty: Number,
      amount: Number,
      discount: Number,
      totalamount: Number,
      deliveryprice: Number
    }],
    required: 'Please fill Order items'
  },
  payment: {
    paymenttype: String,
    creditno: String,
    creditname: String,
    expdate: String,
    creditcvc: String,
    counterservice: String
  },
  amount: {
    type: Number,
    required: 'Please fill Order amount'
  },
  discount: {
    type: Number,
    required: 'Please fill Order discount'
  },
  totalamount: {
    type: Number,
    required: 'Please fill Order totalamount'
  },
  deliveryprice: {
    type: Number,
    required: 'Please fill Order tran'
  },
  discountcode: {
    type: String
  },
  status: {
    type: String,
    enum: ['confirm', 'paid', 'prepare', 'deliver', 'complete', 'cancel'],
    default: 'confirm'
  },
  omiseresponse: {

  },
  isTranfer: {
    type: Boolean,
    default: false
  },
  imageslip: {
    type: String,
    default: 'no image'
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

mongoose.model('Order', OrderSchema);
