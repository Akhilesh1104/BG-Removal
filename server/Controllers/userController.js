import {Webhook} from 'svix'; 
import userModel from '../Models/userModel.js';

//API Controller function to Manage Clerk User with Database
const clerkWebhooks = async (req,res) => {
    try {
        // Create a Svix instance with Clerk Webhook Secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const {data, type} = req.body;

        switch (type) {
            case "user.created":{

                const userData = {
                   clerkId: data.id,
                   email: data.email_addresses[0].email_address,
                   firstName: data.first_name,
                   lastName: data.last_name,
                   photo: data.image_url,
                }

                await userModel.create(userData);
                return res.json({});

                break;
            }
                     

            case "user.updated":{

                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                }

                await userModel.findOneAndUpdate({clerkId:data.id}, userData);
                return res.json({});

                break;
            }

            case "user.deleted":{

                await userModel.findOneAndDelete({clerkId:data.id})
                return res.json({});

                break;
            }
                    
            
            default:
              break;
        }
        

    } catch (error) {
        console.log(error.message);
        return res.json({success:false, message:error.message});
        
    }
}

export {clerkWebhooks};