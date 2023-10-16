import { compare } from "bcrypt";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import res from "express/lib/response.js";
export const registerController = async(req,res) => {
    try {
        const {name,email,password,phone,address}=req.body

        //validations
        if(!name){
            return res.send({error:'Name is Required'});
        }  
        if(!email){
            return res.send({error:'Email is Required'});
        }
        if(!password){
            return res.send({error:'Password is Required'});
        }
        if(!phone){
            return res.send({error:'Phone no. is Required'});
        }
        if(!address){
            return res.send({error:'Address is Required'});
        }
        
        //check User
        const exisitinguser = await userModel.findOne({'email': email})
        //exisiting user
        if (exisitinguser){
            return  res.status(200).send({
                success:true,
                message:"User Already Exist",
            });
        }

        //register user
        const hashedPassword= await hashPassword(password)
         
        //save
        const user= await new userModel({name,email,phone,address,password:hashedPassword}).save();
        
        res.status(201).send({
            success:true,
            message:"user Register Successfully",
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registeration',
            error
        })
    }
};

//POST LOGIN
export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password',
            
            }); 
        }
        //check user
        const user = await userModel.findOne({email:email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email does not exist!',
            });
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        //token
        const token= await JWT.sign({_id:user._id},process.env.JWT_SECERT,{
            expiresIn : "7d"
        });
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }
};

//test controller
export const testController = (req, res) =>{
   try{
     res.send("Protected Routes");
    } catch (error){
        console.log(error);
        res.send({error});
    }
};