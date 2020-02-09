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
 
    async getTeamMember({ request, response, auth, session }) {
        const data = request.all()
        let members =  await Team.all()
        return members

    }
    async storeTeamData({ request, response, auth, session }) {

        const data = request.all()
        // console.log('login')
        // return data
        try {
            let user =  await Team.create(data)
            return user
        } catch (e) {
            console.log(e.message)
            return response.status(401).json(
                {
                    'message': "check your network"
                }
            )
        }
  
    }
    async deletesingleMember({ request, response, auth, session }) {

        const data = request.all()
        // console.log('login')
        // return data
        try {
            let user =  await Team.query().where('id', data.id).delete();
            return user
        } catch (e) {
            console.log(e.message)
            return response.status(401).json(
                {
                    'message': "check your network"
                }
            )
        }
  
    }
    async getAllReviews({ request, response, auth, session }) {
        // const data = request.all()
        let reviews =  await Review.query().with('images').fetch()
        if(reviews){
        reviews = reviews.toJSON();
            for(let i of reviews){
            i.istrue = false
            }
        }
        return reviews

    }
    async getAllPublishReviews({ request, response, auth, session }) {
        // const data = request.all()
        let reviews =  await Review.query().where('status','Published').orderBy('id','desc').with('images').fetch()
        if(reviews){
        reviews = reviews.toJSON();
            for(let i of reviews){
            i.istrue = false
            }
        }
        return reviews

    }
    async updateReviews({ request, response, auth, session }) {
        const data = request.all()
        let reviews =  await Review.query().where('id',data.id).update(data)
        return reviews

    }
    async getSingleDoctor({params, request, response, auth, session }) {
        // const data = request.all()
        let team =  await Team.query().where('id',params.docId).fetch()
        return team


    }

    async storeReviewData({ request, response, auth, session }) {

        const data = request.all()
        // let images = data.additionalImages
        // delete data.additionalImages
        let review =  await Review.create(data)

        // if(images.length){
        //     for(let i in images){
        //         let ob={
        //             reviewId:review.id,
        //             image:images[i],
        //         }
        //         let img =  await Image.create(ob)
        //     }
            
        // }
        return review
        
  
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
      async sendApointmentInfo({ request }) {
          let user = request.all();
        //   office@authenticdentalstudio.com
		await Mail.send('emails.sendInformation', user, (message) => {
            message
            // office@authenticdentalstudio.com
            // no-reply@authenticdentalstudio.com
				.to("office@authenticdentalstudio.com")
				.from('no-reply@authenticdentalstudio.com', 'no reply @ Authentic Dental Studio')
				.subject('Authentic Dental Studio')
		})


	}
      async sendContractInfo({ request }) {
          let user = request.all();
        //   office@authenticdentalstudio.com
        //   no-reply@authenticdentalstudio.com
		await Mail.send('emails.sendContractInfo', user, (message) => {
			message
				.to("office@authenticdentalstudio.com")
				.from('no-reply@authenticdentalstudio.com', 'no reply @ Authentic Dental Studio')
				.subject('Authentic Dental Studio')
		})


	}
     
}

module.exports = HomeController
