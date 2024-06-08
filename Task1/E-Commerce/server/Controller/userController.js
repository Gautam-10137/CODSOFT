const UserService=require('../services/UserService');
const UserController={
    getUserDetail: async(req,res)=>{
        try{
            const userId=req.params.userId;

            const user=await UserService.getUserDetail(userId);
            res.status(200).json(user);
            
        }
        catch(error){
            res.status(500).json('Internal server error');
        }
    }
}

module.exports=UserController;