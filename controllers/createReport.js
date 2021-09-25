const Report = require("../models/report");
// import {Request,Response} from "express";

module.exports = async(req,res)=>{
    try{
      const{userId,marketId,marketName,cmdtyId,marketType,cmdtyName,priceUnit,convFctr,price}= req.body;
      if(userId&&marketId&&marketName&&cmdtyId&&marketType&&cmdtyName&&priceUnit&&convFctr&&price){
        const report = await Report.create({userId,marketId,marketName,cmdtyId,marketType,cmdtyName,priceUnit,convFctr,price});
      if(report){
          return res.json({ 
            status:"success",
            reportId:report._id})
      }else{
        return res.json({ 
            status:"failed",
            message:"Try Again Later."})
      }
      }else{
          return res.json({
              status:"failed",
              message:"Required Fields Missing."
          })
      }

    }catch(err){
        console.log(err);
        return res.json({
            status:"failed",
            message:err
        })
    }
}