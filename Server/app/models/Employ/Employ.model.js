"use strict"

const { Schema, model } = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const EmpInfo = Schema({

    fullName
        : {
        type: String,
        required: true,
        // trim: true
    },
    fatherName
        : {
        type: String,
        required: true,
        // trim: true
    },
    date_of_birth
        : {
        type: Date,
        required: true,

    },
    date_of_joining: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone1: {
        type: Number,
        required: true,
        minimum: 12,
        maximum: 12,
    },
    phone2: {
        type: Number,
        required: true,
        minimum: 12,
        maximum: 12,
    },
    phone3: {
        type: Number,
        required: true,
        minimum: 12,
        maximum: 12,
    },
    Local_Address: {
        type: String,
        required: true
    },
    Parmanent_Address: {
        type: String,
        required: true
    },
    Refrence_Phone: {
        type: Number,
        required: true,
        minimum: 10,
        maximum: 10,
    },
    Nationality: {
        type: String,
        required: true
    },
    Blood_Group: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    Position: {
        type: String,
        required: true
    },
    Marital_Status: {
        type: String,
        required: true
    },
    PAN_No: {
        type: String,
        required: true,
        minimum: 10,
        maximum: 10,
    },
    Photo: {
        type: Buffer,

    },
    Who: {
        type: Buffer,
    },
    Department: {
        type: String,
    },
    Designation: {
        type: String,
    },
    Password : {
        type: String,
    },
    ADHAR: {
        type: Number,
        required: true,
        trim: true,
        minimum: 12,
        maximum: 12,
    },
    Bank_No: {
        type: String,
        required: true
    },
    Bank_IFSC: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    emp_id: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    },

)

// collection creation 
const EmpInfoModal = model('EMPLOY', EmpInfo, "EmpInfo");





module.exports = EmpInfoModal;

