"use strict";
const express = require("express");
const { findOne } = require("../../models/Employ/Employ.model");
const EmpInfoModal = require('../../models/Employ/Employ.model')

// Product CLASS
class Emp {
    async add_employ(req, res) {
        try {
            const { fullName, date_of_birth, date_of_joining, gender, phone1, phone2, address, email, emp_id,
                fatherName, Nationality,
                Blood_Group, Marital_Status, PAN_No, ADHAR, Bank_No, Bank_IFSC, phone3, Position

            } = req.body;
            // CHECK ALL FIELD IN FILL
            if (!fullName || !date_of_birth || !date_of_joining || !gender || !phone1 || !phone2 || !address || !email || !emp_id || !fatherName || !Nationality || !Blood_Group || !Marital_Status || !PAN_No || !ADHAR || !Bank_No || !Bank_IFSC || !Position || !phone3)
                return res.send({ msg: "Please fill in all fields." });

            // EMAIL VALIDATER
            if (!validateEmail(email))
                return res.send({ msg: "Invalid emails." });
            if (EmpInfoModal.find({}) == email) {
                return res.send({ msg: "alredy exist emails." });
            }

            const employ = new EmpInfoModal({
                fullName,
                date_of_birth,
                date_of_joining,
                gender,
                phone1,
                phone2,
                address,
                email,
                emp_id,
                fatherName,
                phone3,
                Nationality,
                Blood_Group,
                Marital_Status,
                PAN_No,
                ADHAR,
                Bank_No,
                Bank_IFSC,
                Position
                // file,
            });

            //STORE YOUR LOGIN DATA IN DB 
            await employ.save();
            console.log({ employ });
            res.send({ msg: "Success " });
        }
        catch (error) {
            console.log(error);
        }
    }

    async get_emlpoy(req, res, next) {
        EmpInfoModal.find({}).then(function (employee) {
            res.send(employee);
        }).catch(next);
    }

    async get_one_emp(req, res, next) {
        console.log('----------', { id: req.params.id });
        // EmpInfoModal.findOne(req.params.id).then((employee) => {
        //     if (!employee) {
        //         return res.status(404).send();
        //     }
        //     res.send(employee);
        // }).catch((error) => {
        //     res.status(500).send(error);
        // })
        let myquery = { _id: ObjectId(req.params.id) };
        const data = EmpInfoModal.findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
        console.log("daa::", data);

    }
    async emp_delete(req, res) {
        let myquery = { _id: ObjectId(req.params.id) };
        EmpInfoModal.deleteOne(myquery, function (err, obj) {
            if (!obj) {
                return res.status(404).send();
            }
            res.send(obj);
        }).catch((error) => {
            res.status(500).send(error);
        })
    }
    // async emp_update(req, res) {

    //     if (!req.body) {
    //         return res.status(400).send({
    //             message: "Data to update can not be empty!"
    //         });
    //     }

    //     const id = req.params.id;

    //     EmpInfoModal.findByIdAndUpdate(id, req.body)
    //         .then(data => {
    //             if (!data) {
    //                 res.status(404).send({
    //                     message: `Cannot update =${id}`
    //                 });
    //             } else res.send({ message: "updated successfully." });
    //         })
    //         .catch(err => {
    //             res.status(500).send({
    //                 message: "Error updating=" + id
    //             });
    //             console.log(err)
    //         });
    // }


    async emp_update() {
        let myquery = { _id: ObjectId(req.params.id) };
        let newvalues = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level,
            }
        }
        EmpInfoModal.updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
    }
}

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
        ;
}
module.exports = new Emp();
