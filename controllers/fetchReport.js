const Report = require("../models/report");
// import {Request,Response} from "express";


module.exports = async(req,res)=>{
    try{
      const{reportId}=req.query;
      if(reportId){
        const report = await Report.find({_id:reportId});
      if(report){
          return res.json({ 
            status:"success",
            report:report})
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