'use strict'
const Helpers = use('Helpers')
const Team =  use('App/Models/Team')
const Review =  use('App/Models/Review')
const Image =  use('App/Models/Image')
const Mail = use('Mail')
class HomeController {

    async userRegister({ request, response, session, auth }) {

        const rules = {
            email: 'required|email|unique:users,email',
            name: 'required|string',
            password: 'required'
        }
        const messages = {
            'name.required': 'Name is required',
            'email.required': 'Email is required',
            'email.unique': 'Email is already in use',
            'password.required': 'Password is required',
        }
  
        let data = request.all()
        delete data.password_confirmation
        if (data.role==2 && data.image) {
          let fs = require('fs');
          fs.unlink('public'+data.image, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            // console.log(data.image+' image deleted!');
          });
          data.image = null
        }
        // console.log('register')
        // console.log(data)
  
        const validation = await validateAll(data, rules, messages)
        if (validation.fails()) {
            return response.status(401).json(validation.messages())
        }
  
        let user = await User.create(data)
        return user;
        // return data;
    }

    async userLogin({ request, response, auth, session }) {

        const data = request.all()
        // console.log('login')
        // return data
        try {
            let user = await auth.query().remember(data.rememberMe).attempt(data.email, data.password)
            return user
        } catch (e) {
            // console.log(e.message)
            return response.status(401).json(
                {
                    'message': 'email or password does not match. Please try again.'
                }
            )
        }
  
    }
 
   

   
   



    async logout ({auth, session, response}) {
        console.log('logout')
        try {
          session.clear()
          await auth.logout()
          return response.redirect('/')
        } catch (e) {
            return response.redirect('/')
        //   return false
        }
        return response.redirect('/')
      }
      async initdata({auth}){
          try {
              let user = await auth.getUser()
              return user
              
          } catch (error) {
            return false
          }

      }

      async uploadImages({ request, response }) {
        const uploadImage = request.file('file', {
            types: ['png', 'jpg', 'jpeg'],
            size: '5mb'
        })
    
        // console.log(uploadImage)
        const name = `${new Date().getTime()}` + '.' + uploadImage.subtype
        // const name = 'temp_custom_product.' + uploadImage.subtype
    
        await uploadImage.move(Helpers.publicPath('uploads'), {
            name: name
        })
        if (!uploadImage.moved()) {
            return uploadImage.error()
        }
    
        return response.status(200).json({
            message: 'Image has been uploaded successfully!',
            image_path: `/uploads/${name}`
        })
      }

      async sendContractInfo({ request }) {
          let user = request.all();
		 Mail.send('emails.sendContractInfo', user, (message) => {
			message
				.to("daodds@authentic.dental")
				.from('office@authenticdentalstudio.com', 'office @ Authentic Dental Studio')
				.subject('Authentic Dental Studio')
		})
	}
     
}

module.exports = HomeController
