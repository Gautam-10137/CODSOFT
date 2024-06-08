const User=require('../model/User');
const UserService={
    getUserDetail: async(userId)=>{
        try{
            const user=await User.findById(userId);
            const {username,email}=user;
            const userDetail={
                username,email
            }
            return userDetail;
        }
        catch(error){
            console.error(error);
        }
    }
}

module.exports=UserService;